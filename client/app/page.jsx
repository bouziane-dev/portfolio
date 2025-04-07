import React from 'react'
import Header from './components/layout/header'
import Hero from './components/sections/hero'
import Projects from './components/sections/projects'
import Technologies from './components/sections/technologies'
import AboutMe from './components/sections/aboutMe'
import Footer from './components/layout/footer'

const page = () => {
  return (
    <section className='py-2 lg:px-20'>
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

export default page
