import Navbar from "./components/Navbar"
import Intro from "./components/Intro"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ParticleBackground from "./components/ParticleBackground"
import ScrollProgress from "./components/ScrollProgress"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <ParticleBackground />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
