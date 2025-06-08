import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Star,
  Award,
  Users,
  Coffee,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Sparkles,
} from "lucide-react";
import { BehanceIcon } from "@/components/behance-icon";
import Link from "next/link";
import Image from "next/image";
import { ProjectCarousel } from "@/components/project-carousel";
import { Navigation } from "@/components/navigation";
import { WorkGallery } from "@/components/work-gallery";
import { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  title: pageMetadata.home.title,
  description: pageMetadata.home.description,
  keywords: pageMetadata.home.keywords,
};

const services = [
  {
    title: "Logo Design",
    description:
      "Creating memorable and impactful brand identities that resonate with your target audience.",
    icon: "🎨",
  },
  {
    title: "Brand Identity",
    description:
      "Comprehensive branding solutions including color palettes, typography, and brand guidelines.",
    icon: "🏢",
  },
  {
    title: "Print Design",
    description:
      "High-quality print materials including brochures, business cards, and marketing collateral.",
    icon: "🖨️",
  },
  {
    title: "Ad Design",
    description:
      "Eye-catching advertisements for digital and print media that drive engagement and conversions.",
    icon: "📢",
  },
];

const achievements = [
  { icon: Star, value: "50+", label: "Projects Completed" },
  { icon: Award, value: "15+", label: "Design Awards" },
  { icon: Users, value: "30+", label: "Happy Clients" },
  { icon: Coffee, value: "1000+", label: "Cups of Coffee" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />

      {/* Enhanced Hero Section */}
      <section
        id="home"
        className="relative min-h-screen dark:from-gray-900 dark:via-zinc-950/30 dark:to-neutral-950/30 overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating Orbs */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-slate-400 to-neutral-500 rounded-full blur-3xl opacity-20 orb-1"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-white-400 to-gray-500 rounded-full blur-2xl opacity-30 orb-2"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-zinc-400 to-blue-500 rounded-full blur-3xl opacity-15 orb-3"></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-r from-slate-300 to-neutral-400 rounded-full blur-xl opacity-25 orb-4"></div>

          {/* Geometric Patterns */}
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full opacity-40 dot-1"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-purple-400 rounded-full opacity-50 dot-2"></div>
          <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-30 dot-3"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full grid-pattern"></div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-32 pb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-10">
              {/* Enhanced Text Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-[#BFB399] rounded-full text-sm font-medium  mb-4 animate-fade-in-up">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Available for new projects
                </div>

                <h1
                  className="text-6xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  <span className="block">Tirtha</span>
                  <span className="block bg-gradient-to-r from-[#000000] via-[#BFB399] to-[#A89A7D] dark:from-[#E3DCD5] dark:via-[#BFB399] dark:to-[#A89A7D] bg-clip-text text-transparent">
                    Jain
                  </span>
                </h1>

                <div
                  className="space-y-4 animate-fade-in-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  <p className="text-2xl lg:text-3xl text-gray-700 dark:text- font-light">
                    Graphic Designer & <br />
                    <span className="bg-[#A89A7D] bg-clip-text text-transparent font-medium">
                      Creative Visionary
                    </span>
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                    Transforming ideas into compelling visual stories that
                    captivate audiences and drive results through innovative
                    design solutions.
                  </p>
                </div>
              </div>

              {/* Enhanced CTA Buttons */}
              <div
                className="flex flex-wrap gap-6 animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                <Link href="/portfolio">
                  <Button
                    size="lg"
                    className="group relative overflow-hidden bg-[#A89A7D] hover:bg-[#8F8675] dark:bg-[#857F75] dark:hover:bg-[#A89A7D] text-white px-10 py-4 rounded-full text-lg font-medium shadow-2xl transition-all duration-300"
                  >
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
                    className="group px-10 py-4 rounded-full text-lg font-medium border-2 border-gray-300 dark:border-[#857F75] hover:border-[#A89A7D] dark:hover:border-[#A89A7D] transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <span className="group-hover:text-[#A89A7D] dark:text-white dark:group-hover:text-[#BFB399] transition-all duration-300">
                      Get In Touch
                    </span>
                  </Button>
                </Link>
              </div>

              {/* Social Proof */}
              <div
                className="flex items-center space-x-8 pt-8 animate-fade-in-up"
                style={{ animationDelay: "0.8s" }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold bg-[#A89A7D] bg-clip-text text-transparent">
                    50+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Projects
                  </div>
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-transparent via- to-transparent"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-[#A89A7D] bg-clip-text text-transparent">
                    30+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Happy Clients
                  </div>
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-transparent via- to-transparent"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-[#A89A7D] bg-clip-text text-transparent">
                    15+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Awards
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Project Carousel */}
            <div
              className="relative animate-fade-in-up w-full lg:max-w-2xl"
              style={{ animationDelay: "1s" }}
            >
              <div className="absolute -inset-4 rounded-3xl blur-2xl"></div>
              <div className="p-2">
                <ProjectCarousel />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 md:bottom-2 lg:bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#A89A7D] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#A89A7D] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <WorkGallery />

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-gradient-to-br from-slate-50 to-neutral-50 dark:from-gray-900 dark:to-gray-950 relative overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-slate-200 to-neutral-200 dark:from-[#857F75]/20 dark:to-[#A89A7D]/10 rounded-full blur-3xl opacity-20 -translate-y-48 translate-x-48"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              What I Do
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I offer comprehensive design services to help your brand stand out
              in today's competitive market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 bg-[#E3DCD5] dark:bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured <span className="text-[#A89A7D]">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Thoughtfully crafted designs that blend form and function to
              create meaningful experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                id: 'the-oven-story',
                title: "The Oven Story",
                category: "Brand Identity",
                image: "/the-oven-story/img8.jpg",
                description:
                  "Complete brand transformation for a growing tech startup",
                tags: ["Branding", "Logo", "Guidelines"],
                color: "from-[#D8CFBC] to-[#A89A7D]",
              },
              {
                id: 'social-media',
                title: "EcoLife App Design",
                category: "Print Design",
                image: "/social-media/img2.jpg",
                description:
                  "Sustainable living app with intuitive user experience",
                tags: ["Mobile", "Print Design", "Sustainability"],
                color: "from-[#D8CFBC] to-[#A89A7D]",
              },
              {
                id: 'logo',
                title: "Luxe Comfort",
                category: "Logo Design",
                image: "/logo/LuxeComfort.jpg",
                description: "Handcrafted identity for premium coffee roastery",
                tags: ["Logo", "Packaging", "Print"],
                color: "from-[#D8CFBC] to-[#A89A7D]",
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
                    <Link href={`/portfolio/${project.id}`}>
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
                        <span
                          key={tagIndex}
                          className="text-xs text-gray-500 dark:text-gray-400"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-[#A89A7D] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href={`/portfolio`}>
              <Button className="bg-[#BFB399] hover:bg-[#A89A7D] dark:bg-[#857F75] dark:hover:bg-[#A89A7D] text-white py-3 rounded-lg font-bold transition-colors duration-300">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#FFFFFF] dark:bg-gray-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-slate-200 to-neutral-200 dark:from-[#857F75]/20 dark:to-[#A89A7D]/10 rounded-full blur-3xl opacity-20 -translate-y-48 -translate-x-48"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My Design Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A structured approach that ensures every project delivers
              exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "Understanding your brand, goals, and target audience through research and consultation.",
                icon: "🔍",
                color: "bg-[#A89A7D]",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "Developing a creative strategy and concept that aligns with your business objectives.",
                icon: "💡",
                color: "bg-[#A89A7D]",
              },
              {
                step: "03",
                title: "Design",
                description:
                  "Creating visual solutions with attention to detail and user experience principles.",
                icon: "🎨",
                color: "bg-[#A89A7D]",
              },
              {
                step: "04",
                title: "Delivery",
                description:
                  "Finalizing designs and providing all necessary files and documentation for implementation.",
                icon: "🚀",
                color: "bg-[#A89A7D]",
              },
            ].map((process, index) => (
              <div key={index} className="relative group">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm h-full">
                  <CardContent className="p-8 text-center relative">
                    <div
                      className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 ${process.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                    >
                      {process.step}
                    </div>
                    <div className="mt-8 mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">
                      {process.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                      {process.description}
                    </p>
                  </CardContent>
                </Card>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from- to-gray-400 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-[#E3DCD5] dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Trusted by Amazing Clients
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I've had the privilege of working with innovative companies and
              passionate entrepreneurs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
            {[
              "TechFlow",
              "EcoLife",
              "Artisan Coffee",
              "StartupX",
              "GreenTech",
              "FinanceHub",
            ].map((client, index) => (
              <div key={index} className="text-center group">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center group-hover:from-slate-100 group-hover:to-neutral-100 transition-all duration-300">
                  <span className="text-lg font-bold text-gray-600 dark:text-gray-400 group-hover:text-[#857F75] transition-colors duration-300">
                    {client.slice(0, 2)}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-400 group-hover:text-[#857F75] transition-colors duration-300">
                  {client}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-gradient-to-br from-slate-50 to-neutral-50 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-white-200 to-gray-200 rounded-full blur-3xl opacity-20 translate-y-48 translate-x-48"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              What Clients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Don't just take my word for it - hear from the amazing people I've
              worked with.
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
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 dark:text-gray-400 leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      width={60}
                      height={60}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Skills & Expertise Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Skills & Expertise
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                With years of experience and continuous learning, I bring a
                comprehensive skill set to every project.
              </p>

              <div className="space-y-6">
                {[
                  {
                    skill: "Brand Identity Design",
                    level: 95,
                    color: "from-[#D8CFBC] to-[#A89A7D]",
                  },
                  {
                    skill: "Print Design",
                    level: 90,
                    color: "from-[#E3DCD5] to-[#857F75]",
                  },
                  {
                    skill: "Logo Design",
                    level: 98,
                    color: "from-[#BFB399] to-[#8F8675]",
                  },
                  {
                    skill: "Ad Design",
                    level: 85,
                    color: "from-[#C9C0A6] to-[#A89A7D]",
                  },
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {item.skill}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {item.level}%
                      </span>
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
              <div className="absolute inset-0 bg-gradient-to-r from-slate-200/20 to-neutral-600/20 rounded-3xl blur-2xl"></div>
              <Card className="relative border-0 shadow-2xl bg-white/90 dark:bg-gray-800 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Why Choose Me?
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        icon: "⚡",
                        title: "Fast Turnaround",
                        desc: "Quick delivery without compromising quality",
                      },
                      {
                        icon: "🎯",
                        title: "Results-Driven",
                        desc: "Designs that achieve your business goals",
                      },
                      {
                        icon: "💬",
                        title: "Clear Communication",
                        desc: "Regular updates and transparent process",
                      },
                      {
                        icon: "🔄",
                        title: "Unlimited Revisions",
                        desc: "Until you're 100% satisfied",
                      },
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="text-2xl">{benefit.icon}</div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {benefit.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {benefit.desc}
                          </p>
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
      <section className="py-16 bg-[#E3DCD5] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <achievement.icon className="w-8 h-8 mx-auto mb-4 text-[#857F75] group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl lg:text-4xl font-bold mb-2 text-[#857F75]">
                  {achievement.value}
                </div>
                <div className="text-black text-sm lg:text-base">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
      >
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ready to bring your vision to life? Get in touch and let's create
              something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                        Your Name
                      </label>
                      <Input
                        className="w-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                        Your Email
                      </label>
                      <Input
                        className="w-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                        type="email"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell me about your project..."
                      className="border-gray-200 dark:border-gray-700 focus:border-blue-500 min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full hover:bg-[#A89A7D] text-white py-3 rounded-lg font-bold bg-[#BFB399] dark:bg-[#8F836B] dark:hover:from-slate-800 dark:hover:to-neutral-800">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="p-6 shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="p-0 space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#A89A7D] rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">
                        Email
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        tirtha.jain@example.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#A89A7D] rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">
                        Phone
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#A89A7D] rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">
                        Location
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        New York, NY
                      </p>
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {[
                    { icon: BehanceIcon, href: "https://www.behance.net/tirthajain" },
                    { icon: Linkedin, href: "#" },
                    { icon: Twitter, href: "#" },
                    { icon: Instagram, href: "#" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      aria-label={`Follow me on ${Object.keys({
                        BehanceIcon,
                        Linkedin,
                        Twitter,
                        Instagram,
                      }).find(
                        (key) =>
                          ({ Linkedin, Twitter, Instagram, BehanceIcon }[key] ===
                          social.icon)
                      )}`}
                      className="w-12 h-12 bg-gray-100 dark:bg-gray-800 hover:bg-[#A89A7D] rounded-full flex items-center justify-center transition-all duration-300 group"
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
      <footer className="bg-[#857F75] dark:bg-gray-950 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Tirtha Jain</h3>
            <p className="text-white dark:text-gray-500 mb-6">
              Graphic Designer & Creative Visionary
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <Link
                href="#home"
                className="hover:text-blue-400 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-blue-400 transition-colors"
              >
                About
              </Link>
              <Link
                href="/portfolio"
                className="hover:text-blue-400 transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="#contact"
                className="hover:text-blue-400 transition-colors"
              >
                Contact
              </Link>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-white">
                © {new Date().getFullYear()} Tirtha Jain. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
