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
  'logo': {
    title: "Logo",
    category: "Logo Design",
    year: "2023",
    client: "Luxe Comfort",
    duration: "1 month",
    description:
      "Designed a sophisticated and memorable logo for Luxe Comfort, a premium home furnishings brand. The project focused on creating a visual identity that communicates luxury, comfort, and timeless elegance.",
    challenge:
      "The main challenge was to create a logo that balanced luxury with approachability, and could work effectively across various applications from product tags to digital platforms.",
    solution:
      "I developed a clean, minimalist logo using a custom wordmark with subtle design elements that evoke comfort and sophistication. The design uses negative space effectively and maintains legibility at all sizes.",
    tags: ["Logo Design", "Branding", "Luxury"],
    images: ["/logo/LuxeComfort.jpg"],
    tools: ["Adobe Illustrator", "Figma"],
    testimonial: {
      text:
        "The logo Tirtha created perfectly captures our brand essence. It's elegant, memorable, and works beautifully across all our materials.",
      author: "James Wilson",
      position: "Founder, Luxe Comfort",
    },
  },
  'railwire': {
    title: "Railwire",
    category: "Promotional Campaign",
    year: "2024",
    client: "Railwire",
    duration: "2 months",
    description:
      "Developed a comprehensive promotional campaign for Railwire, a leading internet service provider. The project included creating visual assets for digital and print advertising, promotional materials, and social media content.",
    challenge:
      "The main challenge was to create a campaign that would stand out in a crowded market while effectively communicating the technical benefits of the service in an accessible way.",
    solution:
      "I designed a visually cohesive campaign using the earthy color palette with bold typography and simple illustrations to explain complex technical concepts. The campaign maintained a consistent look across all touchpoints while adapting to different formats and contexts.",
    tags: ["Ad Design", "Campaign", "Digital"],
    images: Array.from({ length: 8 }, (_, i) => `/railwire/img${i + 1}.png`),
    tools: ["Adobe Photoshop", "Illustrator", "After Effects"],
    testimonial: {
      text:
        "The promotional campaign exceeded our expectations. It not only looked great but also effectively communicated our key messages, resulting in a significant increase in customer inquiries.",
      author: "Rajesh Kumar",
      position: "Marketing Director, Railwire",
    },
  },
  'byd': {
    title: "BYD",
    category: "Logo Design",
    year: "2024",
    client: "BYD",
    duration: "3 weeks",
    description:
      "Created a modern, forward-thinking logo redesign for BYD, a leading automotive company focusing on electric vehicles. The project aimed to refresh their visual identity while maintaining brand recognition.",
    challenge:
      "The challenge was to modernize the logo while respecting the brand's heritage and ensuring it would work effectively across various applications from vehicle badges to digital platforms.",
    solution:
      "I developed a refined logo that maintains the core elements of the original design while introducing cleaner lines and improved proportions. The new logo works seamlessly across all applications and better represents the company's focus on innovation and sustainability.",
    tags: ["Logo Design", "Automotive", "Corporate"],
    images: Array.from({ length: 6 }, (_, i) => `/byd/img${i + 1}.jpeg`),
    tools: ["Adobe Illustrator", "Figma"],
    testimonial: {
      text:
        "The logo redesign perfectly captures our evolution as a company while maintaining our brand recognition. It's modern, versatile, and represents our vision for the future.",
      author: "Li Wei",
      position: "Brand Manager, BYD",
    },
  },
  'social-media': {
    title: "Social Media",
    category: "Social Media",
    year: "2024",
    client: "Various Clients",
    duration: "Ongoing",
    description:
      "Developed a cohesive social media visual strategy and created engaging content for various brands across different platforms. The project focuses on maintaining brand consistency while optimizing content for each platform's unique requirements.",
    challenge:
      "The main challenge was creating visually consistent content that would stand out in crowded social feeds while effectively communicating key messages and driving engagement.",
    solution:
      "I designed a flexible template system using the earthy color palette that allows for creative variation while maintaining brand consistency. Each post is optimized for its specific platform and audience, with careful attention to typography, imagery, and layout.",
    tags: ["Social Media", "Digital", "Content Creation"],
    images: Array.from({ length: 6 }, (_, i) => `/social-media/img${i + 1}.png`),
    tools: ["Adobe Photoshop", "Illustrator", "Canva"],
  },
  'book-cover': {
    title: "Book Cover",
    category: "Book Cover",
    year: "2024",
    client: "Publishing Houses",
    duration: "2 weeks",
    description:
      "Designed compelling book covers for various genres that capture the essence of each story while standing out on both physical and digital bookshelves. Each cover is crafted to appeal to its target audience while conveying the book's tone and theme.",
    challenge:
      "The challenge was creating covers that would work effectively in both physical and digital formats, appeal to the target audience, and accurately represent the content while standing out in a crowded marketplace.",
    solution:
      "I developed covers with strong visual hierarchies, carefully selected typography, and compelling imagery that captures the essence of each book. Each design balances artistic expression with commercial appeal and readability.",
    tags: ["Book Cover", "Publishing", "Typography"],
    images: Array.from({ length: 3 }, (_, i) => `/book-cover/img${i + 1}.jpg`),
    tools: ["Adobe Photoshop", "InDesign", "Illustrator"],
  },
  'illustrations': {
    title: "Illustrations",
    category: "Illustrations",
    year: "2024",
    client: "Various Clients",
    duration: "Ongoing",
    description:
      "Created a series of custom illustrations for various clients and purposes, ranging from editorial illustrations to decorative art and informational graphics. Each illustration is tailored to its specific context and purpose.",
    challenge:
      "The main challenge was developing unique visual styles that would serve each project's specific needs while effectively communicating ideas and evoking the desired emotional response.",
    solution:
      "I created illustrations using various techniques and styles, each carefully chosen to match the project requirements. The illustrations use color, composition, and style to communicate concepts clearly while adding visual interest and personality.",
    tags: ["Illustrations", "Art", "Visual Communication"],
    images: Array.from({ length: 4 }, (_, i) => `/illustrations/img${i + 1}.jpg`),
    tools: ["Adobe Illustrator", "Procreate", "Photoshop"],
  },
  'mayze': {
    title: "Mayze",
    category: "Logo Design",
    year: "2024",
    client: "Mayze",
    duration: "1 month",
    description:
      "Designed a distinctive logo and visual identity for Mayze, a new tech startup focused on innovative smart home solutions. The project aimed to establish a modern, trustworthy brand that would appeal to tech-savvy consumers.",
    challenge:
      "The challenge was creating a visual identity that would stand out in the crowded tech marketplace while conveying innovation, reliability, and user-friendliness.",
    solution:
      "I developed a clean, geometric logo with a subtle reference to connectivity and home, using the earthy color palette to differentiate from the typical blue tech branding. The identity system includes flexible elements that work across digital and physical touchpoints.",
    tags: ["Logo Design", "Tech", "Branding"],
    images: Array.from({ length: 3 }, (_, i) => `/mayze/img${i + 1}.jpg`),
    tools: ["Figma", "Adobe Illustrator"],
    testimonial: {
      text:
        "Tirtha created a logo and identity that perfectly positions us in the market. The design is distinctive, memorable, and effectively communicates our brand values.",
      author: "Alex Rivera",
      position: "CEO, Mayze",
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
