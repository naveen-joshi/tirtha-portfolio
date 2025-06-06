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
    title: "TechFlow Brand Identity",
    category: "Branding",
    year: "2023",
    client: "TechFlow Inc.",
    duration: "3 months",
    description:
      "TechFlow approached me to create a comprehensive brand identity that would position them as a forward-thinking technology company. The challenge was to create a brand that felt both innovative and trustworthy, appealing to both tech-savvy users and enterprise clients.",
    challenge:
      "The main challenge was creating a brand identity that could work across multiple touchpoints while maintaining consistency and impact. The logo needed to be versatile enough for digital applications, print materials, and merchandise.",
    solution:
      "I developed a clean, modern logo featuring geometric elements that suggest flow and connectivity. The color palette combines deep blues with vibrant accents, creating a professional yet approachable feel. The typography system uses a modern sans-serif that's highly legible across all applications.",
    results:
      "The new brand identity helped TechFlow secure $2M in Series A funding and increased their brand recognition by 150% within six months of launch.",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
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
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
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
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Client</p>
                    <p className="font-medium text-gray-900 dark:text-white">{project.client}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Year</p>
                    <p className="font-medium text-gray-900">{project.year}</p>
                  </div>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
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
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">The Challenge</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-12">{project.challenge}</p>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">The Solution</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-12">{project.solution}</p>
              </div>

              {/* Results */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">The Results</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{project.results}</p>
              </div>

              {/* Additional Images */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Project Gallery</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.images.slice(1).map((image, index) => (
                    <Image
                      key={index}
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} - Image ${index + 2}`}
                      width={600}
                      height={400}
                      className="w-full rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
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
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
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

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-0 shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <div className="text-4xl text-blue-600 mb-6">"</div>
              <blockquote className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic">
                {project.testimonial.text}
              </blockquote>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{project.testimonial.author}</p>
                <p className="text-gray-600 dark:text-gray-400">{project.testimonial.position}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how I can help bring your vision to life with creative design solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#contact">
              <Button size="lg" variant="secondary" className="px-8 py-3 rounded-full">
                Get In Touch
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-3 rounded-full border-white text-white hover:bg-white hover:text-blue-600"
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
