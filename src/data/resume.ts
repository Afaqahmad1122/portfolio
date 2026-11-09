export const profile = {
  name: "Afaq Ahmad",
  title: "Full-Stack Engineer",
  tagline: "Web, Mobile & AI-Integrated Products",
  roles: [
    "Full-Stack Engineer",
    "React Native Developer",
    "AI-Integrated Products Builder",
  ],
  location: "Islamabad, Pakistan",
  availability: "Open to remote, US/UK/EU hours",
  email: "afaqahmadnaeem@gmail.com",
  linkedin: "https://linkedin.com/in/afaq-ahmad-a92532237",
  github: "https://github.com/Afaqahmad1122",
  summary: [
    "Full-stack engineer with 4+ years shipping production web and mobile apps in TypeScript with React, Next.js, React Native, Node.js and NestJS.",
    "Currently building the CourtMatch web app and iOS/Android mobile app, a court reservation and club management platform for a California-based company.",
    "I build LLM-powered features end to end: voice-to-text pipelines, structured data extraction with the OpenAI API, and retrieval-augmented generation (RAG) with embeddings and vector search. Comfortable owning a feature from database schema to production release.",
  ],
  stats: [
    { value: 4, suffix: "+", label: "Years shipping" },
    { value: 6, suffix: "", label: "Featured products" },
    { value: 3, suffix: "", label: "Platforms: web, iOS, Android" },
  ],
};

export const skills = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    group: "Frontend & Mobile",
    items: [
      "React",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "React Query",
      "Angular",
    ],
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "NestJS",
      "Express",
      "REST APIs",
      "GraphQL",
      "Microservices",
      "WebSockets",
    ],
  },
  {
    group: "Databases",
    items: ["MongoDB", "PostgreSQL (Supabase)"],
  },
  {
    group: "AI & LLM",
    items: [
      "OpenAI API",
      "Prompt engineering",
      "Structured outputs",
      "Function calling",
      "Speech-to-text",
      "RAG",
      "Embeddings",
      "Vector search",
    ],
  },
  {
    group: "Payments & Integrations",
    items: ["Stripe subscriptions", "QuickBooks", "Xero", "Sage", "WhatsApp"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub"],
  },
];

export const experience = [
  {
    role: "Full-Stack Web & Mobile Engineer",
    company: "CourtMatch AI",
    location: "Remote (California, US)",
    period: "May 2026 - Present",
    points: [
      "Build and maintain the CourtMatch web app and React Native mobile app for iOS and Android, used by tennis, pickleball and padel clubs to run reservations and memberships.",
      "Develop the court booking system with real-time availability, reservation rules and automated confirmations across web and mobile.",
      "Build payment flows for court bookings and club programs, plus user management for members and club staff.",
      "Create admin workflows that let clubs manage courts, schedules, members and programs from one dashboard.",
      "Integrate third-party services and resolve production issues with the US product team, improving app performance and reliability.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Ashtra",
    location: "Remote (US)",
    period: "Apr 2025 - Apr 2026",
    points: [
      "Built frontend and backend features for a salon-services platform on a microservices architecture, keeping services modular and easy to maintain.",
      "Developed online booking, service management and real-time availability for customers and salons.",
      "Implemented user authentication, service scheduling and secure payment workflows.",
    ],
  },
  {
    role: "MERN Stack Developer & Trainer",
    company: "WQ Software",
    location: "Peshawar, Pakistan",
    period: "Nov 2024 - Apr 2025",
    points: [
      "Trained developers in MongoDB, Express, React and Node.js through hands-on, project-based programs.",
      "Mentored trainees through full-stack builds, reviewing their code and guiding them on real-world best practices.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "IbraNext Technologies",
    location: "Peshawar, Pakistan",
    period: "Jul 2022 - Oct 2023",
    points: [
      "Designed and built scalable MERN web applications, owning frontend, backend and database management.",
      "Built secure REST APIs and third-party API integrations, focusing on application security and performance.",
    ],
  },
];

export const projects = [
  {
    name: "CourtMatch",
    kind: "Web App & Mobile App (iOS, Android)",
    featured: true,
    stack: ["React", "React Native", "Node.js", "TypeScript"],
    points: [
      "Court reservation and club management platform for tennis, pickleball and padel clubs, covering bookings, memberships, leagues, lessons and check-ins.",
      "Web app serves club admins and members; the mobile app gives players booking, schedules and messaging on the go.",
    ],
    link: "https://courtmatch.ai" as string | null,
  },
  {
    name: "Quotem8",
    kind: "AI quoting & invoicing SaaS",
    featured: true,
    stack: ["Next.js", "Supabase", "OpenAI API", "Stripe"],
    points: [
      "Built an AI pipeline that turns WhatsApp chats and voice notes into branded PDF quotes and invoices, using speech-to-text and LLM structured extraction.",
      "Worked on the AI receptionist that handles incoming customer conversations and captures job details.",
      "Implemented Stripe subscriptions and two-way invoice sync with QuickBooks, Xero and Sage.",
    ],
    link: "https://quotem8.ai",
  },
  {
    name: "Writetone",
    kind: "AI writing assistant",
    featured: false,
    stack: ["LLM APIs", "Prompt engineering"],
    points: [
      "Built paraphrasing, grammar correction, tone adjustment and summarization tools on top of LLM APIs.",
      "Designed reusable prompt templates for each tone and format, from emails and blogs to academic writing and social posts.",
    ],
    link: "https://writetone.com",
  },
  {
    name: "RAG Document Q&A Assistant",
    kind: "Retrieval-augmented generation",
    featured: false,
    stack: ["Node.js", "OpenAI API", "Embeddings", "Vector database"],
    points: [
      "Built a RAG app that answers user questions from uploaded documents.",
      "Split documents into chunks, generated embeddings and stored them in a vector database for semantic search.",
      "Retrieved the most relevant chunks per question and passed them to the LLM for grounded answers with source references.",
    ],
    link: null,
  },
  {
    name: "Health Direct",
    kind: "Healthcare platform",
    featured: false,
    stack: ["Next.js", "React Query", "shadcn/ui", "Node.js", "Express", "MongoDB"],
    points: [
      "Built a responsive healthcare platform giving users access to medical information and services, backed by a secure Node.js and MongoDB API.",
    ],
    link: "https://www.healthdirect.gov.au",
  },
  {
    name: "Tritment",
    kind: "Healthcare platform",
    featured: false,
    stack: ["Next.js", "React Query", "shadcn/ui", "Node.js", "Express", "MongoDB"],
    points: [
      "Built a healthcare workflow platform with an intuitive Next.js interface and a scalable TypeScript backend, focused on performance and data security.",
    ],
    link: "https://tritmint.com",
  },
];

export const education = {
  degree: "MSc Computer Science",
  school: "University of Peshawar",
  location: "Peshawar, Pakistan",
  period: "2022 - 2024",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
