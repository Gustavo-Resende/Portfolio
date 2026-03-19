export const en = {
  header: {
    home: "Home",
    projects: "Projects",
    skills: "Skills",
    about: "About",
    testimonials: "Testimonials",
    contact: "Contact",
  },
  hero: {
    greeting: "Hi, I'm Gustavo Resende",
    role: "Backend Developer",
    description: "A <strong class=\"text-white font-semibold\">backend developer</strong> with solid foundations in <strong class=\"text-white font-semibold\">software architecture</strong>.<br/>Passionate about crafting scalable APIs, I thrive at the intersection<br/>of performance and clean code.",
    github: "Github",
    email: "Email",
    linkedin: "LinkedIn",
    contactMe: "Contact Me",
    viewProjects: "View Projects",
  },
  projects: {
    eyebrow: "PORTFOLIO",
    title: "Featured Projects",
    filters: {
      all: "All",
      net: ".NET",
      react: "React",
      sql: "SQL"
    },
    code: "Code",
    live: "Live",
    descriptions: {
      sleipnir: "High-performance logistics engine for Transportar Veículos, with DDD, real-time tracking, and .NET 9.",
      muninn: "International lead capture and resale platform for Nova Auto Drive (Canada), with paid traffic and AI.",
      frigg: "Complex real estate management ecosystem for Assistente Frigg, with automations and API integrations.",
      botfatura: "Autonomous WhatsApp billing automation solution, reducing delinquency with intelligent rules.",
      resumax: "AI-powered intelligent resume adaptation platform (In Development)."
    }
  },
  skills: {
    eyebrow: "SKILLS",
    title: "Building Digital Experiences",
    subtitle: "I specialize in creating robust architectures and developing high-quality applications that scale.",
    whatICanDo: {
      title: "What I can do",
      description: "I can help develop solutions that will help you grow your business:",
      items: [
        "Backend System Architecture",
        "API Integration & Development",
        "Database Design & Optimization",
        "Web Application Development",
        "Process Automation",
      ]
    },
    toolsIUse: {
      title: "Tools I Use",
      description: "I use the latest tools and technologies to build functional and scalable products:",
      backend: "C#, .NET, Entity Framework",
      database: "SQL Server, PostgreSQL",
      devops: "Docker, Git, CI/CD, AWS",
      frontend: "React, Next.js, Tailwind CSS"
    },
    architecture: {
      title: "Software Architecture",
      description: "I am a backend developer first. I can help design clean and performant structures:",
      items: [
        "Clean Architecture",
        "Domain-Driven Design (DDD)",
        "SOLID Principles",
        "High Performance APIs"
      ]
    }
  },
  about: {
    eyebrow: "ABOUT",
    title: "About Me",
    p1: "Hello! I'm Gustavo, a developer driven by complex challenges and elegant solutions. My programming journey started with a fascination for creating systems that not only work but perform with excellence.",
    p2: "Over the years, I've specialized in the <strong class=\"text-white font-bold\">.NET</strong> ecosystem and the <strong class=\"text-white font-bold\">React/Next.js</strong> stack, acquiring a full-stack vision focused on software quality. I strongly believe in modular architectures, like <strong class=\"text-lime-primary\">Clean Architecture</strong> and <strong class=\"text-lime-primary\">Domain-Driven Design (DDD)</strong>, to ensure the projects I work on scale efficiently.",
    p3: "Beyond code, I'm fascinated by process automation (using tools like n8n) to simplify heavy routines. When I'm not architecting APIs or developing performant SPAs, I like to explore new technologies that further boost my results."
  },
  testimonials: {
    eyebrow: "TESTIMONIALS",
    title: "What Clients Say About Me",
    items: [
      {
        name: "Transportar Veículos",
        role: "National Logistics",
        content: "Gustavo managed to organize a critical part of our operation in a way that became simple to follow daily. Today we have more visibility, less rework, and a much more reliable backend. It was a delivery far beyond what we expected.",
        avatar: "/avatars/transportar-veiculos.webp"
      },
      {
        name: "Nova Auto Drive",
        role: "Canada",
        content: "Before, the lead operation was much more manual and we wasted time on things that should be automatic. Muninn helped a lot with that. Besides working well, Gustavo took great care to understand our reality before developing, and that made a difference in the final result.",
        avatar: "/avatars/nova-auto-drive.webp"
      },
      {
        name: "BotFatura",
        role: "Fintech SaaS",
        content: "Billing automation entered the company's routine very quickly. The process became more stable, reduced failures, and practically stopped depending on manual intervention. What I liked most was that it wasn't just about 'making it work,' it was designed to scale without becoming a headache later.",
        avatar: "/avatars/botfatura.webp"
      }
    ]
  },
  contact: {
    eyebrow: "CONTACT",
    title: "Let's Discuss",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    subjectPlaceholder: "Subject",
    budgetPlaceholder: "Your Budget",
    messagePlaceholder: "Tell me something about your project",
    submitText: "Submit Now",
    submittingText: "Submitting...",
    successMessage: "Message sent successfully!"
  },
  cta: {
    inline: {
      title: "Interested in what you see?",
      subtitle: "Let's talk about how I can help your team.",
      button: "Get in Touch"
    },
    prominent: {
      title: "Let's build something incredible together?",
      subtitle: "I'm available for new projects and opportunities. Let's discuss how I can help deliver results for your company.",
      button: "Start a Conversation"
    }
  },
  footer: {
    builtWith: "Built with Next.js & Tailwind CSS.",
    contact: "Get in Touch"
  },
  projectPages: {
    common: {
      sections: {
        overview: "Overview",
        journey: "Journey",
        techStack: "Technologies",
        architecture: "Architecture",
        results: "Results",
        contact: "Contact",
      },
      contactButton: "Get in Touch",
      metadata: {
        duration: "Duration",
        stack: "Tech Stack",
        model: "Commercial Model",
      },
      journey: {
        eyebrow: "The Scenario",
        title: "The Project Journey",
        problem: "1. The Problem",
        objective: "2. The Objective",
        solution: "3. The Solution",
      },
      architecture: {
        eyebrow: "CORE Architecture",
        title: "How the system was designed",
      },
      results: {
        eyebrow: "Metrics & Deliveries",
        title: "Implementation Success",
      },
      cta: {
        title: "Liked this architectural approach?",
        description: "Cutting-edge software demands robust foundations and clean code. Let's build your next Success Story together.",
        button: "Talk About My Project",
      },
      footer: "Built with Next.js & Tailwind CSS.",
      zeroDowntime: "Zero Downtime",
      online: "Online",
    },
    sleipnir: {
      hero: "A scalable logistics tracking ecosystem that ensures <accent>total fleet and route visibility</accent> in real time.",
      metadata: {
        duration: { title: "Continuous Cycle", description: "From MVP to industrial scale, with active maintenance and constant architecture evolution." },
        stack: { title: ".NET 9, PostgreSQL, Docker", description: "Using EF Core for persistence and MediatR for event decoupling." },
        model: { title: "Corporate Delivery", description: "Custom software licensing with critical engineering support." },
      },
      journey: {
        problem: "Inefficient traceability and lack of standards in fleet management, generating inconsistent data and critical operational delays.",
        objective: "Architect a resilient monitoring system, focused on Domain-Driven Design to ensure unbreakable and auditable business rules.",
        solution: "A scalable .NET 9 API with PostgreSQL, implementing tracking queues and domain events for full route automation.",
      },
      features: {
        f1: {
          eyebrow: "DATA INTEGRITY",
          title: "Rich Domain with",
          highlight: "{ DDD & Validations }",
          description: "All business logic is centered in the `Core`, where Aggregates like `Route` manage their own state through strict Guard Clauses, ensuring the system never enters an invalid state.",
          checks: ["Entities protected against inconsistencies.", "Historical tracking of every event (Audit Log)."],
        },
        f2: {
          eyebrow: "HIGH AVAILABILITY",
          title: "High-Performance Persistence with",
          highlight: "{ PostgreSQL & EF Core }",
          description: "Using a modern .NET 9-based infrastructure, the data layer was optimized with Npgsql and connection Retry policies, ensuring resilience in high-concurrency environments.",
          checks: ["Resilient connection with Retry Policy.", "Optimized persistence with PostgreSQL."],
        },
        f3: {
          eyebrow: "MAXIMUM SCALABILITY",
          title: "Decoupling via",
          highlight: "{ MediatR & Event Bus }",
          description: "The application uses internal messaging patterns to process domain events asynchronously, allowing new features (like notifications or webhooks) to be added without changing the core route logic.",
          checks: ["Asynchronous processing via MediatR.", "Fully decoupled events."],
        },
      },
      results: {
        m1: { value: "-85%", label: "Manual Operation Time" },
        m2: { value: "Zero", label: "Downtime Registered" },
        m3: { value: "10k+", label: "Reqs/min No Bottleneck" },
        m4: { value: "+30%", label: "Capacity Increase" },
      },
      techStack: {
        title: "Technologies Used",
        description: "A modern and robust architecture focused on horizontal scalability and data integrity.",
        items: [
          { name: ".NET 9", description: "High-throughput processing engine.", type: "Backend" },
          { name: "Next.js 15", description: "Fast and SEO-optimized frontend.", type: "Frontend" },
          { name: "PostgreSQL", description: "Relational database for critical data.", type: "Database" },
          { name: "Docker", description: "Containerization for consistent deploys.", type: "Infrastructure" },
          { name: "MediatR", description: "Mediator pattern for domain events.", type: "Architecture" },
        ]
      },
    },
    frigg: {
      hero: "An <accent>autonomous billing and real estate management</accent> ecosystem that automates the complete cycle of contracts, billing, and service orders.",
      metadata: {
        duration: { title: "Continuous Cycle", description: "From MVP to SaaS platform, with constant evolution and new integrations every sprint." },
        stack: { title: ".NET 9, PostgreSQL, Docker", description: "Clean Architecture with EF Core, MediatR, Clicksign API and Evolution API (WhatsApp)." },
        model: { title: "PropTech Platform", description: "Corporate solution for real estate agencies with contract, billing, and maintenance management." },
      },
      journey: {
        problem: "Manual management of contracts and properties creates immense bottlenecks, lack of sync between owner and tenant, and cash flow delays.",
        objective: "Automate the \"Lead to Lease\" cycle, ensuring digitally signed contracts integrated with finances without manual intervention.",
        solution: "A .NET 9 platform with DDD, Clicksign integration for digital signatures and Evolution API for automatic WhatsApp communication.",
      },
      features: {
        f1: {
          eyebrow: "DATA INTEGRITY",
          title: "Rich Domain with",
          highlight: "{ DDD & Validations }",
          description: "Frigg's business logic is centered on Aggregates like `Residence` and `Contract`, which manage their own state through Guard Clauses, ensuring a property never has two active contracts simultaneously.",
          checks: ["Strict contract validity validation.", "Protected aggregates (Residence/Contract)."],
        },
        f2: {
          eyebrow: "DIGITAL SIGNATURE",
          title: "Integration with",
          highlight: "{ Clicksign API }",
          description: "Frigg automates contract draft generation via Clicksign, reducing the rental closing cycle from days to minutes. Dynamic templates automatically fill in tenant data.",
          checks: ["Automatic PDF generation via Templates.", "Complete flow: Document → Signer → URL."],
        },
        f3: {
          eyebrow: "MAINTENANCE MANAGEMENT",
          title: "Service Orders with",
          highlight: "{ State Machine }",
          description: "The Service Orders module uses a strict State Machine to control status transitions, ensuring only valid flows are executed (Open → InProgress → Resolved).",
          checks: ["Controlled state transitions.", "Message history per order."],
        },
      },
      results: {
        m1: { value: "-90%", label: "Signing Time" },
        m2: { value: "Zero", label: "Downtime Registered" },
        m3: { value: "100+", label: "Contracts Managed" },
        m4: { value: "+40%", label: "Operational Efficiency" },
      },
      techStack: {
        title: "Technologies Used",
        description: "Cutting-edge integrations for full real estate cycle automation.",
        items: [
          { name: ".NET 9", description: "Robust backend with Clean Architecture.", type: "Backend" },
          { name: "Next.js 15", description: "High-performance administrative interface.", type: "Frontend" },
          { name: "AI Integration", description: "Artificial Intelligence for analysis and automation.", type: "AI" },
          { name: "Clicksign API", description: "Digital signature with legal validity.", type: "Integration" },
          { name: "Evolution API", description: "Automated WhatsApp communication.", type: "Messaging" },
        ]
      },
    },
    botFatura: {
      hero: "An intelligent solution to end delinquency. Automate the <accent>billing cycle via WhatsApp</accent> with personalized rules and direct ERP integration.",
      metadata: {
        duration: { title: "Continuous Cycle", description: "From MVP to SaaS platform, with constant evolution and new integrations every sprint." },
        stack: { title: ".NET 9, PostgreSQL, Docker", description: "Clean Architecture with Evolution API (WhatsApp), AI reconciliation and ERP integration." },
        model: { title: "FinTech SaaS", description: "Billing automation platform for companies with high volumes of recurring invoices." },
      },
      architecture: {
        eyebrow: "Billing Intelligence",
        title: "Billing Architecture",
      },
      journey: {
        problem: "Companies lose millions annually trying to collect from clients manually. Emails are ignored and calls are invasive, generating slow bureaucratic processes.",
        objective: "Transform billing into a friendly, frictionless experience, ensuring the boleto or PIX is always at hand for the client via WhatsApp.",
        solution: "A .NET 9 platform with automated billing rules, WhatsApp integration via Evolution API, and intelligent receipt reconciliation.",
      },
      features: {
        f1: {
          eyebrow: "DATA LOGISTICS",
          title: "Billing Rules",
          highlight: "{ Automated }",
          description: "Bot-Fatura proactively monitors invoices and triggers time-based notifications, ensuring the client feels reminded, not harassed. The rules control 3 days before, due date, and post-due.",
          checks: ["State control: Pending, Sent, Paid.", "Guaranteed no-duplicate sends."],
        },
        f2: {
          eyebrow: "WHATSAPP CONNECTIVITY",
          title: "Engagement",
          highlight: "{ Humanized }",
          description: "Integrated with Evolution API, the system simulates human presence (`composing`) and introduces variable delays to ensure WhatsApp account integrity and increase read rates.",
          checks: ["Multi-instance support.", "Batch PDF and receipt delivery."],
        },
        f3: {
          eyebrow: "INTELLIGENT RECONCILIATION",
          title: "Payment Verification with",
          highlight: "{ AI & ERP }",
          description: "The reconciliation module automatically cross-references receipts received via WhatsApp with ERP records, eliminating manual checking and reducing operational errors.",
          checks: ["Automatic receipt validation.", "Bidirectional ERP integration."],
        },
      },
      results: {
        m1: { value: "-70%", label: "Delinquency" },
        m2: { value: "Zero", label: "Downtime Registered" },
        m3: { value: "5k+", label: "Messages/Month" },
        m4: { value: "+95%", label: "Read Rate" },
      },
      techStack: {
        title: "Technologies Used",
        description: "Financial automation focused on engagement and bank reconciliation.",
        items: [
          { name: ".NET 9", description: "Billing rules processing.", type: "Backend" },
          { name: "Vite", description: "Ultra-fast and responsive frontend.", type: "Frontend" },
          { name: "AI Integration", description: "Intelligent reconciliation and data analysis.", type: "AI" },
          { name: "Evolution API", description: "WhatsApp messaging gateway.", type: "Messaging" },
          { name: "ERP Sync", description: "Bidirectional integration with legacy systems.", type: "Integration" },
        ]
      },
    },
    muninn: {
      heroBadge: "International Project — Canada",
      hero: "A platform for <accent>lead capture and authentication system</accent> for the Canadian market, with multi-step forms and backend integration via OpenAPI.",
      metadata: {
        operation: { label: "Operation", title: "🇨🇦 Active Production", description: "System operating in Canada with active paid traffic, integrated Meta Pixel, and leads being captured and resold to dealerships." },
        stack: { title: "Next.js 15, .NET 9, Docker", description: "Frontend with React 19, Tailwind CSS 4 and Meta Pixel. Backend with Clean Architecture, DDD and generated OpenAPI clients." },
        model: { title: "Lead Resale B2B", description: "Captures leads via paid traffic (Meta Ads) and resells to Canadian dealerships — where cost per lead is high." },
      },
      journey: {
        problem: "In Canada, automotive lead cost is extremely high. Managing captures manually without conversion tracking and without Meta Pixel results in wasted ad spend.",
        objective: "Create a lead capture platform with Meta Pixel, conversion-optimized forms, and JWT authentication for secure resale to dealerships.",
        solution: "Full-stack application with Next.js 15, .NET 9 and integrated Meta Pixel, multi-step forms with validation, NextAuth.js and B2B resale pipeline.",
      },
      features: {
        f1: {
          eyebrow: "DOMAIN PROTECTION",
          title: "Guard Clauses with",
          highlight: "{ IDomainGuard }",
          description: "Muninn implements a custom Guard Clauses pattern that goes beyond simple validations: the `IDomainGuard` allows creating semantic extensions that protect domain invariants in a fluent and reusable way.",
          checks: ["Extensible Guard Clauses via interface.", "DomainException for business failures."],
        },
        f2: {
          eyebrow: "RICH AGGREGATES",
          title: "Entities with",
          highlight: "{ Value Objects & Events }",
          description: "The `Account` Aggregate demonstrates the power of DDD: typed Value Objects (Email, Password, FullName), token generation with controlled lifecycle, and automatic Domain Event emission in the constructor.",
          checks: ["Value Objects for strong typing.", "Automatically dispatched Domain Events."],
        },
        f3: {
          eyebrow: "EVENT-DRIVEN ARCHITECTURE",
          title: "Messaging via",
          highlight: "{ Channels & Event Bus }",
          description: "Muninn uses `System.Threading.Channels` to process domain events asynchronously and decoupled. A `BackgroundService` consumes events in real time, resolving handlers via DI.",
          checks: ["In-memory Event Bus via Channels.", "Async consumer as BackgroundService."],
        },
      },
      results: {
        title: "The Impact on the Canadian Market",
        m1: { value: "High Conversion", label: "Canadian Market" },
        m2: { value: "Meta", label: "Pixel Integrated" },
        m2status: "Tracking",
        m3: { value: "B2B", label: "Lead Resale" },
        m4: { value: "Ads", label: "Optimized Paid Traffic" },
      },
      techStack: {
        title: "Technologies Used",
        description: "High-performance full-stack optimized for conversion and ad tracking.",
        items: [
          { name: "Next.js 15", description: "Fast frontend with App Router 15.", type: "Frontend" },
          { name: ".NET 9", description: "Robust backend for lead processing.", type: "Backend" },
          { name: "Amazon SES", description: "High-scale email delivery.", type: "Email" },
          { name: "Queue System", description: "Async processing for high data volume.", type: "Queuing" },
          { name: "Meta Pixel", description: "Advanced conversion tracking.", type: "Analytics/Ads" },
        ]
      },
    },
    resumax: {
      heroBadge: "In Development",
      hero: "An intelligent resume adaptation platform that uses <accent>generative AI and NLP</accent> to maximize ATS approval and recruiter impact.",
      comingSoon: "Coming Soon",
      metadata: {
        status: { label: "Status", title: "In Development", description: "Active construction phase with defined architecture, modeled domain, and functional Gemini AI integration." },
        stack: { title: ".NET 9, Gemini AI, Docker", description: "Clean Architecture with DDD, Google Gemini for NLP and ATS-optimized resume generation." },
        model: { title: "SaaS HRTech", description: "Platform for candidates and recruiters to optimize the match between talent and opportunity." },
      },
      journey: {
        problem: "Generic resumes are filtered by ATS systems before reaching a human. Exceptional candidates lose opportunities by not adapting key terms and structure.",
        objective: "Create an intelligent bridge between resumes and job postings, using generative AI to ethically adapt content, maximizing the ATS Score.",
        solution: "A .NET 9 API with Google Gemini, Prompt Engineering with ethical guardrails, and categorized SkillSet for semantic gap analysis.",
      },
      features: {
        f1: {
          eyebrow: "DOMAIN MODELING",
          title: "Resume as",
          highlight: "{ Aggregate Root }",
          description: "Resumax models the resume as a rich Domain Aggregate with typed Value Objects (SkillSet, ContactInfo, WorkExperience), allowing AI to manipulate specific sections without losing original data integrity.",
          checks: ["Factory Method with invariant validation.", "Semantic Value Objects for categorization."],
        },
        f2: {
          eyebrow: "GENERATIVE INTELLIGENCE",
          title: "Adaptation via",
          highlight: "{ Google Gemini }",
          description: "Resumax's AI engine uses Google Gemini to analyze the job context and semantically adapt the resume, generating an ATS Score and identifying gaps ethically — without inventing experiences or metrics.",
          checks: ["Structured response in typed JSON.", "ATS Score with adherence label."],
        },
        f3: {
          eyebrow: "PROMPT ENGINEERING",
          title: "Winner Template with",
          highlight: "{ Ethical Guardrails }",
          description: "The PromptBuilder uses a \"Winner Template\" pattern — a top 1% reference resume — as a quality anchor for the AI, with inviolable rules that prevent data fabrication and ensure total truthfulness.",
          checks: ["Inviolable rules against fabrication.", "XYZ Method for impact bullets."],
        },
      },
      results: {
        eyebrow: "Impact Vision",
        title: "What Resumax Will Deliver",
        subtitle: "Projected metrics — system under development",
        m1: { value: "+80%", label: "ATS Approval Rate" },
        m2: { value: "Gemini", label: "AI Engine" },
        m2status: "Integrated",
        m3: { value: "100%", label: "Guaranteed Truthfulness" },
        m4: { value: "-90%", label: "Adaptation Time" },
      },
      techStack: {
        title: "Technologies Used",
        description: "AI applied to career with a focus on real results.",
        items: [
          { name: "Google Gemini", description: "AI engine for content adaptation.", type: "AI" },
          { name: ".NET 9", description: "Domain logic and data processing.", type: "Backend" },
          { name: "Next.js 15", description: "Intuitive interface for resume editing.", type: "Frontend" },
          { name: "Markdown", description: "Standard format for interoperability.", type: "Format" },
          { name: "PDF Gen", description: "Faithful conversion for applications.", type: "Output" },
        ]
      },
    },
  },
};
