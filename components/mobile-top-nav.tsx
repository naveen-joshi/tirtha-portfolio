"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function MobileTopNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 dark:bg-[#2A2A2A]/90 backdrop-blur-xl shadow-md border-b border-gray-100/50 dark:border-[#3A3A3A]"
          : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative">
              <div className="relative bg-[#A89A7D] p-1.5 rounded-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-[#A89A7D] bg-clip-text text-transparent">
                Tirtha
              </span>
              <span className="text-[10px] text-gray-500 dark:text-gray-400 -mt-1">
                Creative Designer
              </span>
            </div>
          </Link>

          {/* Let's Talk Button */}
          <Link href="/#contact">
            <Button className="bg-[#A89A7D] hover:bg-[#BFB399] dark:bg-[#857F75] dark:hover:bg-[#A89A7D] text-white rounded-full px-4 py-1 text-sm shadow-md transition-colors duration-300">
              Let's Talk
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
