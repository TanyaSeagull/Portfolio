import React from 'react'
import Header from './components/Header/Header'
import About from './sections/About/About'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'
import Contact from './sections/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App