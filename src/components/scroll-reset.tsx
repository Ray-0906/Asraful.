"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReset() {
    const pathname = usePathname();

    useEffect(() => {
        const timer = setTimeout(() => {
            window.scrollTo(0, 0);
            window.dispatchEvent(new Event('resize'));
        }, 800);
      
        return () => clearTimeout(timer);
    }, [pathname]);

    return null;
}
