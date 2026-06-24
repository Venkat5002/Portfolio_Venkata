// ============================================
// PORTFOLIO CONFIGURATION FILE
// Personalized from V Venkata Rupin's Resume
// ============================================

export const siteConfig = {
  // Personal Information
  name: "V Venkata Rupin",
  shortName: "Rupin",
  title: "4th Year B.Tech Student",
  subtitle: "Aspiring Software Engineer",
  tagline: "Passionate about building efficient software and practical AI applications",
  
  // Profile image
  avatar: "/src/assets/profile-photo.jpg",

  // Contact Information
  contact: {
    email: "venigallavenkatarupin@gmail.com",
    phone: "+91-7671800789",
    location: "Hyderabad, India",
  },

  // Social Links
  social: {
    github: "https://github.com/Venkat5002",
    linkedin: "https://www.linkedin.com/in/venkatarupin/",
    twitter: "",
    website: "",
  },

  // Education
  education: {
    institution: "Malla Reddy University",
    degree: "B.Tech in Computer Science & Engineering",
    year: "2023 - 2027 (Expected)",
    location: "Hyderabad, India",
    cgpa: "8.72",
  },

  // Previous Education
  previousEducation: [
    {
      degree: "Intermediate",
      specialization: "Physics, Chemistry & Mathematics",
      institution: "Narayana Junior College",
      year: "2023",
      score: "7.74",
    },
    {
      degree: "CBSE",
      institution: "Delhi Public School",
      year: "2021",
      score: "6.70",
    },
  ],

  // Stats displayed in hero
  stats: {
    cgpa: "8.72",
    projects: "3+",
    certifications: "3+",
    year: "4th Year",
  },

  // Availability status
  availability: {
    isAvailable: true,
    message: "Open to Opportunities",
    opportunityType: "Actively seeking internships for Summer 2025",
  },
};

// Skills Configuration - From Resume
export const skillsConfig = {
  languages: ["Python", "Java", "C++", "R", "MySQL"],
  tools: ["Jupyter Notebook", "CursorAI", "VS Code", "GitHub", "Power BI", "Spring Tools"],
  frameworks: ["React", "HTML", "CSS", "JavaScript", "JSON"],
  databases: ["MySQL"],
  
  // Core competencies
  competencies: [
    "Full Stack Development",
    "Problem Solving",
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management",
    "Version Control",
    "AI/ML Applications",
    "RESTful APIs",
  ],
};

// Projects Configuration - From Resume
export const projectsConfig = [
  {
    title: "Book Worm – E-Book Maker",
    description: "Developed a full-stack e-book creation platform with seamless reading and publishing experience. Enabled user content formatting, publishing, and editing with intuitive UI and backend services.",
    problem: "Needed a platform for users to create, format, and publish e-books easily",
    solution: "Built a complete publishing platform with user-friendly editor and backend integration",
    technologies: ["HTML", "CSS", "JavaScript", "Java", "MySQL"],
    category: "Full Stack",
    duration: "Sept–Oct 2024",
    github: "https://github.com/Venkat5002",
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "Pack Your Bags – Travel Agency",
    description: "Designed a travel planner offering personalized trip suggestions and affordable packages. Implemented itinerary creation, booking, and user login with a focus on real-time efficiency.",
    problem: "Travelers needed a one-stop platform for planning and booking trips",
    solution: "Created a comprehensive travel platform with personalized recommendations",
    technologies: ["Java", "MySQL"],
    category: "Full Stack",
    duration: "Jan–Mar 2024",
    github: "https://github.com/Venkat5002",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "GadgetCore – E-Commerce Platform",
    description: "Developed an e-commerce platform for selling earbuds and audio accessories with responsive UI. Added product filters, cart functionality, and React routing for dynamic user experience.",
    problem: "Needed a modern e-commerce solution for audio gadgets",
    solution: "Built a feature-rich shopping platform with filters and cart system",
    technologies: ["HTML", "CSS", "JavaScript", "React", "JSON"],
    category: "Frontend",
    duration: "Mar–Apr 2025",
    github: "https://github.com/Venkat5002",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
];

// Certifications - From Resume
export const certificationsConfig = [
  {
    title: "Graphic Design Essentials",
    issuer: "Canva",
    date: "June 27, 2025",
    highlights: [
      "Visual design principles: layout, alignment, balance, contrast",
      "Typography, colour theory, and composition fundamentals",
    ],
  },
  {
    title: "Mastering Generative AI and ChatGPT",
    issuer: "GeeksforGeeks",
    date: "July 8, 2025",
    highlights: [
      "5-week course on prompt engineering, LLMs, and generative AI",
      "Built AI-powered tools using ChatGPT APIs",
    ],
  },
  {
    title: "MongoDB Developer's Toolkit",
    issuer: "GeeksforGeeks",
    date: "July 26, 2025",
    highlights: [
      "Building, querying, and scaling MongoDB applications",
      "Aggregation pipelines, indexing, and performance tuning",
    ],
  },
];

// Extra-curricular achievements
export const achievementsConfig = [
  "Cambridge English Empower B2 Level Certification",
  "Certificate of Participation for Technical Presentation among 50+ teams",
  "Secured 4th place in institute-level Elocution competition",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// Footer Links
export const footerConfig = {
  quickLinks: ["About", "Skills", "Projects", "Contact"],
  services: ["Full Stack Development", "Web Development", "UI/UX Design", "API Development"],
};
