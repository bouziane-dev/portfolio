import React from 'react'
import Card from '../ui/card'
import projects from '../../data/projects'

const Projects = () => {
  return (
    <section id='projects' className='mt-96 px-3 py-2 md:mt-0'>
      <h2 className='mb-8 pl-3 text-lg font-medium text-white md:text-xl'>
        Projects
      </h2>
      <div className='grid-cols-1 justify-items-center gap-x-4 sm:grid md:grid-cols-2'>
        {projects.map(project => (
          <Card
            key={project.id}
            title={project.title}
            shortDescription={project.shortDescription}
            imgUrl={project.image}
            slug={project.slug}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
