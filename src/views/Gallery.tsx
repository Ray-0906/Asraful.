"use client";

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react";
import { useCursorStore } from "../store/useCursorStore"
import { useThemeStore } from "../store/useThemeStore"

const item = {
    initial: { y: "1rem", opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.2, 1, 0.3, 1] as const
        }
    },
};


import { portfolioData } from "../data/portfolio";

export default function Gallery() {
    const set = useCursorStore((state) => state.setCursorType);
    const { socials, personal, watchlist } = portfolioData;
    const githubHandle = socials.github ? `@${socials.github.split("/").pop()}` : "@Watchlist";

    const containerRef = useRef(null);
    
    const { scrollYProgress } = useScroll();

    const yLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);  // faster

    const leftItems = watchlist.filter((_, i) => i % 2 === 0);
    const rightItems = watchlist.filter((_, i) => i % 2 !== 0);

    return (
        <motion.main
            className="relative w-screen flex flex-col items-center pt-[5vh] pb-[10vh] lg:pt-[15vh] lg:pb-[25vh] lg:pl-[10vw]"
            initial={{ opacity: 0, filter: "blur(1px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(1px)", transition: { duration: 0.8, ease: "easeOut" } }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
            <div className="w-[80vw] lg:w-[70vw] h-[15vh] sm:landscape:h-[30vh] md:landscape:h-[30vh] lg:landscape:h-[15vh] flex flex-row items-end justify-between">
                <h1 className="text-[clamp(1rem,1.5vw,2rem)] font-light mb-1">Anime & Donghua</h1>
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

            <div className="w-[80vw] lg:w-[70vw] h-[1px] bg-[#888888aa]"/>

            {/* Desktop / Tablet 2-column layout */}
            <div
                ref={containerRef}
                className="hidden md:flex md:flex-row md:pt-[clamp(1rem,7.5vh,3rem)] md:gap-[10vw]"
            >
                <motion.div
                    style={{ y: yLeft }}
                    className="w-[30vw] flex flex-col gap-[10vh]"
                >
                    {leftItems.map((item, idx) => (
                        <AnimeCard
                            key={item.title}
                            url={item.image}
                            title={item.title}
                            type={item.type}
                            genre={item.genre}
                            load={idx === 0 ? "eager" : undefined}
                        />
                    ))}
                </motion.div>

                <div className="w-[30vw] flex flex-col gap-[10vh]">
                    {rightItems.map((item, idx) => (
                        <AnimeCard
                            key={item.title}
                            url={item.image}
                            title={item.title}
                            type={item.type}
                            genre={item.genre}
                            load={idx === 0 ? "eager" : "lazy"}
                        />
                    ))}
                </div>
            </div>

            {/* Mobile 1-column layout */}
            <div className="md:hidden w-[70vw] flex flex-col pt-[5vh] gap-[10vh]">
                {watchlist.map((item, idx) => (
                    <AnimeCard
                        key={item.title}
                        url={item.image}
                        title={item.title}
                        type={item.type}
                        genre={item.genre}
                        load={idx < 2 ? "eager" : undefined}
                    />
                ))}
            </div>

            <div className="cursive w-full h-auto overflow-hidden flex items-center justify-center mt-[clamp(3rem,10vh,5rem)] text-[clamp(1rem,1.5vw,2rem)] lg:-translate-x-[5vw] md:-translate-y-[25vh] md:text-[clamp(1.5rem,2vw,2.5rem)] md:font-thin">
                <motion.h2 
                    className="flex gap-[clamp(0.05rem,0.2vw,0.2rem)]"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false }}
                    transition={{ 
                        staggerChildren: 0.02,
                        delayChildren: 0.2,
                    }}
                >
                    <motion.span variants={item}>T</motion.span>
                    <motion.span variants={item}>h</motion.span>
                    <motion.span variants={item}>a</motion.span>
                    <motion.span variants={item}>n</motion.span>
                    <motion.span variants={item}>k</motion.span>
                    <motion.span className="w-[clamp(0.5rem,0.8vw,1rem)]" variants={item}> </motion.span>
                    <motion.span variants={item}>y</motion.span>
                    <motion.span variants={item}>o</motion.span>
                    <motion.span variants={item}>u</motion.span>
                    <motion.span className="w-[clamp(0.5rem,0.8vw,1rem)]" variants={item}> </motion.span>
                    <motion.span variants={item}>f</motion.span>
                    <motion.span variants={item}>o</motion.span>
                    <motion.span variants={item}>r</motion.span>
                    <motion.span className="w-[clamp(0.5rem,0.8vw,1rem)]" variants={item}> </motion.span>
                    <motion.span variants={item}>v</motion.span>
                    <motion.span variants={item}>i</motion.span>
                    <motion.span variants={item}>s</motion.span>
                    <motion.span variants={item}>i</motion.span>
                    <motion.span variants={item}>t</motion.span>
                    <motion.span variants={item}>i</motion.span>
                    <motion.span variants={item}>n</motion.span>
                    <motion.span variants={item}>g.</motion.span>
                </motion.h2>
            </div>
            <div className="cursive w-full h-auto overflow-hidden flex items-center justify-center mt-[clamp(1rem,1vh,2rem)] text-[clamp(0.6rem,0.8vw,1.2rem)] lg:-translate-x-[5vw] md:-translate-y-[25vh] md:text-[clamp(0.8rem,1vw,1.5rem)] md:font-thin">
                <motion.h2 
                    className="flex gap-[clamp(0.05rem,0.1vw,0.2rem)] ml-[clamp(3rem,10vw,10rem)]"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false }}
                    transition={{ 
                        staggerChildren: 0.02,
                        delayChildren: 0.35,
                    }}
                >
                    {`Created by ${personal.fullName}`.split("").map((char, index) => {
                        if (char === " ") {
                            return <motion.span key={index} className="w-[clamp(0.3rem,0.4vw,0.8rem)]" variants={item}> </motion.span>;
                        }
                        return <motion.span key={index} variants={item}>{char}</motion.span>;
                    })}
                </motion.h2>
            </div>
        </motion.main>
    )
}

type AnimeCardProps = {
    url: string;
    title: string;
    type: "Anime" | "Donghua";
    genre?: string;
    load?: "eager" | "lazy" | undefined;
}

function AnimeCard({ url, title, type, genre, load }: AnimeCardProps) {
    const { theme } = useThemeStore();
    return (
        <div className="w-full md:w-[30vw] flex flex-col items-start justify-start group">
            <div className={`w-full aspect-[2/3] overflow-hidden border transition-colors duration-500 flex items-center justify-center ${
                theme === "dark" ? "bg-[#101010] border-[#88888833]" : "bg-neutral-100 border-[#88888844]"
            }`}>
                <img
                    src={url}
                    alt={title}
                    className="w-full h-full object-cover opacity-[90%] transition-transform duration-700 ease-out group-hover:scale-105"
                    loading={load}
                    decoding="async"
                />
            </div>
            <h2 className="mt-3 pl-1 text-[clamp(1rem,1.5vw,1.5rem)] font-light w-full mb-1 border-[#888888aa] border-b-[0.3px] tracking-wide">{title}</h2>
            <div className="w-full flex flex-col items-start justify-start text-[clamp(0.7rem,1.2vw,1.2rem)] font-light gap-1">
                <div className="w-full flex flex-row justify-between border-[#888888aa] border-b-[0.3px] pb-1">
                    <p className="text-[#888888] pl-1">Category</p>
                    <p className="pr-1">{type}</p>
                </div>
                {genre && (
                    <div className="w-full flex flex-row justify-between border-[#888888aa] border-b-[0.3px] pb-1">
                        <p className="text-[#888888] pl-1">Genre</p>
                        <p className={`pr-1 transition-colors duration-500 ${
                            theme === "dark" ? "text-neutral-400" : "text-neutral-600"
                        }`}>{genre}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
