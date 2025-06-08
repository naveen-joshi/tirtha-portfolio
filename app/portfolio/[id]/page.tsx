import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Calendar, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"

// This would typically come from a database or API
const projectData = {
  1: {
    title: "The Oven Story",
    category: "Branding",
    year: "2023",
    client: "The Oven Story Inc.",
    duration: "3 months",
    description:
      "The Oven Story approached me to create a comprehensive brand identity that would position them as a forward-thinking technology company. The challenge was to create a brand that felt both innovative and trustworthy, appealing to both tech-savvy users and enterprise clients.",
    challenge:
      "The main challenge was creating a brand identity that could work across multiple touchpoints while maintaining consistency and impact. The logo needed to be versatile enough for digital applications, print materials, and merchandise.",
    solution:
      "I developed a clean, modern logo featuring geometric elements that suggest flow and connectivity. The color palette combines deep blues with vibrant accents, creating a professional yet approachable feel. The typography system uses a modern sans-serif that's highly legible across all applications.",
    results:
      "The new brand identity helped TechFlow secure $2M in Series A funding and increased their brand recognition by 150% within six months of launch.",
    images: [
      "/theovenstory/TheOvenStory1.jpg",
      "/theovenstory/TheOvenStory2.jpg",
      "/theovenstory/TheOvenStory3.jpg",
      "/theovenstory/TheOvenStory4.jpg",
      "/theovenstory/TheOvenStory5.jpg",
      "/theovenstory/TheOvenStory6.jpg",
      "/theovenstory/TheOvenStory7.jpg",
      "/theovenstory/TheOvenStory8.jpg",
      
    ],
    tags: ["Branding", "Logo Design", "Guidelines", "Corporate Identity"],
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
    testimonial: {
      text: "Tirtha's work exceeded our expectations. The brand identity perfectly captures our vision and has been instrumental in our growth.",
      author: "Sarah Johnson",
      position: "CEO, TechFlow Inc.",
    },
  },
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  // Convert string ID to number for type safety
  const projectId = parseInt(params.id, 10)
  const project = projectData[projectId as keyof typeof projectData]

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

              <Button className="bg-[#A89A7D] hover:bg-[#8F8675] dark:bg-[#857F75] dark:hover:bg-[#A89A7D] text-white transition-colors duration-300">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live Project
              </Button>
            </div>

            <div className="relative">
              <Image
                src={project.images[0] || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={600}
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
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
                    <div key={index} className="aspect-[4/3] relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} - Image ${index + 2}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
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
