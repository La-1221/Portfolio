export const PROFILE = {
  name: "Lakachew Ferede",
  lastName: "Arutie",
  role: "Computer Science Graduate",
  email: "lakachewferede1@gmail.com",
  phone: "+251 976 703 274",
  location: "Addis Ababa, Ethiopia",
  github: "https://github.com/La-1221",
  linkedin: "https://linkedin.com/in/lakachew-ferede",
  bio: `Recent Computer Science graduate from Debre Tabor University with a
    strong foundation in software development, system design, and
    problem-solving. I enjoy learning new technologies and adapting to
    different environments — whether working independently or as part
    of a team. Currently seeking opportunities in software development,
    IT support, or data analysis where I can contribute to meaningful,
    impactful projects.`
};

export const ROLES = [
  "MERN Stack Developer",
  "Computer Science Graduate",
  "Full-Stack Engineer",
  "Problem Solver"
];

export const STATS = [
  { value: "3.54", label: "CGPA / 4.0" },
  { value: "5+", label: "Certifications" },
  { value: "3", label: "Months Internship" },
  { value: "2026", label: "Graduate" }
];

export const SKILLS = {
  frontend: [
    { name: "React.js", level: 85 },
    { name: "JavaScript (ES6+)", level: 82 },
    { name: "HTML5 / CSS3", level: 88 },
    { name: "Responsive Design", level: 80 },
    { name: "TypeScript", level: 50 }
  ],
  backend: [
    { name: "Express.js", level: 80 },
    { name: "Node.js", level: 78 },
    { name: "MongoDB", level: 78 },
    { name: "JWT Authentication", level: 75 },
    { name: "Java", level: 62 },
    { name: "Phyton", level: 62 }
  ],
  tools: [
    { name: "Git & GitHub", level: 75 },
    { name: "REST APIs", level: 78 },
    { name: "Cap Cut", level: 70 },
    { name: "Photo Shop", level: 55 }
  ]
};

export const TECH_PILLS = [
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript",
  "TypeScript",
  "Java",
  "Phyton",
  "JWT",
  "Git",
  "GitHub",
  "REST API",
  "HTML5",
  "CSS3"
];

export const PROJECTS = [
  {
    id: 1,
    title: "Vehicle Insurance Management System",
    description:
      "A full-stack Vehicle Insurance Management System with policy creation, renewal tracking, and claims processing. Built secure JWT-based authentication with role-based access control for Admin, Staff, and Customer roles.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
    category: "fullstack",
    featured: true,
    liveUrl: "https://github.com/La-1221",
    githubUrl: "https://github.com/La-1221"
  },
  {
    id: 2,
    title: "Student Management System",
    description:
      "A class project built during second year — a desktop application for managing student records with full CRUD functionality, backed by a relational database.",
    techStack: ["Java", "Database (SQL)", "OOP"],
    category: "academic",
    featured: false,
    liveUrl: "",
    githubUrl: "https://github.com/La-1221"
  },
  {
    id: 3,
    title: "Unique Physio",
    description:
      "A physiotherapy clinic web application for managing patient appointments, treatment plans, and therapist schedules. Built with a clean, responsive interface for both clinic staff and patients.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js"],
    category: "fullstack",
    featured: false,
    liveUrl: "",
    githubUrl: "https://github.com/La-1221/unique-physio"
  }
];

export const SERVICES = [
  {
    icon: "⬡",
    title: "Full-Stack Web Apps",
    description:
      "Building complete MERN stack applications — from database schema and REST API design to responsive, functional React interfaces."
  },
  {
    icon: "◈",
    title: "REST API Development",
    description:
      "Designing and building Express.js APIs with secure JWT authentication, role-based access control, and clean endpoint structure."
  },
  {
    icon: "◉",
    title: "Frontend Development",
    description:
      "Creating responsive, user-friendly interfaces with React.js, focused on clean layouts and smooth user experience."
  },
  {
    icon: "◫",
    title: "IT Support & Networking",
    description:
      "Hands-on experience with networking fundamentals and IT support, gained through a hands-on banking systems internship."
  },
  {
    icon: "◑",
    title: "Database Design",
    description:
      "Structuring MongoDB and SQL databases for real-world systems, including schema design for management and tracking systems."
  },
  {
    icon: "◳",
    title: "Video & Graphics Design",
    description:
      "Additional creative skill set in video editing and graphics design — useful for product demos, branding, and presentations."
  }
];

export const CERTIFICATIONS = [
  "Artificial Intelligence",
  "Fundamental Programming",
  "Android Development (Kotlin)",
  "Data Science",
  "Employability & Entrepreneurship"
];

export const EXPERIENCE = {
  role: "IT / Networking Intern",
  company: "Abay Bank",
  period: "June 2025 – August 2025",
  points: [
    "Gained hands-on experience in networking and IT support",
    "Learned core banking system operations",
    "Worked collaboratively in a professional team environment"
  ]
};

export const EDUCATION = {
  degree: "Bachelor of Science in Computer Science",
  school: "Debre Tabor University, Ethiopia",
  period: "2022 – 2026",
  gpa: "3.54 / 4.0",
  exitExam: "74%",
  coursework: [
    "Data Structures and Algorithms",
    "Database Systems",
    "Software Engineering",
    "Computer Networks & System Administration",
    "Operating Systems"
  ]
};

export const LANGUAGES = [
  { name: "Amharic", level: "Native", percent: 100 },
  { name: "English", level: "Professional", percent: 82 }
];

export const NAV_LINKS = [
  { label: "About", to: "about" },
  { label: "Education", to: "education" },
  { label: "Skills", to: "skills" },
  { label: "Experience", to: "experience" },
  { label: "Projects", to: "projects" },
  { label: "Services", to: "services" },
  { label: "Contact", to: "contact" }
];
