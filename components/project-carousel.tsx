"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const featuredProjects = [
  {
    id: 1,
    title: "TechFlow Brand Identity",
    category: "Branding",
    image: "/placeholder.svg?height=400&width=600",
    description: "Complete brand identity for a tech startup",
  },
  {
    id: 2,
    title: "EcoLife Mobile App",
    category: "UI/UX",
    image: "/placeholder.svg?height=400&width=600",
    description: "Sustainable living mobile application design",
  },
  {
    id: 3,
    title: "Artisan Coffee Logo",
    category: "Logo Design",
    image: "/placeholder.svg?height=400&width=600",
    description: "Handcrafted logo for local coffee roastery",
  },
]

export function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === featuredProjects.length - 1 ? 0 : prevIndex + 1))
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? featuredProjects.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === featuredProjects.length - 1 ? 0 : currentIndex + 1)
  }

  return (
    <div className="relative max-w-lg mx-auto">
      <Card className="border-0 shadow-2xl overflow-hidden bg-white/80 backdrop-blur-sm">
        <div className="relative">
          <Image
            src={featuredProjects[currentIndex].image || "/placeholder.svg"}
            alt={featuredProjects[currentIndex].title}
            width={600}
            height={400}
            className="w-full h-80 object-cover"
          />

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
            onClick={goToPrevious}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
            onClick={goToNext}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="text-sm opacity-80 mb-1">{featuredProjects[currentIndex].category}</div>
            <h3 className="text-xl font-semibold mb-2">{featuredProjects[currentIndex].title}</h3>
            <p className="text-sm opacity-90 mb-4">{featuredProjects[currentIndex].description}</p>
            <Link href={`/portfolio/${featuredProjects[currentIndex].id}`}>
              <Button size="sm" variant="secondary" className="rounded-full">
                View Project
              </Button>
            </Link>
          </div>
        </div>
      </Card>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-6">
        {featuredProjects.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-blue-600 w-8" : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
