export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: 'Full Stack' | 'AI & Scientific' | 'Web Systems';
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  role: string;
  period: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  architecture?: {
    pipeline: string[];
    apis: string[];
    testing: string;
  };
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  bullets: string[];
  skills: string[];
  badge?: string;
}

export interface Responsibility {
  role: string;
  organization: string;
  period?: string;
  description: string;
  tag: string;
}

export interface Achievement {
  title: string;
  organization: string;
  year: string;
  description: string;
  highlight?: string;
  badge?: string;
}

export const PERSONAL_INFO = {
  name: "Ujwal Dimri",
  pronouns: "he/him",
  tagline: "Full Stack Developer and aspiring DevSecOps Engineer, building reliable web systems.",
  shortBio: "B.Tech Computer Science student specializing in DevOps at UPES. Associate Technical Head at IET UPES Chapter. Focused on full-stack engineering, secure delivery, and cloud technologies.",
  location: "Dehradun / Rishikesh, India",
  email: "ujwaldimri223@gmail.com",
  phone: "+91 9368631788",
  linkedin: "https://linkedin.com/in/ujwal-dimri-82400729a",
  github: "https://github.com/UjwalDimri",
  education: {
    degree: "B.Tech in Computer Science Engineering (DevOps Specialization)",
    institution: "University of Petroleum and Energy Studies (UPES)",
    expectedGraduation: "2029",
    cgpa: "8.24 / 10",
    schooling: [
      { level: "Senior Secondary (XII)", school: "SBM Public School, Rishikesh", score: "78.4% (Best of 5)" },
      { level: "Secondary (X)", school: "SBM Public School, Rishikesh", score: "92.6%" }
    ]
  },
  stats: [
    { label: "CGPA (1st Year)", value: "8.24/10" },
    { label: "SIH Automated Tests", value: "40" },
    { label: "Hackathon Rank", value: "Top 2 UK" },
    { label: "Tech Chapter Lead", value: "IET UPES" }
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    id: "xebia",
    company: "Xebia",
    role: "Web Development Intern",
    period: "July 2026",
    location: "Gurugram / Remote",
    type: "Internship",
    badge: "Current",
    summary: "Worked on the enterprise Xebia Learning Management System (LMS), contributing to frontend development, performance optimization, and cross-functional engineering workflows.",
    bullets: [
      "Built and integrated responsive web components for the LMS platform serving Admin and Student archetypes, improving workflow efficiency and page load performance.",
      "Collaborated with senior frontend engineers to implement accessible, standards-compliant HTML/CSS/JavaScript features across multiple LMS modules.",
      "Participated in code reviews, sprint planning, and cross-functional syncs with product and QA teams to ship production-ready features on schedule."
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Web", "Accessibility (WCAG)", "Git", "Agile"]
  },
  {
    id: "inamigos",
    company: "InAmigos Foundation",
    role: "AI Web Development Intern",
    period: "June 2026 – July 2026",
    location: "Remote",
    type: "Internship",
    summary: "Built a cinematic space-themed web application deliverable with zero external framework overhead, featuring procedural HTML5 canvas rendering.",
    bullets: [
      "Engineered a procedural NASA-inspired solar corona on HTML5 Canvas and an interactive 3D perspective-tilted planetary navigation system in vanilla JavaScript.",
      "Optimized 60 FPS starfield rendering pipelines with adaptive particle physics and responsive viewport handling for mobile and desktop screens.",
      "Maintained an AI-assisted cloud platform instance, fine-tuning generative prompts and resolving cross-browser CSS rendering inconsistencies."
    ],
    skills: ["HTML5 Canvas", "Vanilla JavaScript", "CSS3 3D Transforms", "Performance Tuning", "AI Prompting"]
  },
  {
    id: "udaan",
    company: "Udaan Education Foundation",
    role: "Research & Development Intern",
    period: "June 2026 – July 2026",
    location: "Remote",
    type: "Internship",
    summary: "Collaborated on full-stack architecture modernization, research, and technical optimization for the foundation’s primary web platform.",
    bullets: [
      "Conducted technical research and performance audits to optimize digital presence, page speed metrics, and cross-device accessibility.",
      "Implemented responsive UI components and backend route optimizations to enhance volunteer and student engagement rates."
    ],
    skills: ["Full Stack Web", "Web Optimization", "Technical Research", "Responsive Development"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "heatwatch",
    title: "HeatWatch",
    subtitle: "Personalized Human Thermal-Stress Monitoring Platform",
    tagline: "Smart India Hackathon project that calculates UTCI & HTSI from multi-source weather telemetry to protect vulnerable outdoor workforces.",
    category: "AI & Scientific",
    featured: true,
    liveUrl: "https://heatwatch-14t5.onrender.com",
    role: "Lead Full Stack & Core Pipeline Developer",
    period: "2026",
    highlights: [
      "Implemented the scientific Universal Thermal Climate Index (UTCI) polynomial model calculating physiological heat strain from vapour pressure and mean radiant temperature.",
      "Trained a Random Forest ML model layering worker occupation, physical exertion, hydration, and vulnerability factors into a personalized Heat Thermal Stress Index (HTSI).",
      "Engineered role-based dashboards (Citizen, Government, Admin) with JWT authentication and interactive Leaflet.js + OpenStreetMap geospatial risk heatmaps.",
      "Integrated Open-Meteo, NASA POWER, and IMD API weather feeds with automated fallback redundancy, validated by 40 automated test suites."
    ],
    metrics: [
      { label: "Automated Tests", value: "40" },
      { label: "Telemetry Feeds", value: "3 Sources" },
      { label: "Model Architecture", value: "UTCI + RF" }
    ],
    tags: ["Node.js", "Express.js", "MongoDB", "EJS", "Leaflet.js", "Chart.js", "ml-random-forest", "JWT"],
    architecture: {
      pipeline: [
        "Live Weather Ingestion (Open-Meteo, NASA POWER, IMD)",
        "Biometeorological Physics Engine (Vapour pressure, Mean Radiant Temp, UTCI)",
        "Random Forest Personalization (Occupation & Activity Risk Weights)",
        "Geospatial GIS Visualization & Critical Push Alerts"
      ],
      apis: ["Open-Meteo API", "NASA POWER API", "India Meteorological Dept (IMD)"],
      testing: "40 unit & integration tests covering UTCI mathematical precision, API fallback tolerance, and auth boundaries."
    }
  },
  {
    id: "volunteer-system",
    title: "Volunteer Registration System",
    subtitle: "Enterprise Volunteer Management for NayePankh Foundation",
    tagline: "A scalable full-stack portal modernizing NGO volunteer onboarding, profile administration, and verification workflows.",
    category: "Full Stack",
    featured: true,
    liveUrl: "https://volunteer-registration-system-for.onrender.com",
    role: "Full Stack Engineer",
    period: "2026",
    highlights: [
      "Engineered secure end-to-end registration and profile management with server-side validation, relational data schemas, and role permissions.",
      "Constructed admin portals for batch volunteer status auditing, filtering, and centralized record management.",
      "Streamlined volunteer onboarding operations, reducing manual processing time by over 70%."
    ],
    metrics: [
      { label: "Architecture", value: "Relational MVC" },
      { label: "Database", value: "MySQL" },
      { label: "Deployment", value: "Render" }
    ],
    tags: ["Node.js", "Express.js", "MySQL", "EJS", "HTML5", "CSS3", "JavaScript", "Render"]
  },
  {
    id: "judge-platform",
    title: "Judge Evaluation Platform",
    subtitle: "Real-Time Multi-Judge Scoring & Feedback System",
    tagline: "High-concurrency web application for hackathons and technical events, replacing paper rubrics with digitized instant scoring.",
    category: "Web Systems",
    featured: false,
    role: "Backend & Frontend Developer",
    period: "2026",
    highlights: [
      "Developed structured evaluation services allowing multiple judges to score presentations across customizable weighted rubrics concurrently.",
      "Designed responsive, low-latency scoring forms with instant client-side validation to prevent duplicate or missing submission errors.",
      "Significantly cut event deliberation time by automating leaderboard aggregation and score normalizations."
    ],
    metrics: [
      { label: "Latency", value: "<100ms" },
      { label: "Process", value: "100% Digitized" },
      { label: "Role", value: "Full Stack" }
    ],
    tags: ["Node.js", "Express.js", "REST APIs", "JavaScript", "Responsive UI"]
  }
];

export const SKILL_CATEGORIES = [
  {
    name: "Languages",
    skills: [
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "Code" },
      { name: "Python", level: "Proficient", icon: "Terminal" },
      { name: "C", level: "Core Systems", icon: "Cpu" },
      { name: "SQL", level: "Relational Queries", icon: "Database" }
    ]
  },
  {
    name: "Web & Backend",
    skills: [
      { name: "Node.js", level: "Production", icon: "Server" },
      { name: "Express.js", level: "REST Microservices", icon: "Cpu" },
      { name: "MongoDB", level: "NoSQL Modeling", icon: "Database" },
      { name: "MySQL", level: "Relational Schema", icon: "Database" },
      { name: "HTML5 & CSS3", level: "Semantic Markup", icon: "Browsers" },
      { name: "REST APIs", level: "API Architecture", icon: "PlugsConnected" }
    ]
  },
  {
    name: "DevSecOps & Cloud",
    skills: [
      { name: "Linux", level: "CLI & Administration", icon: "TerminalWindow" },
      { name: "Git & GitHub", level: "Collaborative GitOps", icon: "GitBranch" },
      { name: "CI/CD Pipelines", level: "Automated Workflows", icon: "CloudArrowUp" },
      { name: "Docker (Learning)", level: "Containerization", icon: "Cube" },
      { name: "Bash Scripting", level: "Shell Automation", icon: "Terminal" },
      { name: "Render & Cloud PaaS", level: "Service Deployment", icon: "CloudArrowUp" }
    ]
  },
  {
    name: "Security & Testing",
    skills: [
      { name: "API Security", level: "JWT / Auth Flows", icon: "ShieldCheck" },
      { name: "Postman & Hoppscotch", level: "API Testing & Mocking", icon: "PaperPlaneTilt" },
      { name: "Automated Testing", level: "Unit & Integration", icon: "CheckCircle" },
      { name: "OWASP Principles", level: "Secure Dev Practices", icon: "Lock" }
    ]
  }
];

export const LEADERSHIP_ROLES: Responsibility[] = [
  {
    role: "Associate Technical Head",
    organization: "IET UPES Chapter",
    period: "July 2026 – Present",
    description: "Leading the core technical team in planning and executing hackathons, hands-on developer workshops, and mentoring 100+ junior student engineers.",
    tag: "Technical Leadership"
  },
  {
    role: "Events Core Member",
    organization: "CSI UPES Chapter",
    period: "2025 – Present",
    description: "Orchestrated large-scale university technical symposiums, managing participant infrastructure, logistics, and real-time event operations.",
    tag: "Event Operations"
  },
  {
    role: "Contributor",
    organization: "GDG UPES",
    period: "2025 – Present",
    description: "Supported Google Developer Group community hackathons, study jams, and technical outreach workshops across the university.",
    tag: "Community"
  },
  {
    role: "Changemaker",
    organization: "UPES Social Initiatives",
    period: "2025 – 2026",
    description: "Facilitated technical communications and digital support partnerships connecting NGO social organizations with academic departments.",
    tag: "Social Impact"
  },
  {
    role: "Class Representative",
    organization: "School of Computer Science, UPES",
    period: "2025 – 2026",
    description: "Served as the primary liaison between academic faculty and student cohorts to streamline curriculum feedback and resource coordination.",
    tag: "Student Governance"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Rank 134 / 1500 (Top 2 in Uttarakhand & #1 in Dehradun)",
    organization: "Union Bank IDEA 2.0 National Hackathon",
    year: "2026",
    description: "Competed among 1,500 national engineering teams, developing an innovative fintech & civic solution to earn regional #1 standing in Dehradun.",
    highlight: "#1 in Dehradun",
    badge: "Top 0.9%"
  },
  {
    title: "Selected Open Source Contributor",
    organization: "GirlScript Summer of Code (GSSoC)",
    year: "2026",
    description: "Selected to contribute to prominent open-source repositories, collaborating on modular features and bug fixes across diverse codebases.",
    highlight: "GSSoC 2026",
    badge: "Selected"
  },
  {
    title: "Top Performer",
    organization: "GDG Study Jam",
    year: "2025",
    description: "Recognized as a leading participant in cloud computing, modern development tracks, and hands-on laboratory milestones.",
    highlight: "Top Performer",
    badge: "Honor"
  },
  {
    title: "CSS (Basic) Certified",
    organization: "HackerRank",
    year: "2025",
    description: "Demonstrated verified mastery of modern CSS layout mechanisms, specificity rules, media queries, and box models.",
    highlight: "Verified",
    badge: "Certification"
  },
  {
    title: "Finalist — ProtoRush 2.0",
    organization: "Rapid Prototyping Competition",
    year: "2025",
    description: "Finalist in a fast-paced technical prototyping competition, engineering and presenting a functional product prototype under strict time constraints.",
    highlight: "Finalist",
    badge: "Award"
  }
];
