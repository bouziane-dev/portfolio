import React from 'react'
import Button from '../ui/button'

const Hero = () => {
  return (
    <section id='hero' className='relative mb-12 pt-[80px] md:mb-24 md:pt-16'>
      {/* Mobile layout */}
      <div className='block md:hidden'>
        <div id='hero-text' className='mb-8 px-12'>
          <h2 className='my-4 text-2xl font-semibold text-white'>
            <span className='animate-gradient bg-gradient-to-r from-blue via-purple to-violet bg-200% bg-clip-text text-transparent'>
              Hello, I'm Rahim,
            </span>{' '}
            <br></br>A Web Developer
          </h2>
          <p className='spacing text-sm/relaxed text-lightgray'>
            Former digital-marketing specialist, seeking to apply competent
            development skills with focus on collaboration, communication,
            and passion
          </p>
        </div>
        <div id='hero-image' className='relative'>
          <img
            id='avatar'
            src='images/avatar.png'
            alt='avatar'
            className='absolute left-6 top-[-28px] z-30 h-64 w-64'
          ></img>
          <img
            id='ellipse'
            src='Hero-ellipse.svg'
            alt='ellipse'
            className='absolute left-[-60px] z-0 h-80 w-80'
          ></img>
          <img
            id='circle'
            src='Hero-circle.svg'
            alt='circle'
            className='absolute left-36 top-20 z-20 h-44 w-44'
          ></img>
          <Button
            text={'Download CV'}
            className={'absolute left-12 top-56 z-40'}
          />
        </div>
      </div>

      {/* Desktop layout */}
      <div className='relative hidden w-full items-center justify-between px-12 md:flex'>
        <div id='hero-text' className='relative z-10 mt-14 flex-1'>
          <h2 className='my-6 text-4xl/relaxed font-semibold text-white'>
            <span className='animate-gradient bg-gradient-to-r from-blue via-purple to-violet bg-200% bg-clip-text text-transparent'>
              Hello, I'm Rahim,
            </span>
            <br />A Web Developer
          </h2>
          <p
            id='desktop-hero-text'
            className='my-6 text-sm text-lightgray md:w-[25rem] lg:w-auto'
          >
            Giving your online presence a boost with a responsive modern website
            <br />
            From a clean frontend to a solid backend , I got you covered
          </p>
          <Button text='Download CV' className='my-6' />
        </div>

        <div
          id='hero-image'
          className='absolute h-[500px] w-[500px] overflow-visible md:right-0 md:top-[-2rem] lg:right-12 lg:top-0'
        >
          <img
            src='Hero-ellipse.svg'
            alt='ellipse'
            className='absolute -right-16 top-20 z-0 h-[24rem] w-[40rem]'
          />
          <img
            src='Hero-circle.svg'
            alt='circle'
            className='z-5 absolute right-0 top-48 h-48 w-48'
          />
          <img
            src='images/avatar.png'
            alt='avatar'
            className='absolute right-10 top-12 z-10 h-80 w-80'
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
