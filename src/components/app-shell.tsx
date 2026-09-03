"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Cursor from "./cursor";
import MouseEffectScene from "../shaders/mouse-effect-scene";
import Navigation from "./navigation/navigation";
import ScrollReset from "./scroll-reset";
import { useCursorStore } from "../store/useCursorStore";
import { useThemeStore } from "../store/useThemeStore";
import ToggleButton from "./toggle-button";
import { useLenis } from "../hooks/lenis";
import { portfolioData } from "../data/portfolio";

type Props = {
  children: React.ReactNode;
};

export default function AppShell({ children }: Props) {
  const pathname = usePathname();
  const { theme } = useThemeStore();
  const set = useCursorStore((state) => state.setCursorType);

  useLenis();

  return (
    <div
      className={`relative w-full min-h-screen select-none transition-colors duration-700
      ${theme === "dark" ? "text-[#ffffffdc]" : "text-[#101010]"}`}
    >
      <div className="hidden [@media(pointer:fine)]:block fixed inset-0 -z-50 bg-black w-screen h-screen">
        <MouseEffectScene />
      </div>

      <div
        className={`fixed inset-0 -z-10 transition-colors duration-700
        ${theme === "dark" ? "bg-[#ffffff15]" : "bg-[#ffffffdd] mix-blend-difference"}`}
      />
      <div
        className={
          theme === "light" ? "fixed inset-0 -z-10 bg-[#ffffffa0] duration-700" : "hidden"
        }
      />

      <ScrollReset />
      <div className="hidden [@media(pointer:fine)]:block">
        <Cursor />
      </div>

      <header>
        <div className="fixed top-0 left-0 lg:top-[12vh] lg:left-[3vw] z-50">
          <Navigation />
        </div>

        <div className="fixed top-[clamp(3.5rem,7vh,10rem)] left-1/2 -translate-x-1/2 landscape:top-[clamp(0.8rem,4vh,1rem)] lg:top-[5vh] lg:right-[3vw] lg:left-auto lg:translate-x-0 z-50">
          <ToggleButton />
        </div>
      </header>

      <div className="relative">
        <AnimatePresence mode="wait" onExitComplete={() => set("default")}>
          <motion.div key={pathname}>{children}</motion.div>
        </AnimatePresence>
      </div>

      <footer className="fixed bottom-[0.2rem] md:bottom-[0.8rem] left-[3vw] h-[1rem] text-[clamp(0.5rem,0.8vw,1rem)] font-light">
        <p>Ⓒ {portfolioData.personal.fullName}</p>
      </footer>
    </div>
  );
}
