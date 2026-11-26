/* ==========================================================================
   PORTFOLIO CONFIG — edit this file only. No HTML changes needed.
   ========================================================================== */
window.PORTFOLIO_CONFIG = {

  /* ---------- Site / SEO ---------- */
  site: {
    title: "Mohammad Mohiuddin — Senior Software Engineer · Full-Stack & AI Systems",
    description: "Senior Software Engineer building enterprise full-stack applications (Java, Spring Boot, Angular, microservices) and agentic AI systems (LangGraph, Google ADK, RAG, MCP). Enthusiastic about DevOps, AI and MLOps.",
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
    { id: "education",      enabled: true },
    { id: "projects",       enabled: true },
    { id: "certifications", enabled: true },
    { id: "achievements",   enabled: true },
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
    interests: ["DevOps", "AI", "MLOps"],   // shown as chips under the intro ([] to hide)
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
    interestsLabel: "Passionate about",
    interests: [
      { icon: "tool",    name: "DevOps", text: "Containers, CI/CD pipelines and automated, repeatable delivery" },
      { icon: "cpu",     name: "AI",     text: "Multi-agent systems, RAG and tool-using agents with MCP" },
      { icon: "server",  name: "MLOps",  text: "Taking AI models and agents from prototype to reliable production" },
    ],
    categories: [
      { icon: "code",     name: "Languages",              items: ["Java", "TypeScript", "JavaScript", "Python", "Groovy", "SQL", "C++", "C"] },
      { icon: "server",   name: "Backend & Architecture", items: ["Spring Boot", "Spring Security", "Grails", "FastAPI", "REST APIs", "Resilience4j", "Microservices", "Event-Driven Design", "SOLID & Design Patterns"] },
      { icon: "layout",   name: "Frontend",               items: ["Angular", "React", "Redux", "PrimeNG", "Tailwind CSS", "Bootstrap"] },
      { icon: "cpu",      name: "AI & Agentic Systems",   items: ["LangGraph", "LangChain", "Google ADK", "Multi-Agent Orchestration", "MCP", "FastMCP", "RAG", "Vector Databases", "Gemini", "Agent Harness Engineering"] },
      { icon: "database", name: "Data & Messaging",       items: ["PostgreSQL", "Redis", "RabbitMQ", "Server-Sent Events (Mercure)", "JasperReports"] },
      { icon: "shield",   name: "DevOps, Security & Tools", items: ["Docker", "GitLab CI/CD", "Consul", "Keycloak", "OAuth 2.0", "LDAP / Active Directory", "Git", "GitHub", "GitLab", "Jira", "Confluence", "Claude Code"] },
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
        description: "Lead delivery of enterprise and AI systems, mentor engineers, and act as the primary technical contact for clients across several projects.",
        highlights: [
          "Led the Vendor Performance Evaluation System end to end and mentored two engineers: Spring Boot 4, Angular 21, Keycloak SSO and Resilience4j.",
          "Containerised applications with Docker and automated their build and deployment through GitLab CI/CD pipelines.",
          "Engineered a LangGraph multi-agent procurement system with RAG and a custom MCP server for supply-chain data.",
          "Led an international NGO's e-Tendering platform, integrating LDAP/Active Directory and migrating from Java 8 to 17 and EDB Postgres to PostgreSQL.",
          "Built microservices for a microinsurance platform and a payroll system using RabbitMQ, Consul, Redis and Keycloak.",
        ],
        tags: ["Java 25 / 21 / 17", "Spring Boot 4", "Spring Security", "TypeScript", "Angular 21 / 18 / 17", "PrimeNG", "Redux",
               "Python", "FastAPI", "FastMCP", "LangChain", "LangGraph", "Vector Database", "Google Gemini",
               "Groovy on Grails", "PostgreSQL", "Redis", "RabbitMQ", "Consul", "Keycloak", "OAuth 2.0", "Resilience4j",
               "LDAP / Active Directory", "JasperReports", "Docker", "GitLab CI/CD"],
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
        tags: ["Java 8", "Groovy on Grails", "PostgreSQL", "Redis", "Keycloak", "JasperReports", "Server-Sent Events (SSE)", "ESB"],
      },
    ],
  },

  /* ---------- Education ---------- */
  education: {
    title: "Education",
    subtitle: "Academic foundation in computer science and engineering.",
    items: [
      {
        degree: "B.Sc. in Computer Science and Engineering",
        school: "Rajshahi University of Engineering & Technology (RUET)",
        period: "January 2018 - September 2023",
        location: "Rajshahi, Bangladesh",
        grade: "3.61",            // shown large; "" to hide
        gradeLabel: "CGPA out of 4.00",
        highlights: [],           // optional bullet points (coursework, thesis, awards)
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
      {
        title: "BRAC ERP — Procurement, HRMS, Performance & Tendering",
        label: "",
        icon: "briefcase",
        description: "Change requests and integrations across a large monolithic ERP: Excel data ingestion, a no-code email configuration engine, ESB integrations and JasperReports reporting.",
        tags: ["Java 8", "Groovy on Grails", "PostgreSQL", "Redis", "Keycloak", "JasperReports", "SSE", "ESB"],
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
        image: "assets/images/1760465930777.jpeg",
        title: "Introduction to Software Architecture",
        issuer: "BRAC IT Academy · Certificate of Excellence",
        date: "Nov 2024",
        url: "",
      },
      {
        image: "assets/images/1760465930957.jpeg",
        title: "DevOps 101: Hands-on Introduction for Beginners",
        issuer: "BRAC IT Academy · Certificate of Merit",
        date: "Feb 2025",
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

  /* ---------- Competitive Programming & Achievements ---------- */
  achievements: {
    title: "Competitive Programming & Achievements",
    subtitle: "Strong foundations in data structures and algorithms, built through years of contest programming.",
    highlights: [
      { icon: "award", value: "Specialist", label: "Codeforces", note: "Max rating 1416" },
      { icon: "code",  value: "700+",       label: "Problems solved", note: "", tags: ["Codeforces", "LeetCode", "HackerRank", "LightOJ", "UVa"] },
    ],
    contestsTitle: "Contest rankings",
    contests: [
      { rank: "11th", name: "Competitive programming contest, VU CSE Fest", note: "" },
      { rank: "12th", name: "Intra-RUET Programming Contest", note: "Among 100+ contestants" },
      { rank: "17th", name: "DUET Inter-University Programming Contest (IUPC)", note: "" },
    ],
    // Profile links shown as buttons (url "" to hide)
    profiles: [
      { name: "Codeforces", url: "" },
      { name: "LeetCode",   url: "" },
    ],
  },

  /* ---------- Contact ---------- */
  contact: {
    title: "Let's Work Together",
    subtitle: "Have a project in mind, or need an engineer for enterprise, DevOps or AI work? Let's talk.",
    email: "mohiuddinmohammad2000@gmail.com",
    phone: "+880 1746-524182",           // set "" to hide
    location: "Dhaka, Bangladesh · Available for Remote Work",

    /* ---- "Send a Message" form, delivered by Web3Forms (free: 250 messages/month) ----
       1. Go to https://web3forms.com, enter your email, and the access key arrives in your inbox.
       2. Paste the key below. It is safe to publish: it can only send messages to YOUR email.
       Leave it "" and the form falls back to opening the visitor's email app. */
    web3formsKey: "81dc8278-312f-4d4f-af35-1acac05be3dc",
    fromName: "Portfolio Website",          // sender name shown in your inbox
    subjectPrefix: "Portfolio:",            // email subject = prefix + visitor's subject
    replyTime: "I usually reply within 24 hours.",
    messageMaxLength: 2000,
    hcaptcha: false,                        // true = add hCaptcha (also select hCaptcha in your Web3Forms dashboard)
    formEndpoint: "",                       // alternative service (e.g. Formspree URL), used only if web3formsKey is ""
  },

  footer: {
    text: "",   // optional extra line after the copyright
  },
};
