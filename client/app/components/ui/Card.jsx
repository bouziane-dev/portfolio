import React from 'react'
import Button from './Button'
import GithubButton from './GithubButton'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({ title, shortDescription, imgUrl, slug, repoUrl }) => {
  return (
    <div className='group mx-2 my-4 flex w-full flex-col rounded-2xl border border-white/20 bg-transparent p-6 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-white/5 md:w-full lg:max-w-[400px] xl:max-w-none'>
      <div className='relative h-52 w-full overflow-hidden rounded-t-lg'>
        <Image
          src={imgUrl}
          alt='project-image'
          fill
          sizes='100%'
          className='object-cover transition-transform duration-300 group-hover:scale-105'
        />
      </div>

      <div className='py-4'>
        <h5 className='mb-2 mt-4 text-base font-medium leading-tight text-white transition-colors duration-300 group-hover:text-purple md:text-xl'>
          {title}
        </h5>
        <p className='mb-8 text-sm text-lightgray'>{shortDescription}</p>
      </div>

      <div className='flex flex-row gap-4'>
        <Link href={`/projects/${slug}`} className='w-full'>
          <Button className='w-full px-4 md:px-8' text='View more' />
        </Link>
        <div className='w-full'>
          <Link href={repoUrl} target='_blank'>
            <GithubButton />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
