"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-xl border-b border-gray-100/50 dark:border-gray-800/50"
          : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
      }`}
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-[#E3DCD5]/5 opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
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
              <span className="text-xs text-gray-500 -mt-1">
                Creative Designer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full group ${
                  pathname === item.href
                    ? "text-[#A89A7D] dark:text-[#BFB399]"
                    : isScrolled
                    ? "text-gray-700 dark:text-gray-300 hover:text-[#A89A7D] dark:hover:text-[#BFB399]"
                    : "text-gray-800 dark:text-gray-200 hover:text-[#A89A7D] dark:hover:text-[#BFB399]"
                }`}
              >
                {pathname === item.href && (
                  <div className="absolute inset-0 bg-[#E3DCD5] rounded-full -z-10"></div>
                )}
                <div className="absolute inset-0 bg-[#E3DCD5]/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                {item.name}
              </Link>
            ))}

            <div className="ml-4 flex items-center space-x-3">
              <ThemeToggle />
              <div className="w-px h-6 bg-gray-300 dark:bg-gray-700"></div>
              <Link href="/#contact">
                <Button className="bg-[#A89A7D] hover:bg-[#BFB399] text-white rounded-full px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <span className="relative flex items-center">Let's Talk</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <Button
            ref={buttonRef}
            variant="ghost"
            size="sm"
            className="md:hidden relative p-2 rounded-xl hover:bg-[#E3DCD5]/50 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative">
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 transition-transform duration-300" />
              )}
            </div>
          </Button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <div ref={menuRef} className="md:hidden absolute top-20 left-4 right-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl border border-[#E3DCD5]/50 dark:border-[#857F75]/30 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[#E3DCD5]/30 dark:bg-[#857F75]/10"></div>
            <div className="relative px-6 py-8 space-y-6">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block text-lg font-medium transition-all duration-300 hover:text-[#A89A7D] dark:hover:text-[#BFB399] hover:translate-x-2 ${
                    pathname === item.href ? "text-[#A89A7D] dark:text-[#BFB399]" : "text-gray-700 dark:text-gray-200"
                  }`}
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        pathname === item.href ? "bg-[#A89A7D] dark:bg-[#BFB399]" : "bg-[#E3DCD5] dark:bg-[#857F75]/50"
                      }`}
                    ></div>
                    <span>{item.name}</span>
                  </div>
                </Link>
              ))}
              <div className="pt-4 border-t border-[#E3DCD5] dark:border-[#857F75]/30">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Theme
                  </span>
                  <ThemeToggle />
                </div>
                <Link href="/#contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-[#A89A7D] hover:bg-[#8F8675] dark:bg-[#857F75] dark:hover:bg-[#A89A7D] text-white rounded-xl py-3 shadow-lg transition-colors duration-300">
                    Let's Talk
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
