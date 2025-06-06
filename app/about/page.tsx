import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"

const tools = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe InDesign",
  "Figma",
  "Sketch",
  "Adobe XD",
  "Canva",
  "Procreate",
  "Blender",
  "After Effects",
]

const achievements = [
  {
    title: "Best Logo Design Award",
    organization: "Design Awards 2023",
    year: "2023",
  },
  {
    title: "Creative Excellence Recognition",
    organization: "Graphic Design Society",
    year: "2022",
  },
  {
    title: "Innovation in Branding",
    organization: "Brand Masters Conference",
    year: "2022",
  },
  {
    title: "Rising Designer of the Year",
    organization: "Creative Industry Awards",
    year: "2021",
  },
]

const education = [
  {
    degree: "Master of Fine Arts in Graphic Design",
    institution: "Rhode Island School of Design",
    year: "2019-2021",
    description: "Specialized in brand identity and digital design with focus on user experience.",
  },
  {
    degree: "Bachelor of Arts in Visual Communication",
    institution: "Parsons School of Design",
    year: "2015-2019",
    description: "Foundation in design principles, typography, and visual storytelling.",
  },
]

const experience = [
  {
    position: "Senior Graphic Designer",
    company: "Creative Studio NYC",
    period: "2022 - Present",
    description:
      "Leading design projects for Fortune 500 companies, managing client relationships, and mentoring junior designers.",
  },
  {
    position: "Brand Designer",
    company: "Design Collective",
    period: "2021 - 2022",
    description:
      "Developed comprehensive brand identities for startups and established businesses across various industries.",
  },
  {
    position: "Junior Designer",
    company: "Pixel Perfect Agency",
    period: "2019 - 2021",
    description: "Created digital assets, marketing materials, and supported senior designers on major campaigns.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500 rounded-full blur-2xl"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-pink-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  About
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Tirtha
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  A passionate graphic designer with over 5 years of experience creating compelling visual stories that
                  connect brands with their audiences.
                </p>
              </div>

              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>

            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Tirtha Jain"
                  width={400}
                  height={500}
                  className="relative z-10 w-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">My Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
              <p>
                My journey into graphic design began during my college years when I discovered the power of visual
                communication. What started as a hobby quickly evolved into a passion, and eventually, my career. I
                believe that great design is not just about making things look beautiful—it's about solving problems and
                creating meaningful connections between brands and people.
              </p>
              <p>
                Over the past five years, I've had the privilege of working with diverse clients, from innovative
                startups to established corporations. Each project has taught me something new and reinforced my belief
                that design has the power to transform businesses and touch lives.
              </p>
              <p>
                When I'm not designing, you can find me exploring art galleries, experimenting with new creative
                techniques, or mentoring aspiring designers. I'm constantly inspired by the world around me and always
                looking for new ways to push the boundaries of visual storytelling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Tools & Technologies</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I work with industry-leading tools to bring creative visions to life.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm bg-white/80 dark:bg-gray-800 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 transition-colors duration-300"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Achievements & Recognition</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Recognition for excellence in design and creative innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-0 shadow-lg dark:shadow-gray-700 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{achievement.year.slice(-2)}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{achievement.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{achievement.organization}</p>
                      <Badge variant="outline" className="text-xs">
                        {achievement.year}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Education */}
            <div>
              <div className="flex items-center mb-8">
                <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Education</h2>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="border-0 shadow-lg dark:shadow-gray-700">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{edu.degree}</h3>
                      <div className="flex items-center text-blue-600 mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{edu.institution}</span>
                      </div>
                      <div className="flex items-center text-gray-500 mb-3">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="text-sm">{edu.year}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{edu.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <div className="flex items-center mb-8">
                <Briefcase className="w-8 h-8 text-purple-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Experience</h2>
              </div>

              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{exp.position}</h3>
                      <div className="flex items-center text-purple-600 mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{exp.company}</span>
                      </div>
                      <div className="flex items-center text-gray-500 mb-3">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's create something amazing together. I'm always excited to take on new challenges and bring fresh ideas
            to life.
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
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
