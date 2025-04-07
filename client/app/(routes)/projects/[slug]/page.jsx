'use client'

import Image from 'next/image'
import projects from '../../../data/projects'
import IconSVG from '@/app/components/ui/iconSVG'
import techStack from '@/app/data/techStack'
import Link from 'next/link'
import { useState } from 'react'
import Lightbox from '@seafile/react-image-lightbox'
import '@seafile/react-image-lightbox/style.css'

const ProjectDetails = ({ params }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const project = projects.find(p => p.slug === params.slug)

  if (!project) return <p className='p-6 text-white'>Loading...</p>

  const allTechnologies = techStack

  return (
    <section className='relative flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black px-4 py-12 text-white sm:px-8 lg:px-16'>
      {/* BACK BUTTON */}
      <Link href='/' passHref>
        <div className='absolute left-4 top-4 md:left-10 md:top-6'>
          <button
            className='flex items-center gap-2 rounded-full bg-gray-800 px-3 py-2 text-sm font-medium text-white shadow transition-all duration-200 hover:scale-105 hover:bg-gray-700'
            aria-label='Back to main page'
          >
            ← Back
          </button>
        </div>
      </Link>

      {/* HERO CONTENT */}
      <div className='mt-6 max-w-3xl space-y-6 text-center'>
        <span className='inline-block rounded-full bg-indigo-600/20 px-4 py-1 text-sm font-medium text-indigo-400 backdrop-blur-md'>
          {project.type || 'Fullstack Project'}
        </span>
        <h1 className='text-4xl font-bold md:text-5xl'>{project.title}</h1>
        <p className='text-lg text-gray-300'>{project.shortDescription}</p>

        {/* CTA Buttons */}
        <div className='mt-6 flex flex-wrap justify-center gap-4'>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow transition hover:bg-indigo-500'
            >
              🔗 Live Demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-lg border border-gray-600 px-5 py-2 text-sm font-medium text-gray-300 transition hover:bg-gray-800'
            >
              🛠 Source Code
            </a>
          )}
        </div>
      </div>

      {/* TECH STACK */}
      <div className='my-20'>
        <p className='my-6'>Technologies implemented in this project :</p>
        <div className='grid grid-cols-3 gap-3 md:grid-cols-6'>
          {allTechnologies.map(tech => {
            const isUsed = project.technologies.includes(tech.name)

            return (
              <div
                key={tech.name}
                className={`rounded-md p-2 transition duration-300 ${
                  isUsed
                    ? 'glow-effect hover:scale-110'
                    : 'scale-95 opacity-30 grayscale'
                } `}
              >
                <IconSVG
                  pathData={tech.pathData}
                  text={tech.name}
                  viewBox={tech.viewBox}
                />
              </div>
            )
          })}
        </div>
      </div>

      {/* DEVIDER */}
      <hr className='mb-24 w-full max-w-5xl border-t border-indigo-500/30 shadow-[0_0_10px_rgba(99,102,241,0.3)]' />

      {/* MAIN IMAGE */}
      <div
        onClick={() => {
          setIsOpen(true)
          setCurrentImage(0)
        }}
        className='relative aspect-[16/9] w-full max-w-3xl cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(99,102,241,0.4)]'
      >
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className='object-cover'
        />
      </div>

      {/* ADDITIONAL IMAGES */}
      {project.images && project.images.length > 0 && (
        <div className='my-10 grid w-full max-w-6xl grid-cols-2 gap-4 md:grid-cols-3'>
          {project.images.map((img, index) => (
            <div
              key={index}
              onClick={() => {
                setIsOpen(true)
                setCurrentImage(index)
              }}
              className='relative aspect-video w-full cursor-pointer overflow-hidden rounded-xl border border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg'
            >
              <Image
                src={img}
                alt={`${project.title} screenshot ${index + 1}`}
                fill
                className='object-cover'
              />
            </div>
          ))}
        </div>
      )}
      {isOpen && (
        <Lightbox
          mainSrc={project.images[currentImage]}
          nextSrc={project.images[(currentImage + 1) % project.images.length]}
          prevSrc={
            project.images[
              (currentImage + project.images.length - 1) % project.images.length
            ]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setCurrentImage(
              (currentImage + project.images.length - 1) % project.images.length
            )
          }
          onMoveNextRequest={() =>
            setCurrentImage((currentImage + 1) % project.images.length)
          }
        />
      )}

      {/* DEVIDER */}
      <hr className='mb-4 mt-16 w-full max-w-5xl border-t border-indigo-500/30 shadow-[0_0_10px_rgba(99,102,241,0.3)]' />

      {/* DETAILED DESCRIPTION */}
      <div className='mx-auto mt-16 max-w-3xl space-y-10 text-white'>
        <h2 className='mb-4 text-center text-2xl font-semibold'>
          Detailed Description
        </h2>

        {project.details?.about && (
          <div className='rounded-lg bg-gray-800 p-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
            <h3 className='mb-2 text-xl font-semibold'>
              📌 What was the project about
            </h3>
            <p className='text-base leading-relaxed text-gray-300'>
              {project.details.about}
            </p>
          </div>
        )}

        {project.details?.role && (
          <div className='rounded-lg bg-gray-800 p-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
            <h3 className='mb-2 text-xl font-semibold'>👨‍💻 My Role</h3>
            <p className='text-base leading-relaxed text-gray-300'>
              {project.details.role}
            </p>
          </div>
        )}

        {project.details?.challenges && (
          <div className='rounded-lg bg-gray-800 p-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
            <h3 className='mb-2 text-xl font-semibold'>
              🚧 Challenges & Solutions
            </h3>
            <p className='text-base leading-relaxed text-gray-300'>
              {project.details.challenges}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectDetails
