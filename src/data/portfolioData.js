export const profile = {
  name: "Amal T V",
  brandName: "beyondstack.dev",
  role: "Full Stack Developer",
  tagline: "Building production web and mobile applications with clean architecture, real-time features, and user-centered design.",
  location: "Based in Kerala, India",
  email: "amal790257@gmail.com",
  phone: "+91 9497515494",
  resumeUrl: "#",
  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    leetcode: "https://leetcode.com/",
  },
};

export const stats = [
  { label: "Years Experience", value: "1+" },
  { label: "Projects Shipped", value: "5+" },
  { label: "Happy Clients", value: "2+" },
  { label: "Cups of Coffee", value: "999+" },
];

export const skills = [
  { name: "React.js", level: 95 },
  { name: "JavaScript / TypeScript", level: 92 },
  { name: "Node.js & Express", level: 90 },
  { name: "Firebase / Firestore", level: 85 },
  { name: "MongoDB", level: 85 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Socket.io & WebSocket", level: 82 },
  { name: "Docker & AWS", level: 75 },
];

export const projects = [
  {
    id: 1,
    title: "Shop-Seeker E-Commerce",
    description: "Full-stack e-commerce platform with OTP signup, Razorpay payments, admin CMS, and inventory management. Deployed on AWS EC2 with Nginx and PM2.",
    tags: ["React", "Node.js", "MongoDB", "Razorpay", "AWS"],
    image: "https://placehold.co/800x600/121218/7c5cff?text=Shop-Seeker",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 2,
    title: "Quick Chat",
    description: "Real-time messaging app with JWT authentication, Socket.io for live messaging, image sharing via Cloudinary, and Zustand state management. Hosted on Render.",
    tags: ["React", "Socket.io", "JWT", "Cloudinary", "Render"],
    image: "https://placehold.co/800x600/121218/ff6b9d?text=Quick+Chat",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 3,
    title: "Atlant Global Parcel Delivery System",
    description: "Enterprise delivery management system with 3 integrated apps (admin dashboard, driver app, customer tracking). Features real-time parcel scanning, driver assignment, route optimization, and live location tracking using Firebase and WebSocket.",
    tags: ["React", "Node.js", "Firebase", "WebSocket", "Real-time"],
    image: "https://placehold.co/800x600/121218/22d3ee?text=Atlant+Global",
    caseStudy: true,
  },
  {
    id: 4,
    title: "WaterScience E-Commerce Platform",
    description: "Multi-tenant e-commerce platform with 4 applications: customer ordering app, dealer management app, central command-and-control center, and driver delivery app. Built with React, Vite, Node.js, Express, Firebase Cloud Functions, and Capacitor for native Android features.",
    tags: ["React", "Vite", "Node.js", "Firebase", "Capacitor"],
    image: "https://placehold.co/800x600/121218/7c5cff?text=WaterScience",
    caseStudy: true,
  },
];

export const experience = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Solsten Data Consulting Pvt. Ltd.",
    period: "August 2025 — Present",
    description: "Building production e-commerce platforms, operations dashboards, and delivery management systems. Developed WaterScience platform and Hermes delivery system using React, Vite, Node.js, Express, Firebase, and Capacitor for Android.",
  },
  {
    id: 2,
    role: "Full Stack Developer (Contract)",
    company: "Plus UAE",
    period: "2025",
    description: "Built a modular website builder and CMS dashboard using Next.js and React. Developed integrated chatbot with dynamic UI components and email automation using Resend API.",
  },
  {
    id: 3,
    role: "MERN Stack Developer (Trainee)",
    company: "Brototype",
    period: "2023 — 2024",
    description: "Completed full-time MERN stack training with hands-on projects including a full e-commerce platform. Practiced Git workflows, responsive UI development, REST API design, and agile collaboration.",
  },
];
