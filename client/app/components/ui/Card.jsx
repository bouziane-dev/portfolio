import React from 'react'
import Button from './button'
import GithubButton from './githubButton'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({ title, shortDescription, imgUrl, slug }) => {
  return (
    <div className='mx-2 my-4 flex w-full flex-col rounded-2xl border border-purple p-6 md:w-full lg:max-w-[400px] xl:max-w-none'>
      <div className='relative h-52 w-full overflow-hidden rounded-t-lg'>
        <Image
          src={imgUrl}
          alt='project-image'
          fill
          sizes='100%'
          className='object-fit-cover rounded-t-lg'
        />
      </div>

      <div className='py-4'>
        <h5 className='mb-2 mt-4 text-base font-medium leading-tight text-white md:text-xl'>
          {title}
        </h5>
        <p className='mb-8 text-sm text-lightgray'>{shortDescription}</p>
      </div>

      <div className='flex flex-row justify-around'>
        <Link href={`/projects/${slug}`} className='md:mr-2 md:w-full'>
          <Button className='px-4 md:w-full md:px-8' text='View more' />
        </Link>
        <GithubButton />
      </div>
    </div>
  )
}

export default Card
