export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  github: string | null;
  demo: string | null;
  youtube?: string | null;
  techs: string[];
  duration: string;
  roles: string;
  summary: string;
  image1?: string | null;
  image2?: string | null;
  image3?: string | null;
  image4?: string | null;
  bg1?: string;
  bg2?: string;
  bg3?: string;
  bg4?: string;
  next: string;
}

export const portfolioData = {
  personal: {
    firstName: "ASRAFUL",
    lastName: "HOQUE",
    fullName: "Asraful Hoque",
    email: "asraful.09.06.ece@gmail.com",
    phone: "+91-9864865585",
    location: "Kamrup, Assam, India",
    titles: [
      "Full Stack Developer",
      "Agentic AI & GenAI",
      "Distributed Systems & DevOps",
    ],
  },
  socials: {
    // You can replace these with your exact profile URLs
    github: "https://github.com/asraful-hoque",
    linkedin: "https://www.linkedin.com/in/asraful-hoque",
    leetcode: "https://leetcode.com",
    codeforces: "https://codeforces.com",
    instagram: null as string | null,
  },
  about: {
    college: "National Institute of Technology, Jamshedpur",
    degree: "B.Tech in Electronics and Communications Engineering",
    duration: "Aug 2023 – Jun 2027",
    cgpa: "8.63",
    school: "Abdul Hasib HS School, Hojai",
    schoolDuration: "2020 – 2022",
    schoolScore: "85.0%",
    bio: [
      "I am currently pursuing my B.Tech in Electronics and Communications Engineering at National Institute of Technology, Jamshedpur (2023 – 2027, CGPA 8.63).",
      "My primary focus is Full Stack Web Development, Agentic AI, and Distributed Systems. I enjoy exploring resilient backend architectures, agent workflows, and cloud infrastructure.",
      "Previously, I completed my Class-12th schooling at Abdul Hasib HS School, Hojai (Score: 85.0%).",
    ],
  },
  motivation: {
    paragraphs: [
      "I am passionate about Agentic AI, systems engineering, and competitive programming. I hold the titles of Knight on LeetCode and Specialist on Codeforces with 500+ DSA problems solved.",
      "Recognized as a Finalist in the Meta PyTorch OpenEnv Hackathon (2026), Semi-Finalist in the Google Cloud Gen AI Exchange Hackathon (2025), and secured 3rd Place at HackHorizon (2024) competing among 100+ teams.",
      "Previously worked as an Agentic AI & Automation Engineer at Brahmaastra.ai (Good Old Delight), building n8n automation pipelines and contributing to the Happy First project.",
    ],
  },
  skills: {
    frontend: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "GraphQL",
      "REST APIs",
      "Java",
      "Python",
      "C/C++",
      "MongoDB",
      "MySQL",
      "Redis",
      "Pinecone",
      "Neo4j",
    ],
    devopsAi: [
      "Docker",
      "Kubernetes",
      "Nginx",
      "GitHub Actions",
      "CI/CD",
      "LangChain",
      "Google ADK",
      "RAG",
      "MCP",
      "n8n",
      "BullMQ",
      "System Design",
    ],
  },
  projects: [
    {
      id: "1",
      title: "SYSTEM-2.0",
      subtitle: "Personal Project / Full Stack & AI",
      description:
        "AI-Powered Life Gamification platform featuring a dual-protocol API (GraphQL + REST, 22 endpoints), semantic RAG coaching, and event-driven BullMQ architecture.",
      github: "https://github.com/asraful-hoque/System-2.0",
      demo: null,
      youtube: null,
      techs: [
        "React",
        "Node.js",
        "GraphQL",
        "MongoDB",
        "Redis",
        "FastAPI",
        "LangChain",
        "Pinecone",
        "Docker",
        "Kubernetes",
        "BullMQ",
      ],
      duration: "2025",
      roles: "Full Stack & AI Engineer",
      summary:
        "Engineered an RPG-inspired productivity platform combining GraphQL and REST APIs (22 endpoints) enabling real-time stat tracking, adaptive quest difficulty, and penalty-based progression. Designed a semantic RAG pipeline using LangChain agents with tool-calling, Pinecone, and Mistral AI for long-term memory retrieval and context-aware coaching. Implemented an event-driven architecture using Redis Streams and BullMQ, and containerized services with Docker and Kubernetes manifests along with GitHub Actions CI workflows.",
      image1: null,
      image2: null,
      image3: null,
      image4: null,
      bg1: "/black_bg.webp",
      bg2: "/concrete_bg.webp",
      bg3: "/cloth_bg.webp",
      bg4: "/paper_bg.webp",
      next: "2",
    },
    {
      id: "2",
      title: "TRUTHGUARD AGENT",
      subtitle: "AI Project / Multi-Agent System",
      description:
        "Multi-agent AI fact verification system using Google ADK with root routing, SAFE atomic claim decomposition, in-memory TTL caching, and multi-channel deployment.",
      github: "https://github.com/asraful-hoque/TruthGuardAgent",
      demo: null,
      youtube: null,
      techs: [
        "Python",
        "FastAPI",
        "Google ADK",
        "Gemini",
        "React",
        "Browser Extension",
        "Redis",
      ],
      duration: "2025",
      roles: "Agentic AI Developer",
      summary:
        "Architected a multi-agent AI verification system using Google ADK with a root router that triages claims and delegates to specialized lanes for news, fact-checking, and scam detection backed by external data APIs. Implemented SAFE-inspired atomic claim decomposition where complex claims are split into independent sub-claims via Gemini and verified separately before aggregation. Attached an in-memory TTL cache at the agent callback layer to eliminate redundant LLM calls for viral content, and deployed across browser extension, WhatsApp, Telegram, and React.",
      image1: null,
      image2: null,
      image3: null,
      image4: null,
      bg1: "/sea_bg.webp",
      bg2: "/concrete_bg.webp",
      bg3: "/flower_bg.webp",
      bg4: "/paper_bg.webp",
      next: "3",
    },
    {
      id: "3",
      title: "CUSTOM UNIX SHELL",
      subtitle: "Systems Project / Java & OS",
      description:
        "Unix-like interactive shell supporting built-in commands, external process execution, custom stream wiring, backpressure management, and JLine-based REPL.",
      github: "https://github.com/asraful-hoque/custom-unix-shell",
      demo: null,
      youtube: "https://www.youtube.com", // Paste your YouTube video URL here
      techs: ["Java 21", "JLine", "ProcessBuilder", "Maven", "Linux", "POSIX"],
      duration: "2025",
      roles: "Systems Engineer",
      summary:
        "Built a Unix-like interactive shell supporting built-in commands, external process execution, and advanced stdout/stderr redirection. Designed a hybrid pipeline execution model combining OS-native processes with custom stream wiring, handling backpressure and long-running process edge cases. Implemented a modular parsing engine for reliable tokenization, quoting, escaping, and multi-stage command chaining, integrating JLine-based REPL features with command completion and persistent history tracking.",
      image1: null,
      image2: null,
      image3: null,
      image4: null,
      bg1: "/wheel_bg.webp",
      bg2: "/concrete_bg.webp",
      bg3: "/paper_bg.webp",
      bg4: "/black_bg.webp",
      next: "1",
    },
  ] as Project[],
};

export const projects = portfolioData.projects;
