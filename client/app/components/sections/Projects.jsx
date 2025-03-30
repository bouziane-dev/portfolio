import React from 'react'
import Card from '../ui/Card'

const Projects = () => {
  return (
    <section className='mt-96 px-3 py-2 md:mt-0'>
      <h2 className='mb-4 pl-3 text-xl font-medium text-white md:text-3xl'>
        Projects
      </h2>
      <div className='grid-cols-1 sm:grid md:grid-cols-2'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  )
}

export default Projects
