import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className='mb-6 mt-20 grid grid-cols-2 justify-items-center gap-x-3 gap-y-6 md:flex md:justify-around'>
      <p className='animate-gradient bg-gradient-to-r from-[#13ADC7] via-[#6978D1] to-[#945DD6] bg-200% bg-clip-text text-sm font-medium text-transparent drop-shadow-[0_0_8px_rgba(148,93,214,0.6)]'>
        Feel free to contact
      </p>

      <p className='hidden text-sm text-white md:flex'>
        bouziane.abderahim.dev@gmail.com
      </p>

      {/* Social Media Icons for Mobile */}
      <div className='flex space-x-5 md:hidden'>
        <a
          href='https://www.linkedin.com/in/bouziane-abderahim-dev/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-white transition duration-200 hover:text-purple hover:drop-shadow-[0_0_10px_#13ADC7] active:text-[#0a6c85]'
        >
          <FontAwesomeIcon icon={faLinkedin} size='xl' />
        </a>
        <a
          href='https://github.com/bouziane-dev'
          target='_blank'
          rel='noopener noreferrer'
          className='text-white transition duration-200 hover:text-purple hover:drop-shadow-[0_0_10px_#13ADC7] active:text-[#0a6c85]'
        >
          <FontAwesomeIcon icon={faGithub} size='xl' />
        </a>
        <a
          href='https://www.instagram.com/bouzi_codes/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-white transition duration-200 hover:text-purple hover:drop-shadow-[0_0_10px_#13ADC7] active:text-[#0a6c85]'
        >
          <FontAwesomeIcon icon={faInstagram} size='xl' />
        </a>
      </div>

      {/* Copy email to clipboard (mobile) */}
      <a className='cursor-pointer text-sm text-white md:hidden'>Email</a>

      <p className='text-sm text-white'>Telegram @bouzi_codes</p>

      {/* Social Media Icons */}
      <div className='hidden space-x-4 md:flex'>
        <a
          href='https://www.linkedin.com/in/bouziane-abderahim-dev/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-white transition duration-200 hover:text-purple hover:drop-shadow-[0_0_10px_#13ADC7] active:text-[#0a6c85]'
        >
          <FontAwesomeIcon icon={faLinkedin} size='xl' />
        </a>
        <a
          href='https://github.com/bouziane-dev'
          target='_blank'
          rel='noopener noreferrer'
          className='text-white transition duration-200 hover:text-purple hover:drop-shadow-[0_0_10px_#13ADC7] active:text-[#0a6c85]'
        >
          <FontAwesomeIcon icon={faGithub} size='xl' />
        </a>
        <a
          href='https://www.instagram.com/bouzi_codes/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-white transition duration-200 hover:text-purple hover:drop-shadow-[0_0_10px_#13ADC7] active:text-[#0a6c85]'
        >
          <FontAwesomeIcon icon={faInstagram} size='xl' />
        </a>
      </div>
    </footer>
  )
}

export default Footer
