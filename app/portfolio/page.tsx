"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"

const categories = ["All", "Logo Design", "Branding", "Print Design", "Ad Design", "UI/UX Design"]

const projects = [
  {
    id: 1,
    title: "TechFlow Brand Identity",
    category: "Branding",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Complete brand identity design for a tech startup including logo, color palette, and brand guidelines.",
    tags: ["Branding", "Logo Design", "Guidelines"],
    year: "2023",
    client: "TechFlow Inc.",
  },
  {
    id: 2,
    title: "EcoLife Mobile App",
    category: "UI/UX Design",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "User interface design for a sustainability-focused mobile application with intuitive user experience.",
    tags: ["UI/UX Design", "Mobile", "Sustainability"],
    year: "2023",
    client: "EcoLife Solutions",
  },
  {
    id: 3,
    title: "Artisan Coffee Logo",
    category: "Logo Design",
    image: "/placeholder.svg?height=400&width=600",
    description: "Handcrafted logo design for a local coffee roastery emphasizing artisanal quality and tradition.",
    tags: ["Logo Design", "Coffee", "Artisan"],
    year: "2023",
    client: "Artisan Coffee Co.",
  },
  {
    id: 4,
    title: "FinanceHub Website",
    category: "Ad Design",
    image: "/placeholder.svg?height=400&width=600",
    description: "Modern website design for a financial services company with focus on trust and professionalism.",
    tags: ["Ad Design", "Finance", "Corporate"],
    year: "2022",
    client: "FinanceHub",
  },
  {
    id: 5,
    title: "Wellness Magazine Layout",
    category: "Print Design",
    image: "/placeholder.svg?height=400&width=600",
    description: "Editorial design for a wellness magazine featuring clean layouts and inspiring typography.",
    tags: ["Print Design", "Editorial", "Wellness"],
    year: "2022",
    client: "Wellness Today",
  },
  {
    id: 6,
    title: "StartupX Brand Package",
    category: "Branding",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Comprehensive branding package for a tech startup including logo, business cards, and digital assets.",
    tags: ["Branding", "Startup", "Tech"],
    year: "2022",
    client: "StartupX",
  },
  {
    id: 7,
    title: "FoodieApp Interface",
    category: "UI/UX Design",
    image: "/placeholder.svg?height=400&width=600",
    description: "Intuitive mobile app interface design for a food delivery service with seamless user experience.",
    tags: ["UI/UX Design", "Mobile", "Food"],
    year: "2022",
    client: "FoodieApp",
  },
  {
    id: 8,
    title: "GreenTech Logo Suite",
    category: "Logo Design",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Logo design suite for an environmental technology company with variations for different applications.",
    tags: ["Logo Design", "Environment", "Technology"],
    year: "2021",
    client: "GreenTech Solutions",
  },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-slate-400 to-neutral-500 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-white-400 to-gray-500 rounded-full blur-2xl"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-zinc-400 to-neutral-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My <span className="text-[#A89A7D]">Portfolio</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#A89A7D] text-white"
                    : "hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white dark:bg-gray-800"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex space-x-2">
                        <Link href={`/portfolio/${project.id}`}>
                          <Button
                            size="sm"
                            className="bg-[#A89A7D]/40 backdrop-blur-sm text-white border-[#A89A7D]/30 hover:bg-[#A89A7D]/60"
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                        </Link>
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-[#A89A7D]/40 backdrop-blur-sm text-white border-[#A89A7D]/30 hover:bg-[#A89A7D]/60"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Live
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{project.year}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-[#A89A7D] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="text-xs text-gray-500 dark:text-gray-400">Client: {project.client}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#857F75] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Like What You See?</h2>
          <p className="text-xl dark:text-gray-300 max-w-2xl mx-auto">
            Let's discuss your next project and create something amazing together.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link href="/#contact">
              <Button size="lg" className="group relative overflow-hidden text-white px-10 py-4 rounded-full text-lg font-medium shadow-2xl transition-all duration-500">
                <span className="relative flex items-center">
                  Start a Project
                  <div className="ml-2 w-5 h-5 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </div>
                </span>
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                size="lg"
                className="group px-10 py-4 rounded-full text-lg font-medium border-2 border-white hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="text-black group-hover:text-slate-700 transition-all duration-300">
                  Learn More About Me
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
