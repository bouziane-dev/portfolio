import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='mt-20 grid-cols-2 gap-3 md:flex md:justify-around'>
      <p className='animate-glow text-sm text-white'>feel free to contact</p>
      <p className='text-sm text-white'>bouziane.abderahim.dev@gmail.com</p>
      <p className='text-sm text-white'>Telegram @bouzid</p>
      {/* Social Media Icons */}
      <div className='flex space-x-4'>
        <a href='#' className='text-white hover:text-blue-500'>
          <FontAwesomeIcon icon={faLinkedin} size='xl' />
        </a>
        <a href='#' className='text-white hover:text-gray-800'>
          <FontAwesomeIcon icon={faGithub} size='xl' />
        </a>
        <a href='#' className='text-white hover:text-blue-400'>
          <FontAwesomeIcon icon={faInstagram} size='xl' />
        </a>
      </div>
    </div>
  )
}

export default Footer
