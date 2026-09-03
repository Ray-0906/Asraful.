"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "../components/projects";
import Media from "../components/media";
import { useCursorStore } from "../store/useCursorStore";
import { useThemeStore } from "../store/useThemeStore";

type Props = {
    id: string;
}

export default function WorkDetail({ id }: Props) {
    const set = useCursorStore((state) => state.setCursorType);
    const { theme } = useThemeStore();

    const data = projects.find((p) => p.id === id);
    const nextData = projects.find((p) => p.id === data?.next);

    if (!data) {
        return null;
    }

    return (
        <motion.main
            className="relative w-screen min-h-screen flex flex-col pt-[30vh] sm:landscape:pt-[50vh] md:landscape:pt-[50vh] lg:pt-[40vh] pl-[10vw] pr-[10vw] lg:pl-[15vw] lg:pr-[5vw]"
            exit={{ opacity: 0, filter: "blur(1px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <Link href="/works">
                <motion.div
                    className="sm:landscape:hidden md:landscape:hidden lg:landscape:flex fixed top-[10vh] left-[5vw] lg:top-[5vh] lg:left-[15vw] text-[clamp(0.6rem,1vw,1.5rem)] md:text-[clamp(1rem,1.5vw,1.5rem)] font-light flex flex-row items-center gap-1 z-10"
                    initial={{ opacity: 0, filter: "blur(1px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    onMouseEnter={() => set("hover")}
                    onMouseLeave={() => set("default")}
                >
                    <span>
                        <svg width="clamp(0.6rem,1vw,1.5rem)" height="clamp(0.6rem,1vw,1.5rem)" viewBox="0 0 37 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.646447" y1="36.0018" x2="36.0018" y2="0.646455" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4" />
                            <line x1="0.353553" y1="35.6464" x2="35.7089" y2="71.0018" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4" />
                        </svg>
                    </span>
                    <span>BACK</span>
                </motion.div>
            </Link>

            <motion.div
                className="lg:hidden landscape:hidden fixed top-[10vh] right-[5vw] text-[clamp(0.6rem,1vw,1.5rem)] md:text-[clamp(1rem,1.5vw,1.5rem)] font-light flex flex-col items-end justify-start gap-1 z-10"
                initial={{ opacity: 0, filter: "blur(1px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                onMouseEnter={() => set("hover")}
                onMouseLeave={() => set("default")}
            >
                {data?.youtube && (
                    <a
                        href={data.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1"
                        onMouseEnter={() => set("hover")}
                        onMouseLeave={() => set("default")}
                    >
                        YouTube
                        <span>
                            <svg width="clamp(0.6rem,1vw,1.5rem)" height="clamp(0.6rem,1vw,1.5rem)" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.353478" y1="71.3571" x2="71.0642" y2="0.646433" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4"/>
                                <line x1="21.707" y1="0.5" x2="71.707" y2="0.5" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4"/>
                                <line x1="71.207" y1="50" x2="71.207" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4"/>
                            </svg>
                        </span>
                    </a>
                )}

                {data?.github && (
                    <a
                        href={data.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1"
                        onMouseEnter={() => set("hover")}
                        onMouseLeave={() => set("default")}
                    >
                        GitHub
                        <span>
                            <svg width="clamp(0.6rem,1vw,1.5rem)" height="clamp(0.6rem,1vw,1.5rem)" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.353478" y1="71.3571" x2="71.0642" y2="0.646433" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4"/>
                                <line x1="21.707" y1="0.5" x2="71.707" y2="0.5" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4"/>
                                <line x1="71.207" y1="50" x2="71.207" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4"/>
                            </svg>
                        </span>
                    </a>
                )}

                {data?.demo && (
                    <a
                        href={data.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1"
                        onMouseEnter={() => set("hover")}
                        onMouseLeave={() => set("default")}
                    >
                        Demo
                        <span>
                            <svg width="clamp(0.6rem,1vw,1.5rem)" height="clamp(0.6rem,1vw,1.5rem)" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.353478" y1="71.3571" x2="71.0642" y2="0.646433" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4"/>
                                <line x1="21.707" y1="0.5" x2="71.707" y2="0.5" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4"/>
                                <line x1="71.207" y1="50" x2="71.207" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4"/>
                            </svg>
                        </span>
                    </a>
                )}
            </motion.div>

            <motion.div
                className="fixed top-[5vh] left-[10vw] landscape:top-[10vh] lg:top-[15vh] lg:left-[15vw] w-[80vw] flex flex-col"
                initial={{ opacity: 0, filter: "blur(1px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <div className="flex flex-row items-end justify-between">
                    <div className="h-[15vh] flex items-end text-[clamp(1rem,1.5vw,2rem)] md:text-[clamp(1.5rem,2.5vw,2.5rem)] font-light">
                        <h1>{data?.title}</h1>
                    </div>
                    
                    <div
                        className={`hidden lg:flex lg:flex-row lg:items-end lg:gap-[1rem] lg:text-[clamp(1rem,1.5vw,1.5rem)] lg:font-light lg:mb-[clamp(0.2rem,1.2vh,0.8rem)]
                            landscape:flex landscape:flex-row landscape:items-end landscape:gap-[1rem] landscape:text-[clamp(0.8rem,1.2vw,1.2rem)] landscape:font-light
                        `}>
                        {data?.youtube && (
                            <a
                                href={data.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1"
                                onMouseEnter={() => set("hover")}
                                onMouseLeave={() => set("default")}
                            >
                                YouTube
                                <span>
                                    <svg width="clamp(0.6rem,1vw,1.5rem)" height="clamp(0.6rem,1vw,1.5rem)" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="0.353478" y1="71.3571" x2="71.0642" y2="0.646433" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4"/>
                                        <line x1="21.707" y1="0.5" x2="71.707" y2="0.5" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4"/>
                                        <line x1="71.207" y1="50" x2="71.207" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4"/>
                                    </svg>
                                </span>
                            </a>
                        )}

                        {data?.github && (
                            <a
                                href={data.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1"
                                onMouseEnter={() => set("hover")}
                                onMouseLeave={() => set("default")}
                            >
                                GitHub
                                <span>
                                    <svg width="clamp(0.6rem,1vw,1.5rem)" height="clamp(0.6rem,1vw,1.5rem)" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="0.353478" y1="71.3571" x2="71.0642" y2="0.646433" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4"/>
                                        <line x1="21.707" y1="0.5" x2="71.707" y2="0.5" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4"/>
                                        <line x1="71.207" y1="50" x2="71.207" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4"/>
                                    </svg>
                                </span>
                            </a>
                        )}

                        {data?.demo && (
                            <a
                                href={data.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1"
                                onMouseEnter={() => set("hover")}
                                onMouseLeave={() => set("default")}
                            >
                                Demo
                                <span>
                                    <svg width="clamp(0.6rem,1vw,1.5rem)" height="clamp(0.6rem,1vw,1.5rem)" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="0.353478" y1="71.3571" x2="71.0642" y2="0.646433" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4"/>
                                        <line x1="21.707" y1="0.5" x2="71.707" y2="0.5" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4"/>
                                        <line x1="71.207" y1="50" x2="71.207" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4"/>
                                    </svg>
                                </span>
                            </a>
                        )}
                    </div>
                </div>

                <div className="w-[80vw] h-[1px] bg-[#888888aa]" />
            </motion.div>

            <motion.div
                className="flex flex-col min-h-[120vh] w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <div className="w-full flex flex-col items-center justify-start gap-[10vh] lg:gap-[15vh] md:pb-[20vh] lg:pb-[25vh]">
                    {/* Primary slot: Image 1 or YouTube or Hero Card */}
                    <div className="relative w-[70vw] md:w-[50vw] max-w-4xl aspect-video flex items-center justify-center overflow-hidden border border-white/10 shadow-2xl">
                        <img
                            loading="eager"
                            alt="Background"
                            src={data?.bg1 || "/black_bg.webp"}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {data?.image1 ? (
                            <Media
                                src={data.image1}
                                alt={data.title}
                                className="z-10 w-full h-full object-contain p-[clamp(0.5rem,2vw,1.5rem)] md:p-10"
                                loading="eager"
                            />
                        ) : data?.youtube ? (
                            <Media
                                src={data.youtube}
                                alt={data.title}
                                className="z-10 w-full h-full object-cover"
                                loading="eager"
                            />
                        ) : (
                            <div className="z-10 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm bg-black/40 w-full h-full">
                                <span className="text-[clamp(1.2rem,2.5vw,2.5rem)] font-extralight tracking-widest uppercase">
                                    {data?.title}
                                </span>
                                <span className="text-[clamp(0.7rem,1.2vw,1.1rem)] font-light text-neutral-400 mt-2">
                                    {data?.subtitle}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Dedicated YouTube Player slot if project has both image1 and youtube */}
                    {data?.youtube && data?.image1 && (
                        <div className="relative w-[70vw] md:w-[50vw] max-w-4xl aspect-video flex items-center justify-center overflow-hidden border border-white/10 shadow-2xl bg-black">
                            <Media
                                src={data.youtube}
                                alt={`${data.title} Video Demo`}
                                className="w-full h-full object-cover"
                                loading="eager"
                            />
                        </div>
                    )}

                    {/* Slot 2: Image 2 if available */}
                    {data?.image2 && (
                        <div className="relative w-[70vw] md:w-[50vw] max-w-4xl aspect-video flex items-center justify-center overflow-hidden border border-white/10 shadow-2xl bg-[#151515]">
                            {data?.bg2 && (
                                <img
                                    loading="eager"
                                    alt="Background"
                                    src={data.bg2}
                                    className="absolute inset-0 w-full h-full object-contain"
                                />
                            )}
                            <Media
                                src={data.image2}
                                alt={data.title}
                                className="z-10 w-full h-full object-cover p-[clamp(0.5rem,2vw,1.5rem)] md:p-10"
                                loading="eager"
                            />
                        </div>
                    )}

                    {/* Slot 3: Image 3 if available */}
                    {data?.image3 && (
                        <div className="relative w-[70vw] md:w-[50vw] max-w-4xl aspect-video flex items-center justify-center overflow-hidden border border-white/10 shadow-2xl">
                            {data?.bg3 && (
                                <img
                                    alt="Background"
                                    src={data.bg3}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            )}
                            <Media
                                src={data.image3}
                                alt={data.title}
                                className="z-10 w-full h-full object-contain p-[clamp(0.5rem,2vw,1.5rem)] md:p-10"
                                loading="lazy"
                            />
                        </div>
                    )}

                    {/* Slot 4: Image 4 if available */}
                    {data?.image4 && (
                        <div className="relative w-[70vw] md:w-[50vw] max-w-4xl aspect-video flex items-center justify-center overflow-hidden border border-white/10 shadow-2xl bg-[#151515]">
                            {data?.bg4 && (
                                <img
                                    loading="lazy"
                                    alt="Background"
                                    src={data.bg4}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            )}
                            <Media
                                src={data.image4}
                                alt={data.title}
                                className="z-10 w-full h-full object-contain p-[clamp(0.5rem,2vw,1.5rem)] md:p-10"
                                loading="lazy"
                            />
                        </div>
                    )}
                </div>

                <motion.div
                    className="h-[65vh] md:h-[60vh] flex flex-col landscape:flex-row md:flex-row items-start justify-between font-light mt-auto mb-[10vh] landscape:mb-[7.5vh] lg:mb-8 sm:landscape:gap-[3vw]"
                    initial={{ opacity: 0, filter: "blur(1px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <div className="w-[80vw] md:w-[40vw] lg:w-[35vw] flex flex-col gap-5 md:gap-8">
                        <div className="flex flex-col items-start justify-between gap-2">
                            <h2 className="text-[clamp(1rem,1.5vw,2rem)] md:text-[clamp(1.1rem,2vw,2rem)]">TOOLS</h2>
                            <div className="w-full text-[clamp(0.7rem,1vw,1rem)] landscape:text-[clamp(0.6rem,0.8vw,0.8rem)] lg:portrait:text-[clamp(0.7rem,1vw,1rem)] lg:landscape:text-[clamp(0.7rem,1vw,1rem)] flex flex-wrap gap-1 md:gap-2">
                                {data?.techs.map((val, i) => (
                                    <p key={i} className={`w-fit h-fit p-[0.15rem] px-[0.8rem] md:p-1 md:px-5 m-1 border border-[#888888aa] rounded-full duration-500 ${theme === "dark" ? "hover:bg-white hover:text-[#101010]" : "hover:bg-black hover:text-[#ffffffcc]"}`}>{val}</p>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-row items-start justify-between">
                            <div className="flex flex-col items-start justify-between gap-2">
                                <h2 className="text-[clamp(1rem,1.5vw,2rem)] md:text-[clamp(1.1rem,2vw,2rem)]">DURATION</h2>
                                <p className="text-[clamp(0.8rem,1.5vw,1rem)] landscape:text-[clamp(0.7rem,1vw,1.2rem)] lg:portrait:text-[clamp(1rem,1.2vw,1.5rem)] lg:landscape:text-[clamp(1rem,1.2vw,1.5rem)]">{data?.duration}</p>
                            </div>

                            <div className="flex flex-col items-start justify-between gap-2">
                                <h2 className="text-[clamp(1rem,1.5vw,2rem)] md:text-[clamp(1.1rem,2vw,2rem)]">ROLES</h2>
                                <p className="text-[clamp(0.8rem,1.5vw,1rem)] landscape:text-[clamp(0.7rem,1vw,1.2rem)] lg:portrait:text-[clamp(1rem,1.2vw,1.5rem)] lg:landscape:text-[clamp(1rem,1.2vw,1.5rem)]">{data?.roles}</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[80vw] md:w-[35vw] h-full flex flex-col items-start justify-between gap-2 mt-8 md:mt-0">
                        <h2 className="text-[clamp(1rem,1.5vw,2rem)] md:text-[clamp(1.1rem,2vw,2rem)]">SUMMARY</h2>
                        <p className="text-[clamp(0.8rem,1.5vw,1rem)] lg:text-[clamp(1rem,1.2vw,1.5rem)]">{data?.summary}</p>

                        <Link
                            key={nextData?.id}
                            href={`/works/${nextData?.id}`}
                            onMouseEnter={() => set("hover")}
                            onMouseLeave={() => set("default")}
                            className="flex flex-row items-center justify-end text-[clamp(0.8rem,1vw,1.2rem)] md:text-[clamp(1.1rem,2vw,2rem)] font-light mt-auto ml-auto gap-2"
                        >
                            <span>{nextData?.title}</span>
                            <span>
                                <svg width="clamp(1.2rem,2vw,2rem)" height="clamp(1.2rem,2vw,2rem)" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.204656" y1="50.2071" x2="100.205" y2="50.2071" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4"/>
                                    <line x1="65.4073" y1="15.2028" x2="100.763" y2="50.5581" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4"/>
                                    <line x1="65.4073" y1="85.2064" x2="100.763" y2="49.851" stroke={`${theme === "dark" ? "white" : "#101010cc"}`} strokeWidth="4"/>
                                </svg>
                            </span>
                        </Link>
                    </div>
                </motion.div>
            </motion.div>
        </motion.main>
    )
}
