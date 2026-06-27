const { validationResult } = require("express-validator");
const nodemailer = require("nodemailer");
const Contact = require("../models/Contact");

const isEmailConfigured = () => {
  const user = process.env.EMAIL_USER?.trim();
  const pass = process.env.EMAIL_PASS?.trim();
  if (!user || !pass) return false;

  const placeholders = [
    "your_email",
    "your_app_password",
    "example",
    "changeme"
  ];
  return !placeholders.some(
    (term) =>
      user.toLowerCase().includes(term) || pass.toLowerCase().includes(term)
  );
};

const createTransporter = () =>
  nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

// POST /api/contact
exports.sendMessage = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ success: false, errors: errors.array() });
  }

  const { name, email, subject, message } = req.body;

  try {
    const contact = await Contact.create({ name, email, subject, message });

    let emailNotice = "";
    if (isEmailConfigured()) {
      try {
        const transporter = createTransporter();
        await transporter.sendMail({
          from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
          to: process.env.EMAIL_USER,
          replyTo: email,
          subject: `[Portfolio] ${subject}`,
          html: `
            <div style="font-family:sans-serif;max-width:600px">
              <h2 style="color:#00ff88">New Portfolio Message</h2>
              <p><strong>From:</strong> ${name} (${email})</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <hr/>
              <p>${message.replace(/\n/g, "<br/>")}</p>
            </div>
          `
        });
      } catch (sendErr) {
        console.error("Contact email failed:", sendErr);
        emailNotice =
          " Email was saved, but notification delivery failed because the email credentials are not valid.";
      }
    } else {
      console.warn(
        "Email credentials are not configured or are using placeholder values. Skipping notification send."
      );
      emailNotice =
        " Email notifications are currently disabled because email credentials are not configured.";
    }

    res.status(201).json({
      success: true,
      message: `Message received! I\'ll get back to you soon.${emailNotice}`,
      id: contact._id
    });
  } catch (err) {
    console.error("Contact error:", err);
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to save or process the message. Please try again."
      });
  }
};
