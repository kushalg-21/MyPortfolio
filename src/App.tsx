import { About } from './components/About'
import { BackToTop } from './components/BackToTop'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Interests } from './components/Interests'
import { Skills } from './components/Skills'
import { Work } from './components/Work'

export default function App() {
  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Work />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Interests />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
