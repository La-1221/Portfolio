# Lakachew Ferede Arutie — MERN Stack Portfolio

A full-stack developer portfolio built with MongoDB, Express, React, and Node.js — populated with real CV data: education, certifications, internship experience, and projects.

## Project Structure

```
portfolio/
├── client/                  # React frontend
│   └── src/
│       ├── components/      # Modular UI components
│       │   ├── Navbar.js/css
│       │   ├── Hero.js/css
│       │   ├── Skills.js/css      (skills + education + certifications)
│       │   ├── Projects.js/css    (projects + internship experience)
│       │   ├── Services.js/css
│       │   ├── Contact.js/css
│       │   └── Footer.js/css
│       ├── hooks/
│       │   ├── useScrollReveal.js
│       │   └── useTypewriter.js
│       └── utils/
│           ├── api.js
│           └── data.js      # All CV-derived content lives here
└── server/                  # Express + MongoDB backend
    ├── index.js
    ├── models/
    │   ├── Contact.js
    │   └── Project.js
    ├── routes/
    │   ├── contact.js
    │   └── projects.js
    └── controllers/
        ├── contactController.js
        └── projectController.js
```

## Quick Start

### 1. Install all dependencies

```bash
npm run install-all
```

### 2. Configure the server

```bash
cd server
cp .env.example .env
# Edit .env with your MongoDB URI and email credentials
```

| Variable     | Description                              |
|--------------|-------------------------------------------|
| `PORT`       | Server port (default: 5000)               |
| `MONGO_URI`  | MongoDB connection string                 |
| `EMAIL_USER` | Gmail address for contact notifications   |
| `EMAIL_PASS` | Gmail App Password (not your login pass)  |
| `CLIENT_URL` | React app URL (default: localhost:3000)   |

### 3. Run in development

```bash
npm run dev
```

Starts both client (port 3000) and server (port 5000) concurrently.

### 4. Build for production

```bash
npm run build
```

## What's Included (from your CV)

- **Hero** — Name, rotating role titles, CGPA/certifications/internship stats
- **Skills Matrix** — Tab-filtered Frontend / Backend / Tools, each with real proficiency levels
- **Education card** — Debre Tabor University, CGPA 3.54/4.0, exit exam score, coursework
- **Certifications card** — All 5 certifications from the Ethiopian Five Million Coders Program
- **Project Showcase** — Vehicle Insurance Management System (featured) + Student Management System
- **Experience timeline** — Abay Bank IT/Networking Internship
- **Services** — Based on your actual technical skill set
- **Contact Form** — Real email, phone, GitHub (La-1221), and LinkedIn — saves to MongoDB + sends email via Nodemailer

## Customization

Edit `client/src/utils/data.js` to update any content — it's the single source of truth for:
- `PROFILE` — name, contact details, bio
- `SKILLS` — frontend/backend/tools proficiency
- `PROJECTS` — project list (also syncs live from MongoDB if you add more via the API)
- `SERVICES`, `CERTIFICATIONS`, `EXPERIENCE`, `EDUCATION`, `NAV_LINKS`

## Tech Stack

| Layer     | Technology                              |
|-----------|-------------------------------------------|
| Frontend  | React 18, CSS Modules, react-scroll       |
| Backend   | Node.js, Express.js                       |
| Database  | MongoDB, Mongoose                         |
| Email     | Nodemailer (Gmail)                        |
| Fonts     | Syne, JetBrains Mono, DM Sans (Google)    |

## Deployment

- **Frontend**: Deploy `client/build` to Vercel / Netlify
- **Backend**: Deploy `server/` to Railway / Render / Heroku
- Set `REACT_APP_API_URL` in client env to your production server URL

## Next Steps to Personalize Further

1. Add a real photo — place it in `client/public/` and reference it in `Hero.js`
2. Add the GitHub repo links for your two projects in `utils/data.js` (currently pointing to your profile root)
3. If you build more projects, either add them to `PROJECTS` in `data.js`, or `POST` them to `/api/projects` and they'll show automatically (MongoDB data takes priority over the static fallback)
