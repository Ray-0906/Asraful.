"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useCursorStore } from "../store/useCursorStore";
import ParallaxImage from "../components/parallax-image";
import Link from "next/link";
import { useThemeStore } from "../store/useThemeStore";
import { portfolioData } from "../data/portfolio";

const item = {
    initial: { y: "2rem", opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: [0.2, 1, 0.4, 1] as const
        }
    },
};

export default function Home() {
    const [isPhotoColored, setIsPhotoColored] = useState(false);
    const set = useCursorStore((state) => state.setCursorType);
    const { theme } = useThemeStore();
    const { personal, about, motivation, skills, socials } = portfolioData;

    return (
        <motion.main
            className="pb-[10vh] overflow-y-scroll snap-y snap-mandatory"
            exit={{ opacity: 0, filter: "blur(1px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* about */}
            <motion.section
                className="relative w-screen pt-[12vh] lg:pt-[10vh] pl-[10vw] flex flex-col lg:pt-[15vh] lg:pl-[15vw] lg:flex-row lg:items-center lg:gap-[10vw] snap-center"
                initial={{ opacity: 0, filter: "blur(1px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
                <div className="w-[80vw] lg:w-[35vw] flex flex-col items-start justify-start lg:justify-between lg:min-h-[clamp(20rem,60vh,40rem)] font-light leading-none gap-6 lg:gap-0">
                    <div>
                        <div className="text-[clamp(3rem,6.5vw,7rem)] md:text-[clamp(4rem,7vw,8rem)] font-light lg:font-thin">
                            <div className="h-auto overflow-hidden">
                                <motion.h1
                                    className="flex gap-[clamp(0.1rem,0.2vw,0.2rem)]"
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true }}
                                    transition={{
                                        staggerChildren: 0.08,
                                        delayChildren: 0.7,
                                    }}
                                >
                                    {personal.firstName.split("").map((char, i) => (
                                        <motion.span key={i} variants={item}>{char}</motion.span>
                                    ))}
                                </motion.h1>
                            </div>
                            <div className="h-auto overflow-hidden">
                                <motion.h1
                                    className="flex gap-[clamp(0.1rem,0.2vw,0.2rem)]"
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true }}
                                    transition={{
                                        staggerChildren: 0.08,
                                        delayChildren: 1,
                                    }}
                                >
                                    {personal.lastName.split("").map((char, i) => (
                                        <motion.span key={i} variants={item}>{char}</motion.span>
                                    ))}
                                </motion.h1>
                            </div>
                        </div>

                        <div className="text-[clamp(0.8rem,1.2vw,1.5rem)] pt-1.5 pl-1 lg:pl-2 ">
                            {personal.titles.map((title, i) => (
                                <p  className="mt-0.5" key={i}>{title}</p>
                            ))}
                        </div>
                    </div>
                    <div className="pl-1 mt-4 lg:mt-[8vh] lg:pl-2 flex flex-col items-start justify-start text-[clamp(0.8rem,1.2vw,1.5rem)] leading-tight">
                        <p>For business inquiries, email me at</p>
                        <Email />

                        {/* Social profiles row */}
                        <div className="mt-4 flex flex-col items-start gap-2">
                            <p className={`text-[clamp(0.6rem,0.7vw,0.75rem)] font-mono tracking-widest uppercase transition-colors duration-500 ${
                                theme === "dark" ? "text-[#888888]" : "text-[#666666]"
                            }`}>CONNECT / PROFILES</p>
                            <div className="flex flex-row items-center gap-3 mt-1">
                                {socials.github && (
                                    <SocialIconButton title="GitHub" href={socials.github} icon={<GitHubIcon />} />
                                )}
                                {socials.linkedin && (
                                    <SocialIconButton title="LinkedIn" href={socials.linkedin} icon={<LinkedInIcon />} />
                                )}
                                {socials.codeforces && (
                                    <SocialIconButton title="Codeforces" href={socials.codeforces} icon={<CodeforcesIcon />} />
                                )}
                                {socials.leetcode && (
                                    <SocialIconButton title="LeetCode" href={socials.leetcode} icon={<LeetCodeIcon />} />
                                )}
                                {socials.instagram && (
                                    <SocialIconButton title="Instagram" href={socials.instagram} icon={<InstagramIcon />} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[80vw] lg:w-[35vw] flex flex-col items-start ml-4 lg:ml-0 justify-start lg:justify-between lg:min-h-[clamp(20rem,60vh,40rem)] mt-12 lg:mt-0">
                    {/* Top of right side: Profile Avatar & Education Card */}
                    <div className="w-full flex flex-row items-center gap-4  mb-2 pt-0">
                        <div
                            onClick={() => setIsPhotoColored((prev) => !prev)}
                            onMouseEnter={() => set("hover")}
                            onMouseLeave={() => set("default")}
                            className={`relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border shadow-2xl flex-shrink-0 group cursor-pointer active:scale-95 transition-all duration-500 select-none ${
                                theme === "dark" ? "border-white/10 bg-[#0d0d0d]" : "border-black/10 bg-black/5"
                            }`}
                        >
                            <img
                                src="/image.png"
                                alt={personal.fullName}
                                className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-115 active:grayscale-0 group-hover:grayscale-0 ${
                                    isPhotoColored ? "grayscale-0 scale-105" : "grayscale"
                                } ${
                                    theme === "dark"
                                        ? isPhotoColored ? "contrast-100" : "contrast-125 group-hover:contrast-100"
                                        : isPhotoColored ? "contrast-100" : "contrast-110 group-hover:contrast-100"
                                }`}
                            />
                            {/* Active online status dot */}
                            {/* <span className="absolute bottom-2 right-2 flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                            </span> */}
                        </div>

                        <div className="flex flex-col items-start justify-center text-xs md:text-sm font-light leading-snug">
                            <p className={`text-[clamp(0.75rem,0.85vw,0.95rem)] font-mono uppercase tracking-wider transition-colors duration-500 ${
                                theme === "dark" ? "text-neutral-400" : "text-neutral-500"
                            }`}>NIT JSR</p>
                            <p className={`text-[clamp(0.8rem,0.95vw,1.05rem)] font-light mt-0.5 transition-colors duration-500 ${
                                theme === "dark" ? "text-neutral-200" : "text-[#101010]"
                            }`}>B.Tech ECE'27</p>
                            <div className={`mt-1.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md border text-[clamp(0.65rem,0.75vw,0.85rem)] font-mono transition-colors duration-500 ${
                                theme === "dark" ? "bg-white/5 border-white/10 text-neutral-300" : "bg-black/5 border-black/10 text-neutral-700"
                            }`}>
                                <span className={theme === "dark" ? "text-neutral-500" : "text-neutral-400"}>CGPA</span>
                                <span className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>8.63</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-start">
                        <div className="h-[6vh] lg:h-[10vh] flex items-end text-[clamp(1rem,1.5vw,2rem)] font-light mb-1">
                            <h1>ABOUT ME</h1>
                        </div>

                        <div className="w-[80vw] lg:w-[35vw] h-[1px] bg-[#888888aa]" />

                        <div className="w-[80vw] lg:w-[35vw] flex flex-col pt-[3vh] lg:pt-[clamp(1rem,4vh,2rem)] text-[clamp(0.7rem,1vw,1.2rem)] tracking-[0.1rem] font-light gap-2 leading-[clamp(1.1rem,3vh,1.4rem)]">
                            {about.bio.map((line, i) => (
                                <p key={i}>{line}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* motivation */}
            <motion.section
                className="relative w-screen pt-[5vh] pl-[10vw] lg:pt-[clamp(5rem,15vh,10rem)] lg:pl-[15vw] flex flex-col lg:flex-row lg:items-center lg:gap-[10vw] snap-center"
                initial={{ opacity: 0, filter: "blur(1px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <div className="lg:h-[clamp(20rem,60vh,40rem)] flex flex-col items-start justify-start">
                    <div className="h-[15vh] flex items-end text-[clamp(1rem,1.5vw,2rem)] font-light mb-1">
                        <h1>EXPERIENCE</h1>
                    </div>

                    <div className="w-[80vw] lg:w-[35vw] h-[1px] bg-[#888888aa]" />

                    <div className="w-[80vw] lg:w-[35vw] flex flex-col pt-[5vh] lg:pt-[clamp(1rem,7.5vh,3rem)] text-[clamp(0.7rem,1vw,1.2rem)] tracking-[0.1rem] font-light gap-2 leading-[clamp(1.1rem,3vh,1.4rem)]">
                        {motivation.paragraphs.map((line, i) => (
                            <p key={i}>{line}</p>
                        ))}
                    </div>
                </div>

                <ParallaxImage
                    src="/wallhaven-85p79o_1920x1080.png"
                    alt={personal.fullName}
                    classname="mt-[5vh] w-[80vw] aspect-[8/5] lg:w-[35vw] lg:aspect-[8/5] flex items-center justify-center overflow-hidden"
                    hover="default"
                />
            </motion.section>

            {/* skills */}
            <motion.section
                className="relative w-screen pt-[5vh] pl-[10vw] lg:pt-[clamp(2rem,5vh,5rem)] lg:pl-[15vw] flex flex-col snap-center"
                initial={{ opacity: 0, filter: "blur(1px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >

                <div className="w-[80vw] lg:w-[75vw] flex flex-col items-start justify-start">
                    <div className="h-[15vh] flex items-end text-[clamp(1rem,1.5vw,2rem)] font-light mb-1">
                        <h1>SKILLS</h1>
                    </div>

                    <div className="w-[80vw] lg:w-[75vw] h-[1px] bg-[#888888aa]" />

                    <div className="mt-[5vh] w-[80vw] lg:w-[75vw] flex flex-col items-start justify-start gap-10 lg:flex-row lg:items-start lg:justify-between">
                        <div className="flex flex-col w-[80vw] lg:w-[25vw] gap-3 font-light">
                            <div className="text-[clamp(1rem,1.5vw,2rem)] h-auto tracking-wide">
                                <h2>FRONTEND</h2>
                            </div>
                            <div className="w-full text-[clamp(0.8rem,1.2vw,1rem)] flex flex-wrap gap-2">
                                {skills.frontend.map((skill, i) => (
                                    <p key={i} className={`w-fit h-fit p-1 px-5 m-1 border border-[#888888aa] rounded-full duration-500 ${theme === "dark" ? "hover:bg-white hover:text-[#101010]" : "hover:bg-black hover:text-[#ffffffcc]"}`}>{skill}</p>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col w-[80vw] lg:w-[20vw] gap-3 font-light">
                            <div className="text-[clamp(1rem,1.5vw,2rem)] h-auto tracking-wide">
                                <h2>BACKEND</h2>
                            </div>
                            <div className="w-full text-[clamp(0.8rem,1.2vw,1rem)] flex flex-wrap gap-2">
                                {skills.backend.map((skill, i) => (
                                    <p key={i} className={`w-fit h-fit p-1 px-5 m-1 border border-[#888888aa] rounded-full duration-500 ${theme === "dark" ? "hover:bg-white hover:text-[#101010]" : "hover:bg-black hover:text-[#ffffffcc]"}`}>{skill}</p>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col w-[80vw] lg:w-[20vw] gap-3 font-light">
                            <div className="text-[clamp(1rem,1.5vw,2rem)] h-auto tracking-wide">
                                <h2>DEVOPS / AI</h2>
                            </div>
                            <div className="w-full text-[clamp(0.8rem,1.2vw,1rem)] flex flex-wrap gap-2">
                                {skills.devopsAi.map((skill, i) => (
                                    <p key={i} className={`w-fit h-fit p-1 px-5 m-1 border border-[#888888aa] rounded-full duration-500 ${theme === "dark" ? "hover:bg-white hover:text-[#101010]" : "hover:bg-black hover:text-[#ffffffcc]"}`}>{skill}</p>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="ml-auto flex flex-col items-end justify-center gap-4 mt-[15vh]">
                        <Link
                            href="/works"
                            className="flex flex-row items-center justify-center gap-2 text-[clamp(1rem,1.5vw,2rem)] font-light"
                            onMouseEnter={() => set("hover")}
                            onMouseLeave={() => set("default")}
                        >
                            <span>WORKS</span>
                            <span>
                                <svg width="clamp(1rem,1.5vw,2rem)" height="clamp(1rem,1.5vw,2rem)" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.204656" y1="50.2071" x2="100.205" y2="50.2071" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4" />
                                    <line x1="65.4073" y1="15.2028" x2="100.763" y2="50.5581" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4" />
                                    <line x1="65.4073" y1="85.2064" x2="100.763" y2="49.851" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4" />
                                </svg>
                            </span>
                        </Link>
                        <Link
                            href="/gallery"
                            className="flex flex-row items-center justify-center gap-2 text-[clamp(1rem,1.5vw,2rem)] font-light"
                            onMouseEnter={() => set("hover")}
                            onMouseLeave={() => set("default")}
                        >
                            <span>ANIME</span>
                            <span>
                                <svg width="clamp(1rem,1.5vw,2rem)" height="clamp(1rem,1.5vw,2rem)" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.204656" y1="50.2071" x2="100.205" y2="50.2071" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4" />
                                    <line x1="65.4073" y1="15.2028" x2="100.763" y2="50.5581" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4" />
                                    <line x1="65.4073" y1="85.2064" x2="100.763" y2="49.851" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4" />
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
            </motion.section>
        </motion.main>
    )
}

function Email() {
    const set = useCursorStore((state) => state.setCursorType);
    return (
        <a
            href={`mailto:${portfolioData.personal.email}`}
            aria-label={`Send an email to ${portfolioData.personal.fullName}`}
            onMouseEnter={() => set("hover")}
            onMouseLeave={() => set("default")}
        >
            {portfolioData.personal.email}
        </a>
    )
}

function SocialIconButton({ title, href, icon }: { title: string; href: string; icon: React.ReactNode }) {
    const set = useCursorStore((state) => state.setCursorType);
    const { theme } = useThemeStore();
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={title}
            title={title}
            onMouseEnter={() => set("hover")}
            onMouseLeave={() => set("default")}
            className={`w-9 h-9 flex items-center justify-center rounded-xl border transition-all duration-300 group ${
                theme === "dark"
                    ? "border-white/10 bg-white/[0.03] hover:bg-white/10 hover:border-white/30 text-neutral-400 hover:text-white"
                    : "border-black/10 bg-black/[0.03] hover:bg-black/10 hover:border-black/30 text-neutral-600 hover:text-black"
            }`}
        >
            <span className="w-4 h-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">{icon}</span>
        </a>
    );
}

function GitHubIcon() {
    return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
    );
}

function CodeforcesIcon() {
    return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M4.5 7.5a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-3 0v-9a1.5 1.5 0 0 1 1.5-1.5zm7.5-4.5a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-3 0V4.5a1.5 1.5 0 0 1 1.5-1.5zm7.5 7.5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-3 0v-6a1.5 1.5 0 0 1 1.5-1.5z"/>
        </svg>
    );
}

function LeetCodeIcon() {
    return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.874 5.874 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.868 5.86 5.86 0 0 0 3.616-.764l3.864-2.828a1.374 1.374 0 0 0 .285-1.916 1.374 1.374 0 0 0-1.916-.285l-3.864 2.828a3.12 3.12 0 0 1-1.93.408 3.197 3.197 0 0 1-2.602-2.088 3.16 3.16 0 0 1-.188-.549 2.977 2.977 0 0 1-.034-1.272 2.83 2.83 0 0 1 .65-1.132l3.854-4.126 5.406-5.788A1.374 1.374 0 0 0 13.483 0zm2.592 10.354l-5.696.002a1.374 1.374 0 0 0 0 2.748l5.696-.002a1.374 1.374 0 0 0 0-2.748z"/>
        </svg>
    );
}

function InstagramIcon() {
    return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
        </svg>
    );
}

