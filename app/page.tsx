import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Star,
  Award,
  Users,
  Coffee,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import { ProjectCarousel } from "@/components/project-carousel"
import { Navigation } from "@/components/navigation"
import Image from "next/image"

const services = [
  {
    title: "Logo Design",
    description: "Creating memorable and impactful brand identities that resonate with your target audience.",
    icon: "🎨",
  },
  {
    title: "Brand Identity",
    description: "Comprehensive branding solutions including color palettes, typography, and brand guidelines.",
    icon: "🏢",
  },
  {
    title: "UI/UX Design",
    description: "User-centered design approach for web and mobile applications with focus on usability.",
    icon: "📱",
  },
  {
    title: "Web Design",
    description: "Modern, responsive websites that combine aesthetic appeal with functional excellence.",
    icon: "💻",
  },
]

const achievements = [
  { icon: Star, value: "50+", label: "Projects Completed" },
  { icon: Award, value: "15+", label: "Design Awards" },
  { icon: Users, value: "30+", label: "Happy Clients" },
  { icon: Coffee, value: "1000+", label: "Cups of Coffee" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />

      {/* Enhanced Hero Section */}
      <section
        id="home"
        className="relative min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-950/30 dark:to-purple-950/30 overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating Orbs */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 orb-1"></div>
          <div
            className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-2xl opacity-30 orb-2"
          ></div>
          <div
            className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-pink-400 to-blue-500 rounded-full blur-3xl opacity-15 orb-3"
          ></div>
          <div
            className="absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-r from-blue-300 to-purple-400 rounded-full blur-xl opacity-25 orb-4"
          ></div>

          {/* Geometric Patterns */}
          <div
            className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full opacity-40 dot-1"
          ></div>
          <div
            className="absolute top-3/4 right-1/3 w-1 h-1 bg-purple-400 rounded-full opacity-50 dot-2"
          ></div>
          <div
            className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-30 dot-3"
          ></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="h-full w-full grid-pattern"
            ></div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-32 pb-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              {/* Enhanced Text Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-700 mb-4 animate-fade-in-up">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Available for new projects
                </div>

                <h1
                  className="text-6xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  <span className="block">Tirtha</span>
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent relative">
                    Jain
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-xl -z-10"></div>
                  </span>
                </h1>

                <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                  <p className="text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 font-light">
                    Graphic Designer &{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                      Creative Visionary
                    </span>
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                    Transforming ideas into compelling visual stories that captivate audiences and drive results through
                    innovative design solutions.
                  </p>
                </div>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-wrap gap-6 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                <Link href="/portfolio">
                  <Button
                    size="lg"
                    className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-10 py-4 rounded-full text-lg font-medium shadow-2xl hover:shadow-blue-500/25 transition-all duration-500"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative flex items-center">
                      View My Work
                      <div className="ml-2 w-5 h-5 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </div>
                    </span>
                  </Button>
                </Link>

                <Link href="#contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group px-10 py-4 rounded-full text-lg font-medium border-2 border-gray-300 hover:border-blue-500 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <span className="bg-gradient-to-r from-gray-700 to-gray-900 group-hover:from-blue-600 group-hover:to-purple-600 bg-clip-text text-transparent transition-all duration-300">
                      Get In Touch
                    </span>
                  </Button>
                </Link>
              </div>

              {/* Social Proof */}
              <div className="flex items-center space-x-8 pt-8 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    50+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    30+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                    15+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Awards</div>
                </div>
              </div>
            </div>

            {/* Enhanced Project Carousel */}
            <div className="relative animate-fade-in-up" style={{ animationDelay: "1s" }}>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-2xl"></div>
              <ProjectCarousel />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl opacity-20 -translate-y-48 translate-x-48"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">What I Do</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I offer comprehensive design services to help your brand stand out in today's competitive market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">Featured Work</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent projects that demonstrate creativity, innovation, and results.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "TechFlow Rebrand",
                category: "Brand Identity",
                image: "/placeholder.svg?height=400&width=600",
                description: "Complete brand transformation for a growing tech startup",
                tags: ["Branding", "Logo", "Guidelines"],
                color: "from-blue-500 to-purple-600",
              },
              {
                title: "EcoLife App Design",
                category: "UI/UX Design",
                image: "/placeholder.svg?height=400&width=600",
                description: "Sustainable living app with intuitive user experience",
                tags: ["Mobile", "UI/UX", "Sustainability"],
                color: "from-green-500 to-blue-600",
              },
              {
                title: "Artisan Coffee Brand",
                category: "Logo Design",
                image: "/placeholder.svg?height=400&width=600",
                description: "Handcrafted identity for premium coffee roastery",
                tags: ["Logo", "Packaging", "Print"],
                color: "from-orange-500 to-red-600",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white dark:bg-gray-800"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Link href={`/portfolio/${index + 1}`}>
                      <Button className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 rounded-full">
                        View Project
                      </Button>
                    </Link>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                    <div className="flex space-x-1">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs text-gray-500 dark:text-gray-400">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/portfolio">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full blur-3xl opacity-20 -translate-y-48 -translate-x-48"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">My Design Process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A structured approach that ensures every project delivers exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your brand, goals, and target audience through research and consultation.",
                icon: "🔍",
                color: "from-blue-500 to-purple-600",
              },
              {
                step: "02",
                title: "Strategy",
                description: "Developing a creative strategy and concept that aligns with your business objectives.",
                icon: "💡",
                color: "from-purple-500 to-pink-600",
              },
              {
                step: "03",
                title: "Design",
                description: "Creating visual solutions with attention to detail and user experience principles.",
                icon: "🎨",
                color: "from-pink-500 to-red-600",
              },
              {
                step: "04",
                title: "Delivery",
                description:
                  "Finalizing designs and providing all necessary files and documentation for implementation.",
                icon: "🚀",
                color: "from-red-500 to-orange-600",
              },
            ].map((process, index) => (
              <div key={index} className="relative group">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm h-full">
                  <CardContent className="p-8 text-center relative">
                    <div
                      className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r ${process.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                    >
                      {process.step}
                    </div>
                    <div className="mt-8 mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">
                      {process.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{process.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{process.description}</p>
                  </CardContent>
                </Card>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">Trusted by Amazing Clients</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I've had the privilege of working with innovative companies and passionate entrepreneurs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
            {["TechFlow", "EcoLife", "Artisan Coffee", "StartupX", "GreenTech", "FinanceHub"].map((client, index) => (
              <div key={index} className="text-center group">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300">
                  <span className="text-lg font-bold text-gray-600 dark:text-gray-400 group-hover:text-blue-600 transition-colors duration-300">
                    {client.slice(0, 2)}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-400 group-hover:text-blue-600 transition-colors duration-300">
                  {client}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-20 translate-y-48 translate-x-48"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">What Clients Say</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Don't just take my word for it - hear from the amazing people I've worked with.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Tirtha's design work transformed our brand completely. The attention to detail and creative vision exceeded our expectations.",
                author: "Sarah Johnson",
                position: "CEO, TechFlow Inc.",
                avatar: "/placeholder.svg?height=60&width=60",
                rating: 5,
              },
              {
                quote:
                  "Working with Tirtha was a game-changer for our startup. The brand identity perfectly captures our mission and values.",
                author: "Michael Chen",
                position: "Founder, EcoLife Solutions",
                avatar: "/placeholder.svg?height=60&width=60",
                rating: 5,
              },
              {
                quote:
                  "Professional, creative, and always delivers on time. Tirtha is our go-to designer for all branding projects.",
                author: "Emily Rodriguez",
                position: "Marketing Director, StartupX",
                avatar: "/placeholder.svg?height=60&width=60",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800"
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 dark:text-gray-400 leading-relaxed mb-6 italic">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      width={60}
                      height={60}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">Skills & Expertise</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                With years of experience and continuous learning, I bring a comprehensive skill set to every project.
              </p>

              <div className="space-y-6">
                {[
                  { skill: "Brand Identity Design", level: 95, color: "from-blue-500 to-purple-600" },
                  { skill: "UI/UX Design", level: 90, color: "from-purple-500 to-pink-600" },
                  { skill: "Logo Design", level: 98, color: "from-pink-500 to-red-600" },
                  { skill: "Web Design", level: 85, color: "from-green-500 to-blue-600" },
                  { skill: "Print Design", level: 88, color: "from-orange-500 to-red-600" },
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900 dark:text-white">{item.skill}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl"></div>
              <Card className="relative border-0 shadow-2xl bg-white/90 dark:bg-gray-800 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Why Choose Me?</h3>
                  <div className="space-y-4">
                    {[
                      { icon: "⚡", title: "Fast Turnaround", desc: "Quick delivery without compromising quality" },
                      { icon: "🎯", title: "Results-Driven", desc: "Designs that achieve your business goals" },
                      { icon: "💬", title: "Clear Communication", desc: "Regular updates and transparent process" },
                      { icon: "🔄", title: "Unlimited Revisions", desc: "Until you're 100% satisfied" },
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="text-2xl">{benefit.icon}</div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">{benefit.title}</h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">{benefit.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <achievement.icon className="w-8 h-8 mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {achievement.value}
                </div>
                <div className="text-gray-300 text-sm lg:text-base">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">Let's Work Together</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ready to bring your vision to life? Get in touch and let's create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Your Name</label>
                      <Input className="w-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200" placeholder="John Doe" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Your Email</label>
                      <Input className="w-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200" type="email" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Message</label>
                    <Textarea
                      placeholder="Tell me about your project..."
                      className="border-gray-200 dark:border-gray-700 focus:border-blue-500 min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-medium dark:from-blue-700 dark:to-purple-700 dark:hover:from-blue-800 dark:hover:to-purple-800">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="p-6 shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="p-0 space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">Email</p>
                      <p className="text-gray-600 dark:text-gray-400">tirtha.jain@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">Phone</p>
                      <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">Location</p>
                      <p className="text-gray-600 dark:text-gray-400">New York, NY</p>
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: "#" },
                    { icon: Linkedin, href: "#" },
                    { icon: Twitter, href: "#" },
                    { icon: Instagram, href: "#" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={`Follow me on ${Object.keys({Github, Linkedin, Twitter, Instagram}).find(key => ({Github, Linkedin, Twitter, Instagram})[key] === social.icon)}`}
                      className="w-12 h-12 bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-full flex items-center justify-center transition-all duration-300 group"
                    >
                      <social.icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Tirtha Jain</h3>
            <p className="text-gray-400 dark:text-gray-500 mb-6">Graphic Designer & Creative Visionary</p>
            <div className="flex justify-center space-x-6 mb-8">
              <Link href="#home" className="hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover:text-blue-400 transition-colors">
                About
              </Link>
              <Link href="/portfolio" className="hover:text-blue-400 transition-colors">
                Portfolio
              </Link>
              <Link href="#contact" className="hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">© {new Date().getFullYear()} Tirtha Jain. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
