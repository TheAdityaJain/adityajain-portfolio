"use client"

import { Github, Linkedin, Instagram, Mail, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/TheAdityaJain", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/TheAdityaJain2010/", label: "LinkedIn" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com/theadityajain_", label: "Instagram" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:jain.aditya1020@gmail.com", label: "Email" },
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace("#", ""))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Aditya Jain</h3>
            <p className="text-gray-300 leading-relaxed">
              Full-Stack Developer passionate about creating exceptional digital experiences through clean code and
              innovative solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-900 rounded-lg transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-2 text-gray-300">
              <p>jain.aditya1020@gmail.com</p>
              <p>+91 7588221422</p>
              <p>Pune, Maharashtra</p>
            </div>
            <a
              href="mailto:jain.aditya1020@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <Mail className="h-4 w-4" />
              Hire Me
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {currentYear} Aditya Jain. All rights reserved.</p>
            <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
