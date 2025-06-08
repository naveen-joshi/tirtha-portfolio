"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-xl border-b border-gray-100/50 dark:border-gray-800/50"
          : "bg-gradient-to-r from-white/80 via-white/60 to-white/80 dark:from-gray-900/80 dark:via-gray-900/60 dark:to-gray-900/80 backdrop-blur-md"
      }`}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <Link href="/" className="group flex items-center space-x-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
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
                    ? "text-blue-600"
                    : isScrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-gray-800 hover:text-blue-600"
                }`}
              >
                {pathname === item.href && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full -z-10"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                {item.name}
              </Link>
            ))}

            <div className="ml-4 flex items-center space-x-3">
              <ThemeToggle />
              <div className="w-px h-6 bg-gradient-to-b from-transparent via-gray-300 to-transparent dark:via-gray-700"></div>
              <Link href="/#contact">
                <Button className="relative overflow-hidden text-white rounded-full px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <span className="relative">Let's Talk</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden relative p-2 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
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
          <div className="md:hidden absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-xl shadow-2xl border border-gray-100/50 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
            <div className="relative px-6 py-8 space-y-6">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block text-lg font-medium transition-all duration-300 hover:text-blue-600 hover:translate-x-2 ${
                    pathname === item.href ? "text-blue-600" : "text-gray-700"
                  }`}
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        pathname === item.href ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    ></div>
                    <span>{item.name}</span>
                  </div>
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Theme
                  </span>
                  <ThemeToggle />
                </div>
                <Link href="/#contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white rounded-xl py-3 shadow-lg">
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
