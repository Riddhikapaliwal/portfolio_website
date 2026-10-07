// ==============================================================================
// Riddhika PALIWAL — PERSONAL PORTFOLIO DATA CONFIGURATION
// ==============================================================================
// All editable personal information is centralized in this single file.
// Look for "// EDIT HERE" comments to update links, descriptions, or metrics.
// ==============================================================================

// ===============================
// EDIT HERE — INTRO CONFIGURATION
// ===============================
// Set to true if you want the photo and CLI intro to appear on every single visit.
// If false, it only shows on the first visit (saved in localStorage).
export const SHOW_INTRO_EVERY_VISIT = false;

// Path to profile photograph (drop your photo at src/assets/profile.jpg)
export const PROFILE_IMAGE_PATH = "/profile.jpg";

export const portfolio = {
  // ===============================
  // EDIT HERE — PERSONAL INFORMATION
  // ===============================
  personal: {
    name: "Riddhika Paliwal",
    role: "Full Stack Developer",
    subtitle: "Software Developer / Computer Science Student",
    location: "Jaipur, India",
    metaLine: "JAIPUR, INDIA • CSE • FINAL YEAR • OPEN TO SOFTWARE ROLES",
    status: "Open to Software Engineering Opportunities",
    currentlySummary: "Building • Learning • Solving",
    heroHeadline: {
      line1: "BUILDING.",
      line2: "LEARNING.",
      line3: "SOLVING."
    },
    heroDescription:
      "Computer Science student building full-stack products and sharpening problem-solving through C++ and DSA.",
    education: {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "JECRC University",
      period: "2022 — 2026", // EDIT HERE: Update graduation year if needed
      location: "Jaipur, India"
    }
  },

  // ===============================
  // EDIT HERE — SOCIAL & EXTERNAL LINKS
  // ===============================
  links: {
    email: "paliwalriddhika24@gmail.com", // EDIT HERE: Replace with your actual email
    github: "https://github.com/Riddhikapaliwal", // EDIT HERE: Replace with your actual GitHub URL
    linkedin: "https://www.linkedin.com/in/riddhika-paliwal", // EDIT HERE: Replace with your actual LinkedIn URL
    leetcode: "https://leetcode.com/u/riddhikapaliwal/", // EDIT HERE: Replace with your actual LeetCode URL
    resume: "/resume.pdf" // EDIT HERE: Replace with your actual resume link (e.g. Google Drive or PDF)
  },

  // ===============================
  // EDIT HERE — ABOUT SECTION
  // ===============================
  about: {
    heading: "A little about me.",
    paragraphs: [
      "I'm a Computer Science student who started with very little understanding of DSA and gradually became comfortable solving problems in C++. Along the way, I got interested in building products too — from campus platforms to real-time applications.",
      "I enjoy the part of software development where an idea goes from a rough thought to something people can actually use."
    ],
    figuringOutNote: {
      title: "Currently figuring out:",
      items: [
        "Better backend engineering",
        "System design",
        "Cleaner code",
        "Building things without tutorials"
      ]
    }
  },

  // ===============================
  // EDIT HERE — 300+ DSA SECTION
  // (Visual focus on the massive number)
  // ===============================
  dsa: {
    number: "300+",
    label: "PROBLEMS SOLVED ON LEETCODE",
    story:
      "I didn't even know what DSA was until my second year of college. The first challenge wasn't always the logic — sometimes it was simply getting comfortable expressing that logic in C++. 300 problems later, C++ syntax stopped being the main obstacle."
  },

  // ===============================
  // EDIT HERE — SELECTED WORK / PROJECTS
  // (Different layout compositions per project)
  // ===============================
  projects: [
    {
      id: "01",
      numberStr: "PROJECT 01",
      title: "LOOP OUT",
      description:
        "A campus-focused professional network designed around students, skills and collaboration.",
      techStack: "React · Vite · Tailwind CSS · Firebase · Firestore",
      whatIBuilt: [
        "Profiles",
        "Skill discovery",
        "Posts",
        "Ratings",
        "Campus reputation",
        "Authentication"
      ],
      // EDIT HERE: URLs
      githubUrl: "https://github.com/Riddhikapaliwal/loop-out",
      liveUrl: "https://loop-out-demo.vercel.app",
      layoutType: "text-left-visual-right",
      visualTreatment: "square"
    },
    {
      id: "02",
      numberStr: "PROJECT 02",
      title: "MESSENGER",
      description:
        "A real-time messaging application built to understand authentication, communication and modern full-stack architecture.",
      techStack: "Next.js · TypeScript · PostgreSQL · Pusher · Tailwind CSS",
      whatIBuilt: [
        "Real-time bi-directional messaging",
        "User authentication & session authorization",
        "Group conversations & 1-on-1 threads",
        "Online presence indicators",
        "Database persistence with Prisma"
      ],
      // EDIT HERE: URLs
      githubUrl: "https://github.com/Riddhikapaliwal/messenger-app",
      liveUrl: "https://messenger-app-demo.vercel.app",
      layoutType: "visual-left-text-right",
      visualTreatment: "rounded"
    },
    {
      id: "03",
      numberStr: "PROJECT 03",
      title: "NEWSAGENT",
      description:
        "An AI-powered research and news aggregation workflow combining multiple information sources into a single interface.",
      techStack: "React / Vite · FastAPI · PostgreSQL · Docker",
      whatIBuilt: [
        "Automated technical information ingestion",
        "Semantic summary pipeline",
        "FastAPI asynchronous background tasks",
        "Dockerized modular deployment"
      ],
      // EDIT HERE: URLs
      githubUrl: "https://github.com/Riddhikapaliwal/newsagent",
      liveUrl: "https://github.com/Riddhikapaliwal/newsagent",
      layoutType: "narrow-editorial",
      visualTreatment: "browser-window",
      status: "In Progress"
    }
  ],

  // ===============================
  // EDIT HERE — SKILLS INDEX
  // (Typographic directory — no logo wall)
  // ===============================
  skillsIndex: [
    {
      index: "01",
      category: "LANGUAGES",
      skills: "C++ · JavaScript · TypeScript · Python · SQL"
    },
    {
      index: "02",
      category: "FRONTEND",
      skills: "React · Next.js · Tailwind CSS · Bootstrap"
    },
    {
      index: "03",
      category: "BACKEND",
      skills: "Node.js · Express · REST APIs · JWT Authentication"
    },
    {
      index: "04",
      category: "DATABASE",
      skills: "PostgreSQL · MongoDB · MySQL · Firebase"
    },
    {
      index: "05",
      category: "TOOLS",
      skills: "Git · GitHub · Postman · Docker · Vercel"
    },
    {
      index: "06",
      category: "CORE CS",
      skills: "DSA · OOP · DBMS · OS · Computer Networks"
    }
  ],

  // ===============================
  // EDIT HERE — EXPERIENCE TIMELINE
  // (Minimal line timeline — no cards)
  // ===============================
  experience: [
    {
      year: "2024",
      period: "June 2024 — August 2024", // EDIT HERE: Exact dates
      role: "SOFTWARE DEVELOPMENT INTERN",
      company: "Mediku2 Ventures Pvt. Ltd.",
      location: "Remote / Hybrid",
      points: [
        "Built and maintained responsive frontend modules using React.",
        "Integrated client applications with backend REST APIs and handled async state management.",
        "Participated in agile code reviews, debugging UI flows, and optimizing load times."
      ],
      learned: "Learned production sprint discipline, code reviews, and shipping features to real users."
    }
  ],

  // ===============================
  // EDIT HERE — ACHIEVEMENTS
  // (Large typography focus)
  // ===============================
  achievements: [
    {
      bigStat: "04th",
      title: "Smart India Hackathon",
      detail: "National finalist standing competing across nationwide engineering teams in an intensive 36-hour sprint.",
      year: "2023"
    },
    {
      bigStat: "TOP 8",
      title: "Capgemini HackQuest",
      detail: "University-level competitive algorithmic problem solving and rapid prototyping.",
      year: "2024"
    },
    {
      bigStat: "300+",
      title: "LeetCode Problems",
      detail: "Continuous algorithmic rigor focusing on C++, tree traversals, graphs, and dynamic programming.",
      year: "2023 — Present"
    },
    {
      bigStat: "LEAD",
      title: "Student Representative",
      detail: "University Grievance Redressal Committee at JECRC University, acting as student-administration liaison.",
      year: "2023 — 2024"
    },
    {
      bigStat: "MUSIC",
      title: "Lead Cajonist",
      detail: "Swaraag Music Club acoustic percussionist for campus live concerts and events.",
      year: "2022 — Present"
    }
  ],

  // ===============================
  // EDIT HERE — "WHAT I'M FIGURING OUT"
  // (Personal snapshot of current learning)
  // ===============================
  learningGoals: [
    {
      num: "01",
      topic: "Backend engineering",
      detail: "Understanding how systems operate behind the UI — database transactions, connection pools, and resilient APIs."
    },
    {
      num: "02",
      topic: "System design",
      detail: "Studying scalable architectures, trade-offs between consistency and latency, and real-time networking."
    },
    {
      num: "03",
      topic: "Writing cleaner code",
      detail: "Refactoring for clarity, choosing solid naming conventions, and reducing unnecessary abstractions."
    },
    {
      num: "04",
      topic: "Turning ideas into usable products",
      detail: "Taking projects past tutorial code into deployed products that actual people can interact with."
    }
  ],

  // ===============================
  // EDIT HERE — CONTACT SECTION
  // (Large expressive editorial typography)
  // ===============================
  contact: {
    headingLines: ["LET'S", "MAKE", "SOMETHING."],
    questions: [
      "Have a role?",
      "Have an idea?",
      "Want to talk engineering?"
    ],
    closingNote: "I'm always open to discussing full-stack roles, C++ problem solving, or interesting projects."
  },

  // ===============================
  // EDIT HERE — FOOTER
  // ===============================
  footer: {
    name: "Riddhika Paliwal",
    year: "2026",
    location: "Jaipur, India",
    colophon: "Designed as black ink on white paper."
  }
};
