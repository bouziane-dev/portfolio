import React from 'react'
import Button from './Button'
import GithubButton from './GithubButton'

const Card = () => {
  return (
    <div className='mx-2 my-4 flex flex-col rounded-2xl border border-[#6978D1] p-6'>
      <img
        className='rounded-t-lg'
        src='https://tecdn.b-cdn.net/img/new/standard/city/041.webp'
        alt='Hollywood Sign on The Hill'
      />

      <div className='py-4'>
        <h5 className='mb-2 mt-4 text-lg font-medium leading-tight text-white md:text-xl'>
          Card title
        </h5>
        <p className='mb-8 text-sm text-lightgray md:text-base'>
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
      <div className='flex flex-row justify-around'>
        <Button
          className={'px-4 md:mr-2 md:w-full md:px-8 md:text-base'}
          text={'View more'}
        />
        <GithubButton />
      </div>
    </div>
  )
}

export default Card
