import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { pageMetadata } from "@/lib/metadata"

export const metadata: Metadata = {
  title: pageMetadata.about.title,
  description: pageMetadata.about.description,
  keywords: pageMetadata.about.keywords,
}

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
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-slate-400 to-neutral-500 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-white-400 to-gray-500 rounded-full blur-2xl"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-zinc-400 to-neutral-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  About
                  <span className="block text-[#A89A7D]">
                    Tirtha
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  A passionate graphic designer with over 3 years of experience creating compelling visual stories that connect brands with their audiences.
                </p>
              </div>

              <a className="mt-4" href="/Tirtha Jain- Resume.pdf" download>
                <Button className="group relative overflow-hidden bg-[#A89A7D] hover:bg-[#8F8675] text-white px-10 py-4 rounded-full text-lg font-medium shadow-2xl transition-all duration-500 mt-4">
                  <span className="relative flex items-center">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                    <div className="ml-2 w-5 h-5 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </div>
                  </span>
                </Button>
              </a>
            </div>

            <div className="relative ">
              <div className="relative w-full max-w-sm mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D8CFBC] to-[#A89A7D] rounded-2xl blur-xl shadow-[0_20px_50px_rgba(168,154,125,0.3)]"></div>
                <Image
                  src="/profile.jpg"
                  alt="Tirtha Jain"
                  width={140}
                  height={100}
                  className="relative z-10 w-full rounded-2xl border-2 border-[#E3DCD5]/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-[#E3DCD5] mb-8 text-center">My Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600 dark:text-[#D8CFBC]/90 leading-relaxed space-y-6">
              <p className="dark:text-[#D8CFBC]/90">
              As a passionate and dedicated Graphic Designer with 3 years of professional experience, I bring a unique blend of creativity and technical skill to every project. Being self-taught, I have cultivated a keen eye for aesthetics and a deep understanding of design principles through hands-on practice and continuous learning.
              </p>
              <p className="dark:text-[#D8CFBC]/90">
              My journey in graphic design is driven by an unwavering enthusiasm for art and a commitment to creating visually compelling and impactful designs. I am proficient in various design software and have a proven ability to conceptualize and execute designs that effectively communicate the intended message.
              </p>
              <p className="dark:text-[#D8CFBC]/90">
              I thrive in collaborative environments and am always eager to embrace new challenges that push the boundaries of my creativity. With a meticulous approach to detail and a passion for staying current with industry trends, I am dedicated to delivering high-quality, innovative design solutions that meet and exceed client expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-[#E3DCD5] dark:bg-gray-900">
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
                className="px-4 py-2 text-sm bg-white/80 dark:bg-[#3A3A3A] backdrop-blur-sm hover:bg-white dark:hover:bg-[#4A4A4A] dark:text-[#D8CFBC] transition-colors duration-300"
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
              <Card key={index} className="border-0 shadow-lg dark:bg-[#2A2A2A] dark:border dark:border-[#3A3A3A] hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#A89A7D] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{achievement.year.slice(-2)}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-[#E3DCD5] mb-1">{achievement.title}</h3>
                      <p className="text-gray-600 dark:text-[#D8CFBC]/80 text-sm mb-2">{achievement.organization}</p>
                      <Badge variant="outline" className="text-xs dark:bg-[#3A3A3A] dark:text-[#D8CFBC] dark:border-[#4A4A4A]">
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
      <section className="py-20 bg-[#E3DCD5] dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Education */}
            <div>
              <div className="flex mb-8">
                <GraduationCap className="w-8 h-8 text-[#A89A7D] mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h2>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="border-0 shadow-lg dark:bg-[#2A2A2A] dark:border dark:border-[#3A3A3A]">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 dark:text-[#E3DCD5] mb-2">{edu.degree}</h3>
                      <div className="flex items-center text-[#A89A7D] mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm dark:text-[#D8CFBC]">{edu.institution}</span>
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-[#A89A7D] mb-3">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="text-sm dark:text-[#D8CFBC]">{edu.year}</span>
                      </div>
                      <p className="text-gray-600 dark:text-[#D8CFBC]/80 text-sm leading-relaxed">{edu.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <div className="flex items-center mb-8">
                <Briefcase className="w-8 h-8 text-[#A89A7D] mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Experience</h2>
              </div>

              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <Card key={index} className="border-0 shadow-lg dark:bg-[#2A2A2A] dark:border dark:border-[#3A3A3A]">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 dark:text-[#E3DCD5] mb-2">{exp.position}</h3>
                      <div className="flex items-center text-[#A89A7D] mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm dark:text-[#D8CFBC]">{exp.company}</span>
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-[#A89A7D] mb-3">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="text-sm dark:text-[#D8CFBC]">{exp.period}</span>
                      </div>
                      <p className="text-gray-600 dark:text-[#D8CFBC]/80 text-sm leading-relaxed">{exp.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#857F75] dark:bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's create something amazing together. I'm always excited to take on new challenges and bring fresh ideas
            to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <Link href="/#contact">
              <Button size="lg" className="group relative overflow-hidden bg-[#A89A7D] hover:bg-[#8F8675] dark:bg-[#857F75] dark:hover:bg-[#A89A7D] text-white px-10 py-4 rounded-full text-lg font-medium shadow-2xl transition-all duration-300">
                <span className="relative flex items-center">
                  Get In Touch
                  <div className="ml-2 w-5 h-5 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </div>
                </span>
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                variant="outline"
                size="lg"
                className="group px-10 py-4 rounded-full text-lg font-medium border-2 border-white dark:border-[#857F75] hover:bg-white dark:hover:bg-[#857F75]/30 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="text-[#A89A7D] group-hover:text-[#A89A7D] dark:text-white dark:group-hover:text-[#BFB399] transition-all duration-300">
                  View Portfolio
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
