export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI Engineering' | 'Generative AI' | 'Machine Learning';
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  tags: string[];
  shortDescription: string;
  problem: string;
  solution: string;
  architecture: string[];
  keyFeatures: string[];
  technicalHighlights: string[];
  impact: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; icon?: string; badge?: string }[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  gpaOrScore: string;
  coursework?: string[];
  highlights?: string[];
}

export interface Achievement {
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  credentialUrl?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    headline: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    leetcode: string;
    cgpa: string;
    summary: string;
    aboutBio: string[];
  };
  skills: SkillCategory[];
  projects: Project[];
  education: Education[];
  achievements: Achievement[];
  currentlyExploring: string[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Harshil Varshney",
    title: "AI Engineer & ML Developer",
    headline: "AI Engineer | Generative AI | Agentic AI | RAG & Machine Learning",
    location: "Ghaziabad, India",
    email: "harshilvarshney322@gmail.com",
    phone: "+91-8218722282",
    linkedin: "https://www.linkedin.com/in/harshilvarshney/",
    github: "https://github.com/harshil-var",
    leetcode: "https://leetcode.com/u/HarshilVarshney13/",
    cgpa: "8.0 / 10.0",
    summary: "AI Engineer with strong foundations in Python, SQL, Data Structures & Algorithms, and Object-Oriented Programming. Builds end-to-end AI and data-driven applications involving LLMs, agentic workflows, web data extraction, REST APIs, data processing, and ML.",
    aboutBio: [
      "I am an AI Engineer specializing in building reliable, production-oriented AI applications, Agentic workflows, and end-to-end Machine Learning solutions.",
      "My work bridges the gap between modern AI algorithms and practical software applications using FastAPI, LangChain, RAG architectures, and scalable Python data pipelines.",
      "I focus on writing clean, efficient, and maintainable code for production AI applications and scalable system architectures."
    ]
  },
  skills: [
    {
      title: "Generative AI & Agentic Systems",
      description: "LLM Orchestration, Agent Workflows & Prompt Engineering",
      skills: [
        { name: "LangChain" },
        { name: "Agentic AI" },
        { name: "LLMs (Gemini/Mistral APIs)" },
        { name: "RAG Architectures" },
        { name: "Prompt Engineering" }
      ]
    },
    {
      title: "AI & Machine Learning",
      description: "Predictive Models, Neural Nets & Statistical ML",
      skills: [
        { name: "Scikit-learn" },
        { name: "TensorFlow" },
        { name: "Keras" },
        { name: "XGBoost" },
        { name: "Regression Models" },
        { name: "Classification" }
      ]
    },
    {
      title: "Programming Languages",
      description: "Core languages for AI engineering & backend logic",
      skills: [
        { name: "Python" },
        { name: "C / C++" },
        { name: "SQL" },
        { name: "Data Structures & Algorithms" }
      ]
    },
    {
      title: "Backend & Deployment",
      description: "APIs, Web Scraping & Dashboard Interfaces",
      skills: [
        { name: "FastAPI" },
        { name: "REST APIs" },
        { name: "Streamlit" },
        { name: "Playwright" },
        { name: "BeautifulSoup" },
        { name: "Pydantic" }
      ]
    },
    {
      title: "Databases & Querying",
      description: "Relational Data Stores & Complex Query Execution",
      skills: [
        { name: "MySQL" },
        { name: "PostgreSQL" },
        { name: "Advanced SQL (CTEs, Window Functions, JOINs)" }
      ]
    },
    {
      title: "Data Engineering & Tools",
      description: "Data manipulation, visualization & version control",
      skills: [
        { name: "Pandas" },
        { name: "NumPy" },
        { name: "Matplotlib" },
        { name: "Seaborn" },
        { name: "Git / GitHub" },
        { name: "Jupyter Notebook" },
        { name: "VS Code" }
      ]
    }
  ],
  projects: [
    {
      id: "researchx",
      title: "ResearchX",
      subtitle: "LLM-Powered Research Automation Platform",
      category: "AI Engineering",
      featured: true,
      liveUrl: "https://researchx-svedzrig2yhmci8j6hfggz.streamlit.app/",
      githubUrl: "https://github.com/harshil-var/ResearchX",
      tags: ["LangChain", "Agentic AI", "Tavily Search", "BeautifulSoup", "Gemini API", "Streamlit", "Python"],
      shortDescription: "An autonomous multi-agent research workflow that automates web discovery, content extraction, structured synthesis, and self-evaluating report generation.",
      problem: "Conducting comprehensive literature and web research requires manual search queries, noisy ad-heavy content filtering, laborious cross-referencing, and manual report synthesis.",
      solution: "Engineered an autonomous research platform using LangChain agent orchestration and tool calling. Deployed sequential Search and Reader agents with Tavily and BeautifulSoup alongside specialized Writer and Critic chains for automated report generation and quality evaluation.",
      architecture: [
        "User Prompt & Topic Definition",
        "Tavily & BeautifulSoup Web Search & Page Reader Agents",
        "Raw Web Content Cleaning & Semantic Extraction",
        "LangChain Writer Chain Draft Generation",
        "LLM Critic Chain Quality & Precision Evaluation",
        "Interactive Streamlit Output & Report Generation"
      ],
      keyFeatures: [
        "Multi-Agent Workflow: Automated web search, web page content parsing, synthesis, and final report compiling.",
        "Sequential Reader Agents: Uses Tavily API and BeautifulSoup for discovering relevant web sources and parsing clean DOM content.",
        "Writer & Critic Loops: Combines LLM generation with automated self-critique chains to score, refine, and polish report outputs.",
        "Interactive UI: Real-time Streamlit dashboard allowing users to track execution steps and export research reports."
      ],
      technicalHighlights: [
        "LangChain agent orchestration with tool calling",
        "DOM parsing & web page cleansing via Requests/BeautifulSoup",
        "Self-evaluating LLM feedback loops (Writer-Critic model)",
        "Gemini API integration for fast synthesis"
      ],
      impact: "Automates multi-step research tasks from minutes of manual searching down to automated real-time agent report generation."
    },
    {
      id: "applygenie",
      title: "ApplyGenie",
      subtitle: "AI Job Application Assistant",
      category: "Generative AI",
      featured: false,
      liveUrl: "https://harshil-var-applygenie-frontendapp-55jffq.streamlit.app/",
      githubUrl: "https://github.com/harshil-var/ApplyGenie",
      tags: ["Playwright", "FastAPI", "LangChain", "Mistral API", "PyPDF", "Streamlit"],
      shortDescription: "AI application that parses dynamic job listings and resume content to instantly generate customized emails, cover letters, and job summaries.",
      problem: "Applying for jobs requires customizing cover letters, emails, and resume highlights for each job description, which is repetitive and time-consuming.",
      solution: "Built an intelligent assistant leveraging Playwright for dynamic web page scraping, PyPDF for structural resume parsing, and a FastAPI backend connected to LangChain and Mistral AI to produce personalized application materials.",
      architecture: [
        "Job Listing URL & Resume PDF Upload",
        "Playwright Headless Browser Extraction & PyPDF Resume Parsing",
        "FastAPI Data Validation & REST Endpoint Processing",
        "LangChain + Mistral AI Prompt Orchestration",
        "Streamlit Interactive Display for Emails, Cover Letters & Summaries"
      ],
      keyFeatures: [
        "Dynamic Web Extraction: Utilizes Playwright to parse JavaScript-rendered job posting pages reliably.",
        "PDF Resume Parsing: Extracts structural text from user resumes via PyPDF for semantic alignment.",
        "Customized Application Artifacts: Generates tailored cover letters, professional outreach emails, and key role summaries.",
        "FastAPI REST Architecture: Modular backend API powering a responsive Streamlit frontend."
      ],
      technicalHighlights: [
        "Headless browser scraping with Playwright",
        "Pydantic schemas & FastAPI endpoint structure",
        "Mistral AI integration via LangChain prompt templates",
        "PyPDF binary text extraction pipeline"
      ],
      impact: "Streamlines job application preparation by instantly extracting job requirements and contextualizing resume details."
    },
    {
      id: "insurance-predictor",
      title: "Insurance Premium Predictor",
      subtitle: "End-to-End Machine Learning Application",
      category: "Machine Learning",
      featured: false,
      liveUrl: "https://insurancepremiumpredictor-dhtptztwlywmmm53neuj9n.streamlit.app/",
      githubUrl: "https://github.com/harshil-var/Insurance-Premium-Predictor",
      tags: ["Python", "Scikit-learn", "XGBoost", "Random Forest", "FastAPI", "Streamlit"],
      shortDescription: "Production-ready machine learning pipeline comparing multiple regression models for accurate insurance premium estimation with real-time API inference.",
      problem: "Predicting insurance premiums accurately demands robust feature engineering and quantitative model benchmarking across demographic and health factors.",
      solution: "Developed an end-to-end ML solution evaluating Linear Regression, Random Forest, and XGBoost models. Designed complete feature engineering pipelines and served the best-performing model through a FastAPI backend and interactive Streamlit web application.",
      architecture: [
        "Tabular Insurance Dataset Preprocessing",
        "Feature Transformation & One-Hot / Standard Scaling",
        "Model Benchmarking (Linear Regression vs RF vs XGBoost)",
        "Hyperparameter Tuning & Evaluation Metrics Scoring",
        "FastAPI Endpoint Serialization & Inference Engine",
        "Streamlit Interactive User Calculation Portal"
      ],
      keyFeatures: [
        "Model Benchmarking: Rigorous side-by-side comparison of Linear Regression, Random Forest, and XGBoost models.",
        "Feature Pipeline: Automated handling of missing data, categorical encoding, and feature scaling.",
        "FastAPI Inference Engine: Lightweight REST endpoints for real-time model predictions.",
        "Interactive Predictor Portal: Sleek Streamlit dashboard allowing users to input parameters and receive instant premium estimates."
      ],
      technicalHighlights: [
        "Scikit-learn data preprocessing & feature engineering",
        "Hyperparameter optimization for XGBoost & Random Forest",
        "Production-grade FastAPI REST endpoint implementation",
        "Streamlit interactive input UI"
      ],
      impact: "Demonstrates production ML workflow from data cleaning and model comparison through REST API deployment."
    }
  ],
  education: [
    {
      institution: "Ajay Kumar Garg Engineering College",
      location: "Ghaziabad, India",
      degree: "B.Tech, Computer Science and Information Technology",
      period: "2023 – 2027",
      gpaOrScore: "CGPA: 8.0 / 10.0",
      coursework: [
        "Data Structures & Algorithms (DSA)",
        "Database Management Systems (DBMS)",
        "Operating Systems (OS)",
        "Computer Networks (CN)",
        "Object-Oriented Programming (OOP)"
      ],
      highlights: [
        "Maintained strong academic performance with 8.0 CGPA.",
        "Focused on applied AI/ML systems and production software engineering."
      ]
    },
    {
      institution: "Wisdom Public School",
      location: "Aligarh, India",
      degree: "Senior Secondary (Class 12) & Secondary (Class 10) - CBSE",
      period: "2021 – 2023",
      gpaOrScore: "Class 12: 76.0% | Class 10: 83.4%",
      highlights: [
        "Completed Senior Secondary Education with focus on Physics, Chemistry, and Mathematics.",
        "Built strong foundational quantitative and analytical skills."
      ]
    }
  ],
  achievements: [
    {
      title: "Smart India Hackathon (SIH)",
      subtitle: "SIH 2024 - 2025",
      description: "",
      tag: "Hackathon"
    },
    {
      title: "LeetCode Algorithmic Problem Solving",
      subtitle: "200+ Problems Solved",
      description: "Demonstrated strong grasp of core Data Structures & Algorithms, dynamic programming, tree traversals, and graph algorithms.",
      tag: "DSA"
    },
    {
      title: "Oracle Certified AgenticAI Foundations",
      subtitle: "Professional Certification",
      description: "Validated foundational knowledge in autonomous agent design, prompt architecture, and multi-agent coordination frameworks.",
      tag: "Certification",
      credentialUrl: "https://drive.google.com/file/d/16X1vo4DBK-K6KQe5cMqYJR4oDMBMN-U-/view?usp=sharing"
    },
    {
      title: "Infosys SpringBoard Certifications",
      subtitle: "AI with TensorFlow & Data Science with Python",
      description: "Completed comprehensive certifications covering neural networks, deep learning with TensorFlow, and data analysis using Python.",
      tag: "Certification",
      credentialUrl: "https://drive.google.com/drive/folders/1W0YQZF67rkVyd4doZR3SGvM-Q7nLR-iN?usp=drive_link"
    }
  ],
  currentlyExploring: [
    "Agentic AI Frameworks (LangGraph & Multi-Agent Systems)",
    "Production RAG Architectures & Vector DB Optimizations",
    "LLM Evaluation & Guardrails for Reliable Generation",
    "High-Performance Async Backend Services with FastAPI",
    "Exploring cloud services, deployment, and scalable infrastructure."
  ]
};
