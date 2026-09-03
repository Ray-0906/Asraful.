"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useCursorStore } from "../store/useCursorStore";
import Link from "next/link";
import { portfolioData, type Project } from "../data/portfolio";
import Media from "../components/media";
import { useThemeStore } from "../store/useThemeStore";

export default function Works() {
    const { projects, socials } = portfolioData;
    const { theme } = useThemeStore();
    const [focus, setFocus] = useState<Project>(projects[0] || {} as Project);
    const set = useCursorStore((state) => state.setCursorType);

    const totalProjectsStr = String(projects.length).padStart(2, "0");
    const currentIdStr = String(focus.id || "1").padStart(2, "0");

    const githubHandle = socials.github ? `/${socials.github.split("/").pop()}` : "/Works";

    return (
        <motion.main
            className="relative w-screen h-full overflow-x-auto lg:portrait:w-full lg:portrait:min-h-screen landscape:w-full landscape:min-h-screen flex justify-start items-center pt-[15vh] pl-[15vw] pr-[15vw] lg:portrait:justify-start lg:portrait:items-start lg:portrait:pt-[45vh] lg:portrait:pb-[45vh] lg:portrait:pl-[15vw] landscape:justify-start landscape:items-start landscape:pt-[40vh] landscape:pb-[30vh] landscape:pl-[15vw]"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Desktop / Landscape vertical scroll list */}
            <div className="hidden lg:portrait:flex lg:portrait:flex-col lg:portrait:w-[40vw] lg:portrait:h-auto lg:portrait:gap-[40vh] landscape:flex landscape:flex-col landscape:w-[40vw] landscape:h-auto landscape:gap-[40vh]">
                {projects.map((proj, idx) => (
                    <motion.div
                        key={proj.id}
                        initial={{ opacity: 0, filter: "blur(1px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.1 }}
                    >
                        <Link
                            href={`/works/${proj.id}`}
                            className={`relative w-[40vw] aspect-[2/1] flex items-center justify-center overflow-hidden border transition-colors duration-500 ${
                                theme === "dark" ? "border-white/10" : "border-black/10"
                            }`}
                            onMouseEnter={() => set("VIEW")}
                            onMouseLeave={() => set("default")}
                        >
                            <motion.img
                                src={proj.bg1 || "/black_bg.webp"}
                                alt={`${proj.title} Background`}
                                className="absolute inset-0 w-full h-full object-cover"
                                onViewportEnter={() => setFocus(proj)}
                                viewport={{ amount: "some", margin: "-50% 0px -50% 0px" }}
                            />
                            {proj.image1 ? (
                                <Media
                                    src={proj.image1}
                                    alt={proj.title}
                                    className="w-[35vw] max-h-[85%] object-contain drop-shadow-xl z-10"
                                    loading={idx === 0 ? "eager" : "lazy"}
                                />
                            ) : (
                                <div className="z-10 text-center px-4">
                                    <span className={`text-[clamp(1rem,2vw,1.8rem)] font-extralight tracking-widest uppercase border px-4 py-2 backdrop-blur-sm ${
                                        theme === "dark" ? "border-white/20 bg-black/40 text-white" : "border-black/20 bg-white/40 text-black"
                                    }`}>
                                        {proj.title}
                                    </span>
                                </div>
                            )}
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Mobile horizontal scroll list */}
            <div className="lg:portrait:hidden landscape:hidden flex flex-row overflow-x-auto flex-shrink-0 h-[70vh] gap-[40vw]">
                {projects.map((proj, idx) => (
                    <motion.div
                        key={proj.id}
                        className="h-[70vh] flex items-end"
                        onViewportEnter={() => setFocus(proj)}
                        viewport={{ amount: "some", margin: "-50% 0px -50% 0px" }}
                        initial={{ opacity: 0, filter: "blur(1px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: idx * 0.1 }}
                    >
                        <Link
                            href={`/works/${proj.id}`}
                            className={`relative w-[70vw] aspect-[2/1] flex items-center justify-center overflow-hidden border transition-colors duration-500 ${
                                theme === "dark" ? "border-white/10" : "border-black/10"
                            }`}
                        >
                            <img
                                src={proj.bg1 || "/black_bg.webp"}
                                alt={`${proj.title} Background`}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            {proj.image1 ? (
                                <Media
                                    src={proj.image1}
                                    alt={proj.title}
                                    className="w-[60vw] max-h-[85%] object-contain drop-shadow-xl z-10"
                                    loading={idx === 0 ? "eager" : "lazy"}
                                />
                            ) : (
                                <div className="z-10 text-center px-4">
                                    <span className={`text-[clamp(1rem,2vw,1.8rem)] font-extralight tracking-widest uppercase border px-4 py-2 backdrop-blur-sm ${
                                        theme === "dark" ? "border-white/20 bg-black/40 text-white" : "border-black/20 bg-white/40 text-black"
                                    }`}>
                                        {proj.title}
                                    </span>
                                </div>
                            )}
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Fixed info panel */}
            <motion.div
                className="fixed top-[5vh] left-[10vw] w-[80vw] lg:portrait:top-[15vh] lg:portrait:left-[60vw] lg:portrait:w-[35vw] landscape:top-[15vh] landscape:left-[60vw] landscape:w-[35vw] flex flex-col pointer-events-none"
                initial={{ opacity: 0, filter: "blur(1px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <div className="w-[80vw] lg:portrait:w-[35vw] landscape:w-[35vw] h-[15vh] flex flex-row items-end justify-between pointer-events-auto">
                    <h1 className="text-[clamp(1rem,1.5vw,2rem)] font-light mb-1">WORKS</h1>
                    <a
                        className="flex items-end justify-center text-[clamp(0.8rem,1vw,1.5rem)] font-light mb-1"
                        href={socials.github || "https://github.com"}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => set("hover")}
                        onMouseLeave={() => set("default")}
                    >
                        {githubHandle}
                    </a>
                </div>

                <div className="w-[80vw] lg:portrait:w-[35vw] landscape:w-[35vw] h-[1px] bg-[#888888aa]" />

                <div className="mt-[5vh] lg:portrait:mt-[14vh] landscape:mt-[14vh] pointer-events-auto">
                    <div className="h-auto overflow-hidden flex flex-row items-center text-[clamp(0.7rem,1vw,1.2rem)] lg:text-[clamp(1rem,1.2vw,1.5rem)] font-light tracking-widest mb-4">
                        <div className="w-3 lg:w-5">[</div>
                        <AnimatePresence mode="wait">
                            <motion.div key={focus.id} className="w-[clamp(1.5rem,2vw,2.5rem)] lg:w-[clamp(2rem,2.5vw,3rem)] flex flex-row">
                                <motion.div
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    exit={{ y: "-100%" }}
                                    transition={{ duration: 0.225, ease: "easeOut" }}
                                >
                                    {currentIdStr[0]}
                                </motion.div>
                                <motion.div
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    exit={{ y: "-100%" }}
                                    transition={{ duration: 0.225, ease: "easeOut", delay: 0.05 }}
                                >
                                    {currentIdStr[1]}
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                        <div>/</div>
                        <div className="w-[clamp(1.5rem,2vw,2.5rem)] lg:w-[clamp(2rem,2.5vw,3rem)] flex justify-end">
                            {totalProjectsStr}
                        </div>
                        <div className="w-3 lg:w-5 flex justify-end">]</div>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={focus.id}
                            className="flex flex-col w-[80vw] lg:portrait:w-[35vw] landscape:w-[35vw] whitespace-normal"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                            <h2 className="text-[clamp(1rem,1.5vw,2rem)] lg:text-[clamp(1.2rem,2vw,2rem)] font-light">{focus.title}</h2>
                            <h3 className="text-[clamp(0.7rem,1vw,1.2rem)] lg:text-[clamp(1rem,1.2vw,1.5rem)] font-light">{focus.subtitle}</h3>
                            <p className="text-[clamp(0.7rem,1vw,1.2rem)] lg:text-[clamp(1rem,1.2vw,1.5rem)] font-light mt-5">{focus.description}</p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>
        </motion.main>
    );
}
