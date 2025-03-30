import React from 'react'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Technologies from './components/sections/Technologies'
import AboutMe from './components/sections/Aboutme'
import Footer from './components/layout/Footer'

const Home = () => {
  return (
    <section className='py-2'>
      <div className='container'>
        <Header />
        <Hero />
        <Projects />
        <Technologies />
        <AboutMe />
        <Footer />
      </div>
    </section>
  )
}

export default Home
