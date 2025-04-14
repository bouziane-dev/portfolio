import React from 'react'
import Header from '@/app/components/layout/Header'
import Hero from '@/app/components/sections/Hero'
import Projects from '@/app/components/sections/Projects'
import Technologies from '@/app/components/sections/Technologies'
import AboutMe from '@/app/components/sections/AboutMe'
import Footer from '@/app/components/layout/Footer'

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
