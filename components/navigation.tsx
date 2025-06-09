"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileTopNav } from "@/components/mobile-top-nav";
import { MobileBottomNav } from "@/components/mobile-bottom-nav";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 dark:bg-[#2A2A2A]/90 backdrop-blur-xl shadow-xl border-b border-gray-100/50 dark:border-[#3A3A3A]"
            : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
        }`}
      >
        {/* Background accent */}
        <div className="absolute inset-0 bg-[#E3DCD5]/5 opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="group flex items-center space-x-2">
              <div className="relative">
                <div className="absolute inset-0 bg-[#A89A7D] rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-[#A89A7D] p-2 rounded-xl">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-[#A89A7D] bg-clip-text text-transparent">
                  Tirtha
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
                  Creative Designer
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full group ${
                    pathname === item.href
                      ? "text-[#A89A7D] dark:text-[#D8CFBC]"
                      : isScrolled
                      ? "text-gray-700 dark:text-[#E3DCD5]/80 hover:text-[#A89A7D] dark:hover:text-[#D8CFBC]"
                      : "text-gray-800 dark:text-[#E3DCD5] hover:text-[#A89A7D] dark:hover:text-[#D8CFBC]"
                  }`}
                >
                  {pathname === item.href && (
                    <div className="absolute inset-0 bg-[#E3DCD5] dark:bg-[#3A3A3A] rounded-full -z-10"></div>
                  )}
                  <div className="absolute inset-0 bg-[#E3DCD5]/50 dark:bg-[#3A3A3A]/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  {item.name}
                </Link>
              ))}

              <div className="ml-4 flex items-center space-x-3">
                <ThemeToggle />
                <div className="w-px h-6 bg-gray-300 dark:bg-[#3A3A3A]"></div>
                <Link href="/#contact">
                  <Button className="bg-[#A89A7D] hover:bg-[#BFB399] dark:bg-[#857F75] dark:hover:bg-[#A89A7D] text-white rounded-full px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300">
                    <span className="relative flex items-center">Let's Talk</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Top Navigation */}
      <MobileTopNav />
      
      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />
    </>
  );
}
