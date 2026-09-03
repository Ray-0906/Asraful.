"use client";

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react";
import { useCursorStore } from "../store/useCursorStore"

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
    const { socials, personal } = portfolioData;
    const githubHandle = socials.github ? `@${socials.github.split("/").pop()}` : "@Gallery";

    const containerRef = useRef(null);
    
    const { scrollYProgress } = useScroll();

    const yLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);  // faster

    return (
        <motion.main
            className="relative w-screen flex flex-col items-center pt-[5vh] pb-[10vh] lg:pt-[15vh] lg:pb-[25vh] lg:pl-[10vw]"
            initial={{ opacity: 0, filter: "blur(1px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(1px)", transition: { duration: 0.8, ease: "easeOut" } }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
            <div className="w-[80vw] lg:w-[70vw] h-[15vh] sm:landscape:h-[30vh] md:landscape:h-[30vh] lg:landscape:h-[15vh] flex flex-row items-end justify-between">
                <h1 className="text-[clamp(1rem,1.5vw,2rem)] font-light mb-1">Albums</h1>
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

            <div
                ref={containerRef}
                className="hidden md:flex md:flex-row md:pt-[clamp(1rem,7.5vh,3rem)] md:gap-[10vw]"
            >
                <motion.div
                    style={{ y: yLeft }}
                    className="w-[30vw] flex flex-col gap-[10vh]"
                >
                    <Album url="https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/48/53/43/485343e3-dd6a-0034-faec-f4b6403f8108/13UMGIM63890.rgb.jpg/592x592bb.webp" title="Abbey Road" artist="The Beatles" load="eager" />
                    <Album url="https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/82/90/14/829014ad-a301-62ab-bee6-f4cca4457411/mzi.hozudery.jpg/592x592bb.webp" title="Favourite Worst Nightmare" artist="Arctic Monkeys" load={undefined} />
                    <Album url="https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/fd/63/ed/fd63ed6c-178c-7fa9-4844-29a7326bf655/06UMGIM01277.rgb.jpg/592x592bf.webp" title="2001" artist="Dr. Dre" load="eager" />
                    <Album url="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/92/b9/62/92b9624d-e9fb-0e4f-f14b-6f1f96c0a3e0/21UM1IM54414.rgb.jpg/592x592bb.webp" title="2014 Forest Hills Drive" artist="J. Cole" load="eager" />
                    <Album url="https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/31/18/fa/3118fab0-90ea-2ae5-cf6c-bc64054ab9e3/21UMGIM21449.rgb.jpg/592x592bb.webp" title="House of Balloons" artist="The Weeknd" load={undefined} />
                </motion.div>

                <div className="w-[30vw] flex flex-col gap-[10vh]">
                    <Album url="https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/7a/4d/aa/7a4daafd-3bf6-1979-1f26-1f07a2b310d6/Jobf0160262-3972-4fdc-986d-2ecfae5b177b-203302941-PreviewImage_Preview_Image_Intermediate_nonvideo_sdr_397528956_2341308086-Time1758049628425.png/592x592bb.webp" title="Wish You Were Here" artist="Pink Floyd" load="lazy" />
                    <Album url="https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/0d/ae/61/0dae6140-d4af-d0df-eae0-3c92eb392a33/15UMGIM11922.rgb.jpg/592x592bb.webp" title="To Pimp A Butterfly" artist="Kendrick Lamar" load={undefined} />
                    <Album url="https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b4/13/e9/b413e91d-40aa-a1a8-b8e3-2bacc3b3e222/00606949329020.rgb.jpg/592x592bf.webp" title="The Eminem Show" artist="Eminem" load="lazy" />
                    <Album url="https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/39/25/2d/39252d65-2d50-b991-0962-f7a98a761271/00602517483507.rgb.jpg/592x592bb.webp" title="Graduation" artist="Kanye West" load={undefined} />
                </div>
            </div>

            <div className="md:hidden w-[70vw] flex flex-col pt-[5vh] gap-[10vh]">
                <Album url="https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/48/53/43/485343e3-dd6a-0034-faec-f4b6403f8108/13UMGIM63890.rgb.jpg/592x592bb.webp" title="Abbey Road" artist="The Beatles" load="eager" />
                <Album url="https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/7a/4d/aa/7a4daafd-3bf6-1979-1f26-1f07a2b310d6/Jobf0160262-3972-4fdc-986d-2ecfae5b177b-203302941-PreviewImage_Preview_Image_Intermediate_nonvideo_sdr_397528956_2341308086-Time1758049628425.png/592x592bb.webp" title="Wish You Were Here" artist="Pink Floyd" load="eager" />
                <Album url="https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/82/90/14/829014ad-a301-62ab-bee6-f4cca4457411/mzi.hozudery.jpg/592x592bb.webp" title="Favourite Worst Nightmare" artist="Arctic Monkeys" load="eager" />
                <Album url="https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/0d/ae/61/0dae6140-d4af-d0df-eae0-3c92eb392a33/15UMGIM11922.rgb.jpg/592x592bb.webp" title="To Pimp A Butterfly" artist="Kendrick Lamar" load={undefined} />
                <Album url="https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/fd/63/ed/fd63ed6c-178c-7fa9-4844-29a7326bf655/06UMGIM01277.rgb.jpg/592x592bf.webp" title="2001" artist="Dr. Dre" load={undefined} />
                <Album url="https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b4/13/e9/b413e91d-40aa-a1a8-b8e3-2bacc3b3e222/00606949329020.rgb.jpg/592x592bf.webp" title="The Eminem Show" artist="Eminem" load={undefined} />
                <Album url="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/92/b9/62/92b9624d-e9fb-0e4f-f14b-6f1f96c0a3e0/21UM1IM54414.rgb.jpg/592x592bb.webp" title="2014 Forest Hills Drive" artist="J. Cole" load={undefined} />
                <Album url="https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/39/25/2d/39252d65-2d50-b991-0962-f7a98a761271/00602517483507.rgb.jpg/592x592bb.webp" title="Graduation" artist="Kanye West" load={undefined} />
                <Album url="https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/31/18/fa/3118fab0-90ea-2ae5-cf6c-bc64054ab9e3/21UMGIM21449.rgb.jpg/592x592bb.webp" title="House of Balloons" artist="The Weeknd" load={undefined} />
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

type Props = {
    url: string,
    title: string,
    artist: string,
    load: "eager" | "lazy" | undefined,
}

function Album({ url, title, artist, load }: Props) {
    return (
        <div className="w-full md:w-[30vw] flex flex-col items-start justify-start">
            <img src={url} alt={title} className="w-full object-contain opacity-[90%]" loading={load} decoding="async" />
            <h2 className="mt-2 pl-1 text-[clamp(1rem,1.5vw,1.5rem)] font-light w-full mb-1 border-[#888888aa] border-b-[0.3px]">{title}</h2>
            <div className="w-full flex flex-col items-start justify-start text-[clamp(0.7rem,1.2vw,1.2rem)] font-light">
                <div className="w-full flex flex-row justify-between border-[#888888aa] border-b-[0.3px]">
                    <p className="mb-1 text-[#888888] pl-1">Artist</p>
                    <p className="mb-1 pr-1">{artist}</p>
                </div>
            </div>
        </div>
    )
}
