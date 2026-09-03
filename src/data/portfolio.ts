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

export interface AnimeItem {
  title: string;
  type: "Anime" | "Donghua";
  genre?: string;
  image: string;
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
    github: "https://github.com/Ray-0906",
    linkedin: "https://linkedin.com/in/asraful-u3716",
    leetcode: "https://leetcode.com/u/Hj5Y6CCjHB/",
    codeforces: "https://codeforces.com/profile/Ray_0906",
    instagram: "https://www.instagram.com/astra.asraful",
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
      github: "https://github.com/Ray-0906/System-2.0",
      demo: "https://system-2-0-sigma.vercel.app",
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
      image1: "/projects/system2.0/image.png",
      image2: "/projects/system2.0/image1.png",
      image3: "/projects/system2.0/image2.png",
      image4: "/projects/system2.0/image3.png",
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
      github: "https://github.com/Ray-0906/TruthGuardAgent",
      demo: "https://truth-guard-agent-chi.vercel.app",
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
      image1: "/projects/truthguard/image.png",
      image2: "/projects/truthguard/image1.png",
      image3: "/projects/truthguard/image2.png",
      image4: null,
      bg1: "/sea_bg.webp",
      bg2: "/concrete_bg.webp",
      bg3: "/flower_bg.webp",
      bg4: "/paper_bg.webp",
      next: "3",
    },
    {
      id: "3",
      title: "AEGISOS",
      subtitle: "Distributed Systems / Java & Raft",
      description:
        "Distributed Workload Execution Platform featuring Raft-based consensus, push-pull gossip discovery, fault-tolerant job scheduler, polyglot runtime, and CLI observability.",
      github: "https://github.com/Ray-0906/AegisOS",
      demo: null,
      youtube: null,
      techs: [
        "Java 21",
        "Raft",
        "Protobuf",
        "Gossip Protocol",
        "Docker",
        "Maven",
        "REST API",
        "CLI",
        "AES-256-GCM",
      ],
      duration: "2025",
      roles: "Distributed Systems Engineer",
      summary:
        "Built a distributed platform from scratch featuring Raft-based consensus, push-pull gossip discovery, and a replicated virtual filesystem with AES-256-GCM encrypted, content-addressed chunk storage. Engineered a fault-tolerant job scheduler with lease-based heartbeat monitoring, automatic failover, and transparent API-layer reverse-proxying — enabling workload migration across nodes on failure. Designed a polyglot runtime supporting JVM, Node.js, and Docker-based workloads via CLI-driven container orchestration, with execution fencing, checkpoint/restore, and content-hash artifact deduplication. Shipped a REST API and CLI (28 commands, picocli) with leader-aware client routing, process-level log retrieval, and a custom metrics pipeline exposing cluster-wide observability.",
      image1: "/projects/aegisOs/image.png",
      image2: null,
      image3: null,
      image4: null,
      bg1: "/sunset_bg.webp",
      bg2: "/concrete_bg.webp",
      bg3: "/cloth_bg.webp",
      bg4: "/paper_bg.webp",
      next: "4",
    },
    {
      id: "4",
      title: "CUSTOM UNIX SHELL",
      subtitle: "Systems Project / Java & OS",
      description:
        "Unix-like interactive shell supporting built-in commands, external process execution, custom stream wiring, backpressure management, and JLine-based REPL.",
      github: "https://github.com/Ray-0906/My-Java-Shell",
      demo: null,
      youtube: "https://www.youtube.com/watch?si=6_N4GqKdSfnqRIPx&v=OapJaF5zaiQ&feature=youtu.be",
      techs: ["Java 21", "JLine", "ProcessBuilder", "Maven", "Linux", "POSIX"],
      duration: "2025",
      roles: "Systems Engineer",
      summary:
        "Built a Unix-like interactive shell supporting built-in commands, external process execution, and advanced stdout/stderr redirection. Designed a hybrid pipeline execution model combining OS-native processes with custom stream wiring, handling backpressure and long-running process edge cases. Implemented a modular parsing engine for reliable tokenization, quoting, escaping, and multi-stage command chaining, integrating JLine-based REPL features with command completion and persistent history tracking.",
      image1: "/projects/unix-shell/image.png",
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
  watchlist: [
    {
      title: "Bleach",
      type: "Anime",
      genre: "Action / Supernatural",
      image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx269-d2GmRkJbMopq.png",
    },
    {
      title: "Lord of the Mysteries",
      type: "Donghua",
      genre: "Mystery / Supernatural",
      image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx137667-xQxzQRAerw53.jpg",
    },
    {
      title: "Jujutsu Kaisen",
      type: "Anime",
      genre: "Action / Dark Fantasy",
      image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113415-LHBAeoZDIsnF.jpg",
    },
    {
      title: "Naruto: Shippuden",
      type: "Anime",
      genre: "Action / Adventure",
      image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1735-kGfVm0YqCPcu.png",
    },
    {
      title: "Samurai Champloo",
      type: "Anime",
      genre: "Action / Adventure",
      image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx205-7tHVFu6dPBm9.png",
    },
    {
      title: "Attack on Titan",
      type: "Anime",
      genre: "Action / Dark Fantasy",
      image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-buvcRTBx4NSm.jpg",
    },
    {
      title: "Solo Leveling",
      type: "Anime",
      genre: "Action / Fantasy",
      image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151807-it355ZgzquUd.png",
    },
    {
      title: "Renegade Immortal",
      type: "Donghua",
      genre: "Action / Xianxia",
      image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx137653-1wHbCVvABGOr.png",
    },
    {
      title: "Record of a Mortal's Journey to Immortality",
      type: "Donghua",
      genre: "Action / Cultivation",
      image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx129202-DReOdlgQ13D0.png",
    },
    {
      title: "Battle Through the Heavens",
      type: "Donghua",
      genre: "Action / Cultivation",
      image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx102464-jgCh7bsSI0Bg.jpg",
    },
    {
      title: "A Will Eternal",
      type: "Donghua",
      genre: "Comedy / Cultivation",
      image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx110595-vHd33fbqdK6B.png",
    },
  ] as AnimeItem[],
};

export const projects = portfolioData.projects;
export const watchlist = portfolioData.watchlist;

