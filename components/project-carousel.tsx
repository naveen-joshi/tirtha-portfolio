"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featuredProjects = [
  {
    id: 1,
    title: "TechFlow Brand Identity",
    category: "Branding",
    image: "/img1.jpg",
    description: "Complete brand identity for a tech startup",
  },
  {
    id: 2,
    title: "EcoLife Mobile App",
    category: "Print Design",
    image: "/img2.jpg",
    description: "Sustainable living mobile application design",
  },
  {
    id: 3,
    title: "Artisan Coffee Logo",
    category: "Logo Design",
    image: "/img3.jpg",
    description: "Handcrafted logo for local coffee roastery",
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

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white z-10">
            <div className="text-sm opacity-80 mb-1">
              {featuredProjects[currentIndex].category}
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {featuredProjects[currentIndex].title}
            </h3>
            <p className="text-sm opacity-90 mb-4">
              {featuredProjects[currentIndex].description}
            </p>
            <Link href={`/portfolio/${featuredProjects[currentIndex].id}`}>
              <Button size="sm" variant="secondary" className="rounded-full">
                View Project
              </Button>
            </Link>
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
