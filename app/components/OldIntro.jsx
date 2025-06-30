"use client";

import { useEffect, useState } from "react";
import { Mail, Download, ArrowDown } from "lucide-react";
import ProfileCard from "./ui/ProfileCard";

export default function Intro() {
  const [text, setText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Full-Stack Developer", "Computer Science Student"];

  useEffect(() => {
    let index = 0;
    const currentText = roles[currentRole];

    const timer = setInterval(() => {
      setText(currentText.slice(0, index));
      index++;
      if (index > currentText.length) {
        clearInterval(timer);
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentRole]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const binaryChars = ["0", "1"];
  const matrixColumns = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    chars: Array.from(
      { length: 20 },
      () => binaryChars[Math.floor(Math.random() * 2)]
    ),
    animationDelay: Math.random() * 5,
    color: [
      "text-purple-500/20",
      "text-cyan-500/20",
      "text-blue-500/20",
      "text-violet-500/20",
      "text-indigo-500/20",
    ][Math.floor(Math.random() * 5)],
  }));

  const floatingElements = [
    { icon: "{ }", color: "text-purple-400/30", size: "text-lg" },
    { icon: "< />", color: "text-cyan-400/30", size: "text-xl" },
    { icon: "[ ]", color: "text-blue-400/30", size: "text-lg" },
    { icon: "( )", color: "text-violet-400/30", size: "text-lg" },
    { icon: "=>", color: "text-indigo-400/30", size: "text-lg" },
    { icon: "!=", color: "text-purple-300/30", size: "text-lg" },
    { icon: "++", color: "text-cyan-300/30", size: "text-lg" },
    { icon: "--", color: "text-blue-300/30", size: "text-lg" },
    { icon: "=>", color: "text-violet-300/30", size: "text-lg" },
    { icon: "!=", color: "text-indigo-300/30", size: "text-lg" },
  ];

  return (
    <section
      id="intro"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pb-0 mb-0 bg-slate-950"
    >
      {/* Matrix Background */}
      <div className="absolute inset-0">
        {matrixColumns.map((column) => (
          <div
            key={column.id}
            className={`absolute top-0 ${column.color} text-xs font-mono leading-4 animate-matrix-fall`}
            style={{
              left: `${column.id * 4}%`,
              animationDelay: `${column.animationDelay}s`,
              animationDuration: "12s",
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

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map((element, i) => (
          <div
            key={i}
            className={`absolute ${element.color} font-mono ${element.size} animate-float opacity-40`}
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            {element.icon}
          </div>
        ))}
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 min-h-screen py-20">
          {/* Left: Profile Card */}
          <div className="flex-shrink-0">
            <div className="scale-75 lg:scale-90">
              <ProfileCard
                name="Aditya Jain"
                title="Software Engineer"
                handle="theadityajain"
                status="Online"
                contactText="Contact Me"
                avatarUrl="/images/aditya-avatar.png"
                iconUrl="/images/iconpattern.png"
                grainUrl="/images/grain.webp"
                showUserInfo={true}
                enableTilt={true}
                onContactClick={() => scrollToSection("contact")}
              />
            </div>
          </div>

          {/* Right: Intro Content */}
          <div className="flex flex-col justify-center space-y-8 max-w-lg">
            <div className="space-y-6 font-sans">
              <div className="text-xl text-cyan-300">Hello, I'm</div>
              <h1 className="text-5xl md:text-6xl font-bold text-white font-sans">
                Aditya Jain
              </h1>
              <div className="text-2xl text-cyan-400 font-sans">
                {text}
                <span className="animate-pulse text-purple-400 ml-1">|</span>
              </div>
            </div>

            <div className="space-y-4 text-lg text-slate-300 leading-relaxed font-sans">
              <p>
                Passionate Computer Science student who transforms ideas into
                exceptional digital experiences through clean code and
                innovative solutions.
              </p>
              <p>
                Building scalable applications that make a real difference in
                the world.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={() => scrollToSection("contact")}
                className="group relative px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/25 font-sans"
              >
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                  <span>Get In Touch</span>
                </div>
              </button>

              <a
                href="/projects/AdityaJainResume.pdf"
                download
                className="group relative px-8 py-4 bg-transparent border-2 border-slate-600 hover:border-slate-400 rounded-xl font-semibold text-slate-300 hover:text-white hover:bg-slate-800/50 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm font-sans"
              >
                <div className="flex items-center gap-3">
                  <Download className="h-5 w-5 group-hover:animate-bounce" />
                  <span>Download Resume</span>
                </div>
              </a>
            </div>

            <div className="flex flex-col items-center gap-3 pt-8">
              <button
                onClick={() => scrollToSection("about")}
                className="group p-3 bg-slate-900/50 border border-slate-700/50 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-cyan-400/50 animate-bounce hover:animate-none"
              >
                <ArrowDown className="h-5 w-5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </button>
              <div className="text-slate-600 text-sm font-sans text-center">
                Explore my journey
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
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

        .animate-matrix-fall {
          animation: matrix-fall 12s linear infinite;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
