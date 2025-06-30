"use client"

import { Mail, Download, ArrowDown, Code, Cpu, Database } from 'lucide-react'
import { useEffect, useState } from "react"

export default function Intro() {
  const [text, setText] = useState("")
  const [currentRole, setCurrentRole] = useState(0)
  const [terminalText, setTerminalText] = useState("")
  const roles = ["Full-Stack Developer" ,"Computer Science Student"]
  const terminalCommands = [
    "$ whoami",
    "aditya_jain",
    "$ cat skills.txt",
    "React, Node.js, Python, Java...",
    "$ git status",
    "Ready to collaborate!",
  ]

  useEffect(() => {
    let index = 0
    const currentText = roles[currentRole]

    const timer = setInterval(() => {
      setText(currentText.slice(0, index))
      index++
      if (index > currentText.length) {
        clearInterval(timer)
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [currentRole])

  useEffect(() => {
    let commandIndex = 0
    let charIndex = 0
    let currentText = ""

    const terminalTimer = setInterval(() => {
      if (commandIndex < terminalCommands.length) {
        const currentCommand = terminalCommands[commandIndex]

        if (charIndex < currentCommand.length) {
          currentText += currentCommand[charIndex]
          setTerminalText(currentText)
          charIndex++
        } else {
          // Command finished, add newline and move to next command
          currentText += "\n"
          setTerminalText(currentText)
          commandIndex++
          charIndex = 0

          // Add a pause between commands
          if (commandIndex < terminalCommands.length) {
            setTimeout(() => {}, 300)
          }
        }
      } else {
        // All commands finished, reset after a delay
        setTimeout(() => {
          setTerminalText("")
          currentText = ""
          commandIndex = 0
          charIndex = 0
        }, 4000)
      }
    }, 60)

    return () => clearInterval(terminalTimer)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Binary rain effect
  const binaryChars = ["0", "1"]
  const matrixColumns = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    chars: Array.from({ length: 15 }, () => binaryChars[Math.floor(Math.random() * 2)]),
    animationDelay: Math.random() * 5,
  }))

  return (
    <section
      id="intro"
      className="min-h-screen flex items-center justify-center relative bg-gray-950 overflow-hidden pb-0 mb-0"
    >
      {/* Matrix/Binary Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black"></div>
        {matrixColumns.map((column) => (
          <div
            key={column.id}
            className="absolute top-0 text-green-500/20 text-xs font-mono leading-4 animate-matrix-fall"
            style={{
              left: `${column.id * 5}%`,
              animationDelay: `${column.animationDelay}s`,
              animationDuration: "10s",
            }}
          >
            {column.chars.map((char, index) => (
              <div key={index} className="opacity-60">
                {char}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {["{ }", "< />", "[ ]", "( )", "&&", "||", "++", "--"].map((symbol, i) => (
          <div
            key={i}
            className="absolute text-green-400/20 font-mono text-sm md:text-lg animate-float opacity-40"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Name with Code Styling */}
        <div className="px-2 sm:px-5 py-10 sm:py-16 lg:py-20 pb-0">
          

          {/* Main Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 relative font-mono">
            <span className="text-white">Aditya</span>
            <span className="text-green-400">.</span>
            <span className="text-orange-400">Jain</span>
            <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-20 sm:w-32 h-0.5 bg-gradient-to-r from-green-400 to-orange-400 rounded-full"></div>
          </h1>

          {/* Dynamic Role with Icons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <div className="flex gap-2 mb-2 sm:mb-0">
              <Cpu className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 animate-pulse" />
              <Database
                className="h-4 w-4 sm:h-5 sm:w-5 text-orange-400 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
              <Code className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400 animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300 font-mono text-center">
              <span className="text-green-400">class </span>
              {text}
              <span className="animate-pulse text-orange-400 ml-1">_</span>
            </h2>
          </div>

          {/* Code Comment Description */}
          <div className="text-left max-w-xs sm:max-w-lg md:max-w-2xl mx-auto mb-6 sm:mb-8 font-mono text-xs sm:text-sm">
            <div className="text-gray-500">/* </div>
            <div className="text-gray-300 ml-2 sm:ml-4 leading-relaxed">
              I create exceptional digital experiences through clean code and innovative solutions.
              <br className="hidden sm:block" />
              Passionate about building scalable web applications that make a difference.
            </div>
            <div className="text-gray-500">*/</div>
          </div>

          {/* Terminal Window */}
          <div className="bg-gray-900/90 border border-gray-700 rounded-xl p-3 sm:p-4 mb-6 sm:mb-8 max-w-xs sm:max-w-md mx-auto backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2 sm:mb-3 pb-2 border-b border-gray-700">
              <div className="flex gap-1">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-xs text-gray-400 font-mono ml-2">terminal</span>
            </div>
            <div className="text-left font-mono text-xs sm:text-sm text-green-400 h-24 sm:h-32 overflow-hidden">
              <pre className="whitespace-pre-wrap">{terminalText}</pre>
              <span className="animate-pulse">_</span>
            </div>
          </div>

          {/* Action Buttons with Code Style */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <button
              onClick={() => scrollToSection("contact")}
              className="group px-6 sm:px-8 py-3 bg-green-600 hover:bg-green-700 text-black font-semibold rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 font-mono w-full sm:w-auto"
            >
              <Mail className="h-4 w-4 group-hover:rotate-6 transition-transform" />
              <span>contact()</span>
            </button>
            <a
              href="/projects/AdityaJainResume.pdf"
              download
              className="group px-6 sm:px-8 py-3 bg-gray-800 border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 font-mono w-full sm:w-auto"
            >
              <Download className="h-4 w-4 group-hover:animate-bounce" />
              <span>resume.pdf</span>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center gap-2 mb-0">
            <button
              onClick={() => scrollToSection("about")}
              className="group p-2 sm:p-3 bg-gray-900/30 border border-gray-700 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-green-400 animate-bounce hover:animate-none"
            >
              <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500 group-hover:text-green-400 transition-colors" />
            </button>

            <div className="text-gray-600 text-xs sm:text-sm font-mono animate-fade-in-up text-center">
              <span className="text-gray-500">// </span>
              <span>Scroll to explore more</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(15deg);
          }
          75% {
            transform: rotate(-15deg);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes matrix-fall {
          0% {
            transform: translateY(-100vh);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }

        .animate-matrix-fall {
          animation: matrix-fall 10s linear infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 2s both;
        }
      `}</style>
    </section>
  )
}
