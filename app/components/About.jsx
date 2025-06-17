"use client"

import { useState } from "react"
import { Code, Coffee, Calendar, MapPin, User, Briefcase, GraduationCap, Terminal } from "lucide-react"

export default function About() {
  const [activeTab, setActiveTab] = useState("bio")

  const tabs = [
    { id: "bio", label: "Bio", icon: <User className="h-4 w-4" /> },
    { id: "journey", label: "Journey", icon: <GraduationCap className="h-4 w-4" /> },
    { id: "workspace", label: "Workspace", icon: <Briefcase className="h-4 w-4" /> },
  ]

  const journeyData = [
    {
      year: "2024",
      title: "Advanced Web Development",
      description: "Mastering modern frameworks and building complex applications",
      status: "current",
    },
    {
      year: "2023",
      title: "Full-Stack Projects",
      description: "Started building end-to-end applications with React and Node.js",
      status: "completed",
    },
    {
      year: "2022",
      title: "Computer Science Journey",
      description: "Began studying CS fundamentals and programming languages",
      status: "completed",
    },
    {
      year: "2018",
      title: "First Line of Code",
      description: "Hello World in C++ - the beginning of everything",
      status: "completed",
    },
  ]

  const workspaceStats = [
    { label: "Lines of Code", value: "50,000+", icon: <Code className="h-5 w-5 text-green-400" /> },
    { label: "Projects Built", value: "25+", icon: <Terminal className="h-5 w-5 text-blue-400" /> },
    { label: "Coffee Consumed", value: "∞", icon: <Coffee className="h-5 w-5 text-orange-400" /> },
    { label: "Years Learning", value: "3+", icon: <Calendar className="h-5 w-5 text-purple-400" /> },
  ]

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute text-green-500/20 font-mono text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {["function", "const", "return", "import", "export", "class"][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-gray-900/80 border border-green-500/30 rounded-xl mb-6 backdrop-blur-sm">
            <Terminal className="h-4 w-4 text-green-400" />
            <span className="text-sm text-gray-300 font-mono">about.developer</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
            <span className="text-green-400">const </span>
            <span className="text-white">aboutMe</span>
            <span className="text-orange-400"> = {`{`}</span>
          </h2>

          <div className="w-32 h-0.5 bg-gradient-to-r from-green-400 to-orange-400 mx-auto"></div>
        </div>

        {/* Main Content - Full Width Tabbed Interface */}
        <div className="bg-gray-900/80 border border-gray-700 rounded-xl backdrop-blur-sm max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-mono text-sm transition-colors flex-1 justify-center ${
                  activeTab === tab.id
                    ? "bg-gray-800 text-green-400 border-b-2 border-green-400"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === "bio" && (
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                    AJ
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">Aditya Jain</h3>
                    <p className="text-green-400 font-mono text-lg">Computer Science Student</p>
                    <div className="flex items-center gap-2 mt-3 text-gray-400">
                      <MapPin className="h-4 w-4" />
                      <span>India</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                  <p>
                    Hey there! I'm a passionate Computer Science student who fell in love with coding and hasn't looked
                    back since. My journey started with a simple "Hello World" and has evolved into building full-stack
                    applications that solve real problems.
                  </p>
                  <p>
                    I believe in writing clean, efficient code and staying curious about new technologies. When I'm not
                    debugging or learning a new framework, you'll find me exploring the latest in web development or
                    contributing to open-source projects.
                  </p>
                  <p>
                    Currently focused on mastering modern web technologies while building projects that make a
                    difference. Always excited to collaborate and learn from fellow developers!
                  </p>
                </div>
              </div>
            )}

            {activeTab === "journey" && (
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-white mb-8">My Development Journey</h3>
                <div className="space-y-6">
                  {journeyData.map((item, index) => (
                    <div key={index} className="flex gap-6">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-5 h-5 rounded-full ${
                            item.status === "current" ? "bg-green-400 animate-pulse" : "bg-gray-600"
                          }`}
                        ></div>
                        {index < journeyData.length - 1 && <div className="w-0.5 h-20 bg-gray-700 mt-3"></div>}
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-green-400 font-mono font-bold text-lg">{item.year}</span>
                          {item.status === "current" && (
                            <span className="px-3 py-1 bg-green-400/20 text-green-400 text-sm rounded-full font-mono">
                              Current
                            </span>
                          )}
                        </div>
                        <h4 className="text-white font-semibold mb-2 text-lg">{item.title}</h4>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "workspace" && (
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-white mb-8">Developer Stats</h3>
                <div className="grid grid-cols-2 gap-6">
                  {workspaceStats.map((stat, index) => (
                    <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center">
                      <div className="flex justify-center mb-3">{stat.icon}</div>
                      <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <h4 className="text-white font-semibold mb-6 text-lg">Current Focus</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-300 text-lg">Building scalable web applications</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-300 text-lg">Learning advanced React patterns</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-300 text-lg">Exploring cloud technologies</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Closing Brace */}
        <div className="text-center mt-16">
          <span className="text-4xl font-bold text-orange-400 font-mono">{`}`}</span>
        </div>
      </div>
    </section>
  )
}
