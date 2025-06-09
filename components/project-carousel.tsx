"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featuredProjects = [
  {
    id: 'the-oven-story',
    title: "The Oven Story",
    category: "Branding",
    image: "/the-oven-story/img1.jpg",
    description: "Brand identity for a bakery cum dessert boutique",
  },
  {
    id: 'railwire',
    title: "Railwire",
    category: "Promotional Campaign",
    image: "/railwire/img2.png",
    description: "Comprehensive campaign for internet service provider",
  },
  {
    id: 'byd',
    title: "BYD",
    category: "Logo Design",
    image: "/byd/img5.jpeg",
    description: "Modern logo redesign for automotive company",
  },
];

export function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === featuredProjects.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? featuredProjects.length - 1 : currentIndex - 1
    );
    console.log(
      "Previous clicked, new index:",
      currentIndex === 0 ? featuredProjects.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === featuredProjects.length - 1 ? 0 : currentIndex + 1
    );
    console.log(
      "Next clicked, new index:",
      currentIndex === featuredProjects.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="relative w-full mx-auto">
      <Card className="border-0 shadow-2xl overflow-hidden bg-[#1A1A1A] w-full">
        <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center bg-[#1A1A1A]">
          <Image
            src={featuredProjects[currentIndex].image || "/placeholder.svg"}
            alt={featuredProjects[currentIndex].title}
            width={600}
            height={400}
            className="w-full h-full object-cover"
            style={{ maxHeight: '100%' }}
            priority
          />

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="lg"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#E3DCD5] hover:bg-[#A89A7D]/80 text-[#A89A7D] rounded-full p-3 shadow-lg z-20"
            onClick={goToPrevious}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="lg"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#E3DCD5] hover:bg-[#A89A7D]/80 text-[#A89A7D] rounded-full p-3 shadow-lg z-20"
            onClick={goToNext}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Enhanced Gradient Overlay - bottom 20% only */}
          {/* <div className="absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" /> */}

          {/* Content with improved visibility */}
          <div className="absolute bottom-0 left-0 right-0 text-white z-10">
            <div className="flex items-center justify-between w-full px-4 py-2 bg-[#857F75]/40 border-t border-[#E3DCD5]/20">
              <div>
                <div className="inline-block px-2 py-0.5 rounded-full bg-[#A89A7D] text-white text-xs font-medium mb-1">
                  {featuredProjects[currentIndex].category}
                </div>
                <h3 className="text-xl font-semibold text-white drop-shadow-md">
                  {featuredProjects[currentIndex].title}
                </h3>
              </div>
              <Link href={`/portfolio/${featuredProjects[currentIndex].id}`}>
                <Button size="sm" className="rounded-full bg-[#A89A7D] hover:bg-[#8F8675] text-white border-0">
                  View
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Card>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-6 mb-2">
        {featuredProjects.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-[#A89A7D] w-8"
                : "bg-gray-300 hover:bg-[#BFB399]"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
