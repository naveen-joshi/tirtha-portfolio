"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    setIsAnimating(true);
    
    // Short timeout to ensure animation plays
    const timeout = setTimeout(() => {
      setDisplayChildren(children);
      setIsAnimating(false);
    }, 50);
    
    return () => clearTimeout(timeout);
  }, [pathname, children]);

  return (
    <div className={`min-h-screen transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100 page-transition-enter'}`}>
      {displayChildren}
    </div>
  );
}
