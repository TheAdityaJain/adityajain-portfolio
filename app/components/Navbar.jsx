"use client"

import { useState, useEffect } from "react"
import { Menu, X, Code2 } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-sm border-b border-gray-700" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between md:justify-between justify-center items-center py-8 md:py-6 relative">
          <div className="flex items-center space-x-3 md:space-x-2 md:relative absolute left-1/2 transform -translate-x-1/2 md:transform-none md:left-auto">
            <Code2 className="h-10 w-10 md:h-8 md:w-8 text-blue-400" />
            <span className="text-2xl md:text-xl font-bold whitespace-nowrap">Aditya Jain</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["about", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-white transition-colors capitalize text-base"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute right-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 md:p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
            >
              {isOpen ? <X className="h-7 w-7 md:h-6 md:w-6" /> : <Menu className="h-7 w-7 md:h-6 md:w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-900 rounded-lg mt-2 p-6 mb-6">
            {["about", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-4 text-gray-300 hover:text-white transition-colors capitalize text-lg font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
