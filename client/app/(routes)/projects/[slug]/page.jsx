'use client'
import Image from 'next/image'
import projects from '../../../data/projects'
import { useRouter } from 'next/navigation'

const ProjectDetails = ({ params }) => {
  console.log('===================')

  console.log(params)

  const project = projects.find(p => p.slug === params.slug)

  if (!project) return <p className='p-6 text-white'>Loading...</p>

  return (
    <div className='p-6 text-white'>
      <h1 className='mb-4 text-3xl font-bold'>{project.title}</h1>
      <div className='relative mb-6 h-80 w-full max-w-3xl'>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className='object-fit-cover rounded-lg'
        />
      </div>
      <p className='text-lg'>
        Full description for <strong>{project.title}</strong> will go here...
      </p>
    </div>
  )
}

export default ProjectDetails
