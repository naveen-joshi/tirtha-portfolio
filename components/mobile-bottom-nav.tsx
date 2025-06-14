"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Briefcase } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  icon: ReactNode;
  action?: () => void;
}

export function MobileBottomNav() {
  const pathname = usePathname();

  // Navigation items
  const navItems: NavItem[] = [
    { name: "Home", href: "/", icon: <Home className="w-5 h-5" /> },
    { name: "About", href: "/about", icon: <User className="w-5 h-5" /> },
    { name: "Portfolio", href: "/portfolio", icon: <Briefcase className="w-5 h-5" /> },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-[#2A2A2A]/90 backdrop-blur-xl border-t border-gray-100/50 dark:border-[#3A3A3A] shadow-lg rounded-t-3xl">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => (
          <div key={item.name} className="flex-1">
            {item.action ? (
              <button
                onClick={item.action}
                className="w-full h-full flex flex-col items-center justify-center space-y-1 group"
              >
                <div className="p-1.5 rounded-full transition-all duration-300 transform group-hover:scale-110 text-[#8F8675] dark:text-[#D8CFBC]">
                  {item.icon}
                </div>
                <span className="text-xs font-medium transition-all duration-300 text-[#8F8675] dark:text-[#D8CFBC]">
                  {item.name}
                </span>
              </button>
            ) : (
              <Link
                href={item.href}
                className="w-full h-full flex flex-col items-center justify-center space-y-1 group relative"
              >
                {pathname === item.href && (
                  <span className="absolute -top-1.5 h-1 bg-[#A89A7D] dark:bg-[#D8CFBC] rounded-full tab-indicator"></span>
                )}
                <div className={`p-1.5 rounded-full transition-all duration-300 transform ${pathname === item.href ? 'scale-110' : 'group-hover:scale-110'} ${
                  pathname === item.href
                    ? "bg-[#E3DCD5]/50 dark:bg-[#3A3A3A] text-[#A89A7D] dark:text-[#D8CFBC]"
                    : "text-gray-500 dark:text-gray-400 group-hover:text-[#A89A7D] dark:group-hover:text-[#D8CFBC]"
                }`}>
                  {item.icon}
                </div>
                <span className={`text-xs font-medium transition-all duration-300 ${
                  pathname === item.href
                    ? "text-[#A89A7D] dark:text-[#D8CFBC]"
                    : "text-gray-500 dark:text-gray-400 group-hover:text-[#A89A7D] dark:group-hover:text-[#D8CFBC]"
                }`}>
                  {item.name}
                </span>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
