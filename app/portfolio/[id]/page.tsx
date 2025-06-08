"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Calendar, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import React, { useState } from "react"
import { Navigation } from "@/components/navigation"
import { ImageLightbox } from "@/components/image-lightbox"

// This would typically come from a database or API
const projectData = {
  'the-oven-story': {
    title: "The Oven Story",
    category: "Branding",
    year: "2023",
    client: "The Oven Story Inc.",
    duration: "3 months",
    description:
      'This project focuses on developing a clear and captivating brand identity that reflects the essence and values of for for "The Oven Story," a bakery cum dessert boutique, The project deals with a distinctive logo, designing business cards, menus, mockups, signs, carry bags, and other brand collateral that will establish a memorable and consistent brand presence.',
    challenge:
      "The main challenge was creating a brand identity that could work across multiple touchpoints while maintaining consistency and impact. The logo needed to be versatile enough for digital applications, print materials, and packaging.",
    solution:
      "I developed a comprehensive brand identity system that included a versatile logo, a refined color palette, typography guidelines, and custom iconography. The design language was applied to various touchpoints including website, packaging, and marketing materials.",
    results:
      "The new brand identity helped The Oven Story increase their customer base by 75% and expand to two new locations within six months of launch.",
    images: Array.from({ length: 8 }, (_, i) => `/the-oven-story/img${i + 1}.jpg`),
    tags: ["Branding", "Logo Design", "Guidelines", "Corporate Identity"],
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
    testimonial: {
      text:
        "Tirtha delivered a brand identity that perfectly captures our bakery's vision and values. The design system is not only beautiful but also incredibly functional across all our touchpoints.",
      author: "Sarah Johnson",
      position: "Owner, The Oven Story",
    },
  },
  'label-shaaf': {
    title: "Label Shaaf",
    category: "UI/UX Design",
    year: "2023",
    client: "Label Shaaf",
    duration: "4 months",
    description:
      "Label Shaaf approached me to design a user-friendly e-commerce interface for their fashion brand. The goal was to create an elegant shopping experience that showcased their products while maintaining strong brand identity.",
    challenge:
      "The main challenge was balancing aesthetic appeal with functional usability, ensuring the interface was intuitive while still reflecting the premium nature of the brand.",
    solution:
      "I created a clean, minimalist interface with thoughtful navigation, high-quality product displays, and a streamlined checkout process. The design incorporated the brand's earthy color palette throughout the user journey.",
    results:
      "The new interface increased conversion rates by 35% and reduced cart abandonment by 28% within the first quarter after launch.",
    images: Array.from({ length: 8 }, (_, i) => `/label-shaaf/img${i + 1}.png`),
    tags: ["UI/UX Design", "E-commerce", "Fashion"],
    tools: ["Figma", "Adobe XD", "Photoshop"],
    testimonial: {
      text:
        "Tirtha's design work transformed our online presence. The interface is beautiful, intuitive, and has significantly improved our customer engagement and sales.",
      author: "Aisha Malik",
      position: "Creative Director, Label Shaaf",
    },
  },
  'railwire': {
    title: "Railwire",
    category: "Promotional Campaign",
    year: "2022",
    client: "Railwire",
    duration: "3 months",
    description:
      "The project deals with a distinctive logo, designing business cards, menus, mockups, signs, carry bags, and other brand collateral.",
    tags: ["Branding", "Logo Design", "Guidelines"],
    images: Array.from({ length: 8 }, (_, i) => `/railwire/img${i + 1}.png`),
    tools: ["Figma", "Adobe XD", "Photoshop"],
    testimonial: {
      text:
        "Tirtha delivered a brand identity that perfectly captures our bakery's vision and values. The design system is not only beautiful but also incredibly functional across all our touchpoints.",
      author: "Sarah Johnson",
      position: "Owner, The Oven Story",
    },
  }
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  // Access params directly in client component
  const project = projectData[params.id as keyof typeof projectData]
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
          <Link href="/portfolio">
            <Button>Back to Portfolio</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-[#A89A7D] hover:text-[#8F8675] dark:text-[#BFB399] dark:hover:text-[#D8CFBC] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-4">
                  {project.category}
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4">{project.title}</h1>
                <p className="text-xl text-[#A89A7D] dark:text-[#BFB399] leading-relaxed">{project.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-[#A89A7D] dark:text-[#BFB399]" />
                  <div>
                    <p className="text-sm text-gray-500">Client</p>
                    <p className="font-medium text-gray-900 dark:text-white">{project.client}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-[#A89A7D] dark:text-[#BFB399]" />
                  <div>
                    <p className="text-sm text-gray-500">Year</p>
                    <p className="font-medium text-gray-900">{project.year}</p>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className="relative cursor-pointer" 
              onClick={() => project.images[0] && setLightboxImage(project.images[0])}
            >
              <Image
                src={project.images[0] || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={600}
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
                <div className="bg-[#A89A7D]/80 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                  View Full Size
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Challenge */}
              {/* <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">The Challenge</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-12">{project.challenge}</p>
              </div> */}

              {/* Solution */}
              {/* <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">The Solution</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-12">{project.solution}</p>
              </div> */}

              {/* Results */}
              {/* <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">The Results</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{project.results}</p>
              </div> */}

              {/* Additional Images */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Project Gallery</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.images.slice(1).map((image, index) => (
                    <div 
                      key={index} 
                      className="aspect-[4/3] relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                      onClick={() => setLightboxImage(image)}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} - Image ${index + 2}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-[#A89A7D]/80 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                          View Full Size
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Lightbox */}
              {lightboxImage && (
                <ImageLightbox 
                  src={lightboxImage} 
                  alt={project.title} 
                  onClose={() => setLightboxImage(null)} 
                />
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Project Info</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Duration</p>
                      <p className="font-medium text-gray-900 dark:text-white">{project.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Category</p>
                      <p className="font-medium text-gray-900 dark:text-white">{project.category}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Year</p>
                      <p className="font-medium text-gray-900 dark:text-white">{project.year}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tags */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tools Used */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Tools Used</h3>
                  <div className="space-y-2">
                    {project.tools.map((tool, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#A89A7D] dark:bg-[#BFB399] rounded-full"></div>
                        <span className="text-gray-700 dark:text-gray-300">{tool}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-20 bg-[#857F75] dark:bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how I can help bring your vision to life with creative design solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#contact">
              <Button size="lg" className="bg-[#A89A7D] hover:bg-[#8F8675] dark:bg-[#857F75] dark:hover:bg-[#A89A7D] text-white px-8 py-3 rounded-full transition-colors duration-300">
                Get In Touch
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-3 rounded-full border-white dark:border-[#857F75] text-[#A89A7D] dark:text-[#BFB399] hover:bg-white dark:hover:bg-[#857F75]/30 dark:hover:text-[#BFB399] transition-colors duration-300"
              >
                View More Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
