"use client";

import { usePathname } from "next/navigation";
import { PageTransition } from "@/components/page-transition";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <PageTransition>
        {children}
      </PageTransition>
    </div>
  );
}
