import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Company Website with Admin Panel",
    description:
      "I created a complete website for my company with over 15+ pages, featuring an admin panel to dynamically manage certifications and blogs. The messaging system was built using NodeMailer. The website is built with MERN stack and styled with Tailwind CSS. For the backend, I used Multer and Cloudinary for file handling and storage. The UI is highly polished and user-friendly.",
    tools: [
      "MERN",
      "Tailwind CSS",
      "NodeMailer",
      "Multer",
      "Cloudinary",
      "JWT",
      "Bcrypt",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "Mobile Wallpaper Application",
    description:
      "I developed the backend for a mobile wallpaper application for a client. My work involved creating multiple APIs and functionalities, including image upload using Cloudinary and Multer, authentication with JWT, and MongoDB for data management.",
    tools: ["Express", "MongoDB", "Node.js", "JWT", "Cloudinary", "Multer"],
    role: "Backend Developer",
    code: "",
    demo: "",
    image: realEstate,
  },
  {
    id: 3,
    name: "School CRM SaaS Application",
    description:
      "This School CRM SaaS application is designed to be simple to use for anyone. It features a complete admin dashboard for students, staff, teachers, and parents. Functionalities include attendance tracking, result printing, admit card generation, fee collection, live messaging updates to parents, and much more. Future updates will add even more features.",
    tools: ["MERN", "Tailwind CSS", "Node.js", "MongoDB", "Express", "JWT"],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 4,
    name: "Blood Bank Management Application",
    description:
      "I created a blood bank application to manage blood collection for multiple organizations. The application uses MERN stack, and I implemented bcrypt for secure authentication along with necessary modules for efficient backend functionality.",
    tools: ["MERN", "Bcrypt", "Multer", "Cloudinary", "MongoDB", "Express"],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: ayla,
  },
  {
    id: 5,
    name: "Employee Monitoring System",
    description:
      "I am working on an employee monitoring system to track client working hours and monitor employee activities when they log into the company's system. The system captures all necessary activities and generates data that is displayed directly on the admin dashboard, providing insights into employee productivity.",
    tools: ["MERN", "Node.js", "MongoDB", "Express", "ActivityWatch", "JWT"],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: crefin,
  },
];
