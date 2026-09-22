import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import ScrollReveal from './components/ScrollReveal'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <ScrollReveal direction="up"><Skills /></ScrollReveal>
        <ScrollReveal direction="up"><Experience /></ScrollReveal>
        <ScrollReveal direction="up"><Projects /></ScrollReveal>
        <ScrollReveal direction="up"><Contact /></ScrollReveal>
      </main>
    </div>
  )
}

export default App
