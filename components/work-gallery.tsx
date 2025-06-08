"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Sample work gallery data - replace with actual project images
const workGallery = [
  {
    id: 1,
    title: "Print Design - Magazine Layout",
    category: "Print Design",
    image: "/placeholder.svg?height=300&width=400&text=Magazine+Layout",
    color: "#A89A7D",
  },
  {
    id: 2,
    title: "Ad Campaign - Summer Collection",
    category: "Ad Design",
    image: "/placeholder.svg?height=300&width=400&text=Ad+Campaign",
    color: "#6B8E23",
  },
  {
    id: 3,
    title: "Brand Identity - Logo Design",
    category: "Branding",
    image: "/placeholder.svg?height=300&width=400&text=Brand+Identity",
    color: "#4682B4",
  },
  {
    id: 4,
    title: "Product Packaging - Eco Series",
    category: "Print Design",
    image: "/placeholder.svg?height=300&width=400&text=Product+Packaging",
    color: "#708090",
  },
  {
    id: 5,
    title: "Billboard Design - Urban Campaign",
    category: "Ad Design",
    image: "/placeholder.svg?height=300&width=400&text=Billboard+Design",
    color: "#8FBC8F",
  },
  {
    id: 6,
    title: "Annual Report - Corporate Design",
    category: "Print Design",
    image: "/placeholder.svg?height=300&width=400&text=Annual+Report",
    color: "#CD5C5C",
  },
  {
    id: 7,
    title: "Social Media Campaign - Holiday",
    category: "Ad Design",
    image: "/placeholder.svg?height=300&width=400&text=Social+Media",
    color: "#B8860B",
  },
  {
    id: 8,
    title: "Business Cards - Premium Collection",
    category: "Print Design",
    image: "/placeholder.svg?height=300&width=400&text=Business+Cards",
    color: "#9370DB",
  },
];

// Helper function to get category color
const getCategoryColor = (category: string): string => {
  const colorMap: Record<string, string> = {
    "Print Design": "border-[#A89A7D]",
    "Ad Design": "border-[#4682B4]",
    "Branding": "border-[#6B8E23]",
  };
  
  return colorMap[category] || "border-gray-400";
};

export function WorkGallery() {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  
  // Duplicate the gallery array to create the infinite scroll effect
  const duplicatedGallery = [...workGallery, ...workGallery];

  return (
    <div className="w-full overflow-hidden bg-[#F8F7F4] dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4 mb-10">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-3">
          Featured Work
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A showcase of my recent design projects across various categories
        </p>
      </div>
      
      <div 
        className="relative w-full overflow-hidden py-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          setHoveredItem(null);
        }}
      >
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[#F8F7F4] to-transparent z-10 dark:from-gray-900"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[#F8F7F4] to-transparent z-10 dark:from-gray-900"></div>
        
        <div 
          className={`flex items-center gap-12 px-8 ${isPaused ? "marquee-paused" : "animate-marquee"}`}
        >
          {duplicatedGallery.map((item, index) => (
            <div 
              key={`${item.id}-${index}`} 
              className={`flex-shrink-0 transition-all duration-300 ${hoveredItem === index ? 'scale-105 z-20' : ''}`}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link href="#portfolio" className="group">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <div className={`absolute bottom-0 left-0 w-full h-1 ${getCategoryColor(item.category)}`}></div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="w-[280px] h-[200px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
