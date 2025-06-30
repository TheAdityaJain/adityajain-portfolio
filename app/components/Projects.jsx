import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Balatro from "./ui/Balatro"

export default function Projects() {
  const projects = [
    {
      title: "LumiFlix",
      description:
        "A full-stack responsive solution with React, Node.js, and TailwindCSS. Features include dynamic movie search engine, streaming platform. ",
      image: "/images/LumiFlix.png",
      technologies: ["React", "Node.js", "Python", "TailwindCSS", "Flask"],
      liveUrl: "https://lumi-flix.vercel.app/",
      githubUrl: "https://github.com/TheAdityaJain/LumiFlix-MovieStreamingApplication",
    },
    {
      title: "Portfolio",
      description:
        "A modern, responsive, and minimal portfolio website built using Next.js and React, styled with Tailwind CSS and enhanced using Lucide Icons. This site showcases my skills as a Full-Stack Developer, highlighting my technical strengths, personal projects. ",
      image: "/images/Portfolio.png",
      technologies: ["React", "Next.js", "TailwindCSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Dummy Project",
      description:
        "An interactive dummy dashboard that provides real-time dummy data, dummy, and dummy visualizations using dummy.js.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Next.js", "Tailwind CSS", "Vercel"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Balatro Background */}
      <div className="absolute inset-0">
        <Balatro
          isRotate={false}
          mouseInteraction={true}
          pixelFilter={2000}
          color1="#1e293b"
          color2="#0f172a"
          color3="#020617"
          contrast={2.5}
          lighting={0.3}
          spinSpeed={3.0}
          spinAmount={0.15}
        />
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-black/80 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:bg-black/90 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative h-64">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-200 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-600/80 backdrop-blur-sm text-white text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="px-4 py-2 bg-blue-600/80 hover:bg-blue-700/80 backdrop-blur-sm text-white rounded-xl transition-colors flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="px-4 py-2 border border-gray-500/50 text-white hover:bg-gray-600/50 backdrop-blur-sm rounded-xl transition-colors flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
