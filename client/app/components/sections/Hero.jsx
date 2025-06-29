'use client'

import React from 'react'
import Button from '@/app/components/ui/Button'

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/Abderahim-CV.pdf'
    link.download = 'Abderahim-CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <section id='hero' className='relative mb-12 pt-[80px] md:mb-24 md:pt-16'>
      {/* Mobile layout */}
      <div className='block md:hidden'>
        <div id='hero-text' className='mb-8 px-12'>
          <h2 className='my-4 text-2xl font-semibold text-white'>
            <span className='animate-gradient bg-gradient-to-r from-blue via-purple to-violet bg-200% bg-clip-text text-transparent'>
              Hello, I'm Bouzi,
            </span>{' '}
            <br></br>A Web Developer
          </h2>
          <p className='spacing text-sm/relaxed text-lightgray'>
            You need more than just a good looking website, you need speed,
            scalability and a great user experience. Luckily, that's exactly
            what I do !
          </p>
        </div>
        <div id='hero-image' className='relative'>
          <div
            id='avatar'
            className='border-1 absolute left-20 top-[-10px] z-30 h-44 w-44 overflow-hidden rounded-full border-4 border-purple'
          >
            <img
              src='images/avatar-me.jpg'
              alt='avatar'
              className='h-full w-full object-cover'
            />
          </div>

          <img
            id='ellipse'
            src='Hero-ellipse.svg'
            alt='ellipse'
            className='absolute left-[-60px] z-0 h-80 w-80 animate-pulseScale'
          ></img>
          <img
            id='circle'
            src='Hero-circle.svg'
            alt='circle'
            className='absolute left-36 top-20 z-20 h-44 w-44 animate-pulseScale'
          ></img>
          <Button
            id='download-btn'
            text={'Download CV'}
            className={'absolute left-12 top-56 z-40'}
            onClick={handleDownload}
          />
        </div>
      </div>

      {/* Desktop layout */}
      <div className='relative hidden w-full items-center justify-between px-12 md:flex'>
        <div id='hero-text' className='relative z-10 mt-14 flex-1'>
          <h2 className='my-6 text-4xl/relaxed font-semibold text-white lg:text-[40px]/relaxed'>
            <span className='animate-gradient bg-gradient-to-r from-blue via-purple to-violet bg-200% bg-clip-text text-transparent'>
              Hello, I'm Bouzi,
            </span>
            <br />A Web Developer
          </h2>
          <p
            id='desktop-hero-text'
            className='my-6 text-sm text-lightgray md:w-[25rem] lg:w-auto lg:text-base'
          >
            You need more than just a good looking website
            <br />
            You need speed , scalability and a great user experience <br />
            Luckily, that's exactly what I do !
          </p>
          <Button
            text='Download CV'
            className='my-6'
            onClick={handleDownload}
          />
        </div>

        <div
          id='hero-image'
          className='absolute h-[500px] w-[500px] overflow-visible md:right-0 md:top-[-2rem] lg:right-12 lg:top-0'
        >
          <img
            src='Hero-ellipse.svg'
            alt='ellipse'
            className='absolute -right-16 top-20 z-0 h-[24rem] w-[40rem] animate-pulseScale'
          />
          <img
            src='Hero-circle.svg'
            alt='circle'
            className='z-5 absolute right-0 top-48 h-48 w-48 animate-pulseScale'
          />
          <div
            id='avatar'
            className='border-1 absolute right-14 top-16 z-10 h-60 w-60 overflow-hidden rounded-full border-4 border-purple'
          >
            <img
              src='images/avatar-me.jpg'
              alt='avatar'
              className='h-full w-full object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
