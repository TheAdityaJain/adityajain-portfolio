import { Code, Palette, Server, Smartphone, Triangle } from "lucide-react"
import { Database, Globe, Layout, Terminal,  } from 'lucide-react';

export default function Skills() {
  const skills = [
    { name: 'React & Next.js', icon: Code, category: 'Frontend', color: '#61DAFB' },
    { name: 'UI/UX Design', icon: Layout, category: 'Frontend', color: '#FF4B4B' },
    { name: 'CSS & Tailwind', icon: Palette, category: 'Frontend', color: '#38B2AC' },
    { name: 'Node.js', icon: Server, category: 'Backend', color: '#339933' },
    { name: 'Python', icon: Terminal, category: 'Backend', color: '#3776AB' },
    { name: 'Vercel', icon: Triangle, category: 'Deploy', color: '#336791' },
    { name: 'MySQL/MongoDB', icon: Database, category: 'Database', color: '#47A248' },
    { name: 'REST APIs', icon: Globe, category: 'API', color: '#FF6C37' },
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

      {/* Skills Section */}
        <div className="space-y-8">             
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="group bg-white/5 backdrop-blur border border-white/10 rounded-xl p-3 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex flex-col items-center text-center space-y-2">
                      <skill.icon className="w-6 h-6 transition-colors duration-300" style={{ color: skill.color }} />
                      <div className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </div>
                    </div>
                  </div>
                ))}
                </div>
          </div>

      </div>
    </section>
  )
}
