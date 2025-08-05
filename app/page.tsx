"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Download,
  User,
  Briefcase,
  Code,
  Award,
  MessageSquare,
  Menu,
  X,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "certifications", "testimonials"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const downloadResume = () => {
    // Create a dummy PDF download
    const link = document.createElement("a")
    link.href = "/placeholder-wxssb.png"
    link.download = "Nandan_Tandel_Resume.pdf"
    link.click()
  }

  const skills = {
    Languages: ["JavaScript", "Python", "Java", "C++", "TypeScript", "SQL"],
    Frameworks: ["React", "Next.js", "Node.js", "Express.js", "Django", "Spring Boot"],
    Tools: ["Git", "Docker", "VS Code", "Postman", "MongoDB", "MySQL"],
    Libraries: ["TensorFlow", "Pandas", "NumPy", "Matplotlib", "Tailwind CSS", "Bootstrap"],
    Other: ["Machine Learning", "Data Analysis", "RESTful APIs", "Agile Methodology"],
  }

  const projects = [
    {
      title: "E-Commerce Website for DIY Products",
      description:
        "A full-stack e-commerce platform featuring product catalog, shopping cart, user authentication, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Stripe API"],
      link: "#",
    },
    {
      title: "Railway Reservation System",
      description:
        "A comprehensive railway booking system with seat availability, booking management, and user dashboard.",
      technologies: ["Java", "Spring Boot", "MySQL", "HTML/CSS", "JavaScript"],
      link: "#",
    },
    {
      title: "Sentiment Analysis Tool",
      description:
        "Machine learning application that analyzes text sentiment using natural language processing techniques.",
      technologies: ["Python", "TensorFlow", "NLTK", "Flask", "Pandas"],
      link: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Nandan Tandel
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Experience", "Certifications"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                    activeSection === item.toLowerCase() ? "text-cyan-400" : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4 pt-4">
                {["Home", "About", "Skills", "Projects", "Experience", "Certifications"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-left text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center">
                  <Code size={40} className="text-cyan-400" />
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Nandan Tandel
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8">Aspiring Software Engineer | Innovator in Tech</p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                onClick={() => scrollToSection("about")}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <User className="mr-2" size={20} />
                View My Profile
              </Button>
              <Button
                onClick={downloadResume}
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="mailto:nandan.tandel@example.com"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://linkedin.com/in/nandantandel"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://gitlab.com/nandantandel"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="GitLab"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">About Me</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg opacity-80 flex items-center justify-center">
                    <div className="w-32 h-32 bg-black rounded-lg flex items-center justify-center">
                      <Code size={48} className="text-cyan-400" />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  I'm a passionate Computer Engineering student with a strong foundation in software development and
                  emerging technologies. Currently pursuing my BTech degree (2022–2026), I'm dedicated to creating
                  innovative solutions that make a positive impact.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-4"></div>
                    <span className="text-gray-300">BTech in Computer Engineering (2022–2026)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                    <span className="text-gray-300">Passionate about Full-Stack Development</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-4"></div>
                    <span className="text-gray-300">Experienced in Machine Learning & AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card
                  key={category}
                  className="bg-gray-900/50 border-gray-800 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <CardHeader>
                    <CardTitle className="text-cyan-400">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-gray-800 text-gray-300 hover:bg-cyan-400/20 hover:text-cyan-400 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-gray-900 border-gray-800 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
                >
                  <CardHeader>
                    <CardTitle className="text-white">{project.title}</CardTitle>
                    <CardDescription className="text-gray-400">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-cyan-400/50 text-cyan-400">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
                    >
                      <ExternalLink className="mr-2" size={16} />
                      View Project
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-full"
              >
                Check My Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>

            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white">Software Development Intern</CardTitle>
                    <CardDescription className="text-cyan-400">Pawzzz Nonprofit Organization</CardDescription>
                  </div>
                  <Briefcase className="text-cyan-400" size={24} />
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span>Developed and maintained web applications for animal welfare initiatives</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span>Collaborated with cross-functional teams to implement user-friendly features</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span>Contributed to database design and optimization for improved performance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span>Participated in code reviews and followed agile development practices</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>

            <Card className="bg-gray-900 border-gray-800 hover:border-cyan-400/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white">Introduction to Generative AI</CardTitle>
                    <CardDescription className="text-cyan-400">Google Cloud Skills Boost • 2024</CardDescription>
                  </div>
                  <Award className="text-cyan-400" size={24} />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Comprehensive certification covering the fundamentals of generative AI, including machine learning
                  concepts, neural networks, and practical applications in modern software development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Testimonials
              </span>
            </h2>

            <Card className="bg-gray-900/50 border-gray-800 border-dashed">
              <CardContent className="text-center py-16">
                <MessageSquare className="mx-auto mb-4 text-gray-600" size={48} />
                <p className="text-gray-500 text-lg">
                  Testimonials and recommendations will be displayed here as they become available.
                </p>
                <p className="text-gray-600 mt-2">Connect with me to share your experience working together!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Let's Work Together
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Ready to bring innovative ideas to life? Let's connect and create something amazing!
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => window.open("mailto:nandan.tandel@example.com")}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="mr-2" size={20} />
                Hire Me
              </Button>
              <Button
                onClick={() => scrollToSection("projects")}
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Code className="mr-2" size={20} />
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Nandan Tandel
                </h3>
                <p className="text-gray-400 mb-4">
                  Aspiring Software Engineer passionate about creating innovative solutions and contributing to
                  meaningful projects.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Get In Touch</h4>
                <div className="space-y-3">
                  <a
                    href="mailto:nandan.tandel@example.com"
                    className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Mail className="mr-3" size={18} />
                    nandan.tandel@example.com
                  </a>
                  <a
                    href="tel:+1234567890"
                    className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Phone className="mr-3" size={18} />
                    +91 12345 67890
                  </a>
                  <a
                    href="https://linkedin.com/in/nandantandel"
                    className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Linkedin className="mr-3" size={18} />
                    LinkedIn Profile
                  </a>
                  <a
                    href="https://gitlab.com/nandantandel"
                    className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Github className="mr-3" size={18} />
                    GitLab Profile
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-500">
                © 2024 Nandan Tandel. All rights reserved. Built with Next.js and Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
