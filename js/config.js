/* ==========================================================================
   PORTFOLIO CONFIG — edit this file only. No HTML changes needed.
   ========================================================================== */
window.PORTFOLIO_CONFIG = {

  /* ---------- Site / SEO ---------- */
  site: {
    title: "Mohammad Mohiuddin — Senior Software Engineer · Full-Stack & AI Systems",
    description: "Senior Software Engineer building enterprise full-stack applications (Java, Spring Boot, Angular, microservices) and agentic AI systems (LangGraph, Google ADK, RAG, MCP).",
    shareImage: "assets/images/profile.jpeg",
    logoText: "Mohiuddin",
  },

  /* ---------- Appearance ---------- */
  theme: {
    defaultMode: "auto",          // "dark" | "light" | "auto" (follows device)
    accentColor: "#6366f1",       // any CSS color
    accentChoices: ["#6366f1", "#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#06b6d4", "#ec4899"],
    font: "Inter",                // "Inter" | "Poppins" | "Space Grotesk" | "system"
    radius: 16,                   // card corner radius in px
    animations: true,             // fade-in on scroll + counting stats
    showSettingsPanel: true,      // floating gear button for visitors (theme + accent)
  },

  /* ---------- Sections: order = display order, enabled = show/hide ---------- */
  sections: [
    { id: "hero",           enabled: true },
    { id: "skills",         enabled: true },
    { id: "experience",     enabled: true },
    { id: "projects",       enabled: true },
    { id: "certifications", enabled: true },
    { id: "contact",        enabled: true },
  ],

  /* ---------- Hero ---------- */
  hero: {
    badge: "Available for Work",
    showBadge: true,
    greeting: "Hello, I'm",
    name: "Mohammad Mohiuddin",
    tagline: "Senior Software Engineer building enterprise full-stack and <strong>agentic AI</strong> systems with <strong>3+ years</strong> of experience",
    intro: "Specializing in Java, Spring Boot, Angular and microservices for insurance, procurement, payroll and ERP domains, and now building multi-agent AI with LangGraph, Google ADK, RAG and MCP.",
    photo: "assets/images/profile.jpeg",
    photoBadge: "Available for hire",
    resumeUrl: "assets/resume.pdf",          // set "" to hide the button
    resumeFileName: "Mohammad_Mohiuddin_CV.pdf",
    stats: [
      { value: "3+",   label: "Years Exp" },
      { value: "7+",   label: "Projects Delivered" },
      { value: "700+", label: "Problems Solved" },
    ],
  },

  /* ---------- Social links (leave url "" to hide) ---------- */
  social: [
    { type: "github",   url: "https://github.com/MoHiUdDiN17" },
    { type: "linkedin", url: "https://www.linkedin.com/in/mohi17/" },
    { type: "upwork",   url: "" },   // paste your Upwork profile URL to show the icon
    { type: "email",    url: "mailto:mohiuddinmohammad2000@gmail.com" },
  ],

  /* ---------- Skills ---------- */
  skills: {
    title: "Technical Skills",
    subtitle: "Full-stack expertise across enterprise backends, modern frontends and agentic AI, with a focus on secure, scalable systems.",
    categories: [
      { icon: "code",     name: "Languages",              items: ["Java", "TypeScript", "JavaScript", "Python", "Groovy", "SQL", "C++", "C"] },
      { icon: "server",   name: "Backend & Architecture", items: ["Spring Boot", "Spring Security", "Grails", "FastAPI", "REST APIs", "Resilience4j", "Microservices", "Event-Driven Design", "SOLID & Design Patterns"] },
      { icon: "layout",   name: "Frontend",               items: ["Angular", "React", "Redux", "PrimeNG", "Tailwind CSS", "Bootstrap"] },
      { icon: "cpu",      name: "AI & Agentic Systems",   items: ["LangGraph", "LangChain", "Google ADK", "Multi-Agent Orchestration", "MCP", "FastMCP", "RAG", "Vector Databases", "Gemini", "Agent Harness Engineering"] },
      { icon: "database", name: "Data & Messaging",       items: ["PostgreSQL", "Redis", "RabbitMQ", "Server-Sent Events (Mercure)", "JasperReports"] },
      { icon: "shield",   name: "Security, DevOps & Tools", items: ["Keycloak", "OAuth 2.0", "LDAP / Active Directory", "Docker", "GitLab CI/CD", "Consul", "Git", "Jira", "Claude Code"] },
    ],
  },

  /* ---------- Experience ---------- */
  experience: {
    title: "Professional Experience",
    subtitle: "Building enterprise platforms for insurance, procurement, payroll and ERP, and leading teams from requirements to production.",
    showCompanyNames: false,     // true = show the company line under each role
    items: [
      {
        role: "Senior Software Engineer",
        company: "BRAC IT Services Limited",
        period: "Jan 2025 - Present",
        location: "Gulshan-1, Dhaka",
        description: "Lead delivery of enterprise and AI systems, mentor engineers, and act as the primary technical contact for clients.",
        highlights: [
          "Led the Vendor Performance Evaluation System end to end: Spring Boot 4, Angular 21, Keycloak SSO, Resilience4j and GitLab CI/CD.",
          "Engineered a LangGraph multi-agent procurement system with RAG and a custom MCP server for supply-chain data.",
          "Led an international NGO's e-Tendering platform, integrating LDAP/Active Directory and migrating from Java 8 to 17 and EDB Postgres to PostgreSQL.",
          "Built microservices for a microinsurance platform and a payroll system using RabbitMQ, Consul, Redis and Keycloak.",
        ],
        tags: ["Java", "Spring Boot", "Angular", "LangGraph", "PostgreSQL", "Keycloak", "Docker"],
      },
      {
        role: "Software Engineer",
        company: "BRAC IT Services Limited",
        period: "Oct 2023 - Dec 2024",
        location: "Gulshan-1, Dhaka",
        description: "Delivered change requests and integrations across a large ERP covering Procurement, HRMS, Performance Management and Tendering.",
        highlights: [
          "Performed root-cause analysis of critical production incidents and security vulnerabilities, and delivered the fixes.",
          "Built an Excel data-ingestion pipeline and a no-code email configuration engine for performance management.",
          "Integrated the ERP with Inventory, Digital Marketplace and e-Tendering systems via an ESB; built JasperReports reporting.",
        ],
        tags: ["Java", "Groovy on Grails", "PostgreSQL", "Redis", "JasperReports", "ESB"],
      },
    ],
    // Education shown at the end of the timeline ([] to hide)
    education: [
      {
        degree: "B.Sc. in Computer Science and Engineering",
        school: "Rajshahi University of Engineering & Technology (RUET)",
        period: "2018 - 2023",
        location: "Rajshahi, Bangladesh",
        note: "CGPA 3.61 / 4.00",
        highlights: [
          "Codeforces Specialist (max rating 1416); 700+ problems solved across Codeforces, LeetCode, HackerRank, LightOJ and UVa.",
          "Ranked 11th at VU CSE Fest, 12th in the Intra-RUET Programming Contest and 17th at DUET IUPC.",
        ],
      },
    ],
  },

  /* ---------- Projects (leave code/demo "" to hide the button; image optional) ---------- */
  projects: {
    title: "Featured Projects",
    subtitle: "Enterprise platforms and agentic AI systems I've designed, led and built.",
    items: [
      {
        title: "Setu — Agentic BRD-to-SRS Platform",
        label: "Personal",
        icon: "cpu",
        description: "Role-based agentic assistant that turns draft BRDs into delivery-ready SRS documents, with human-in-the-loop review and GitHub MCP feasibility checks against the live codebase.",
        tags: ["Python", "FastAPI", "React", "Google ADK", "Gemini", "GitHub MCP"],
        code: "", demo: "",
      },
      {
        title: "Procurement Multi-Agent System",
        label: "AI",
        icon: "sparkle",
        description: "LangGraph orchestration that automates procurement workflows, combining RAG policy lookup with live APIs and a custom MCP server for supply-chain data.",
        tags: ["Python", "FastAPI", "FastMCP", "LangGraph", "LangChain", "Vector DB"],
        code: "", demo: "",
      },
      {
        title: "Vendor Performance Evaluation System",
        label: "Lead",
        icon: "shield",
        description: "Secure full-stack system with Keycloak SSO, OAuth 2.0 and Resilience4j fault tolerance, containerised and shipped through GitLab CI/CD.",
        tags: ["Java 25", "Spring Boot 4", "Angular 21", "PrimeNG", "Redis", "Keycloak"],
        code: "", demo: "",
      },
      {
        title: "Procurement & e-Tendering Platform",
        label: "Lead",
        icon: "layout",
        description: "Procurement platform for an international NGO: Active Directory login via LDAP, a Java 8 → 17 upgrade and an EDB Postgres → PostgreSQL migration.",
        tags: ["Java 17", "Grails", "PostgreSQL", "LDAP", "JasperReports"],
        code: "", demo: "",
      },
      {
        title: "Microinsurance Microservices Platform",
        label: "",
        icon: "server",
        description: "Built the health-insurance claim service and the full livestock-insurance frontend, and integrated middleware with partner banking systems.",
        tags: ["Spring Boot", "Angular 17", "RabbitMQ", "Consul", "Keycloak"],
        code: "", demo: "",
      },
      {
        title: "Payroll Management System",
        label: "",
        icon: "database",
        description: "Domain-driven microservices payroll for a public utility, with event-driven messaging, Redis caching and automated CI/CD.",
        tags: ["Java 21", "Spring Boot", "Angular 18", "Redux", "RabbitMQ", "Docker"],
        code: "", demo: "",
      },
    ],
  },

  /* ---------- Certifications ----------
     Items WITH an image appear as large cards (click to enlarge).
     Items WITHOUT an image appear as compact course cards below them. */
  certifications: {
    title: "Certifications",
    subtitle: "Training and courses in architecture, DevOps and the Spring ecosystem.",
    items: [
      {
        image: "assets/images/1760465930957.jpeg",
        title: "DevOps 101: Hands-on Introduction for Beginners",
        issuer: "BRAC IT Academy · Certificate of Merit",
        date: "Feb 2025",
        url: "",
      },
      {
        image: "assets/images/1760465930777.jpeg",
        title: "Introduction to Software Architecture",
        issuer: "BRAC IT Academy · Certificate of Excellence",
        date: "Nov 2024",
        url: "",
      },
      {
        image: "",
        title: "Master Microservices with Spring Boot, Docker and Kubernetes",
        issuer: "Udemy",
        date: "",
        url: "",
      },
      {
        image: "",
        title: "Master Spring 7, Spring Boot, REST, JPA and Security",
        issuer: "Udemy",
        date: "",
        url: "",
      },
    ],
  },

  /* ---------- Contact ---------- */
  contact: {
    title: "Let's Work Together",
    subtitle: "Have a project in mind, or need an engineer for enterprise or AI work? Let's talk.",
    email: "mohiuddinmohammad2000@gmail.com",
    phone: "+880 1746-524182",           // set "" to hide
    location: "Dhaka, Bangladesh · Available for Remote Work",
    // Form delivery: "" = opens the visitor's email app.
    // For inbox delivery set formEndpoint to a Formspree URL (https://formspree.io/f/xxxx)
    // or Web3Forms ("https://api.web3forms.com/submit") + web3formsKey.
    formEndpoint: "",
    web3formsKey: "",
  },

  footer: {
    text: "Built with HTML, CSS & JavaScript.",
  },
};
