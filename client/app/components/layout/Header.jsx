import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'

const Header = () => {
  return (
    <header className='w-full text-white'>
      <nav className='w-full'>
        <div className='mx-auto max-w-6xl px-6 py-4'>
          {/* Mobile Layout (Row 1): Logo & Socials */}
          <div className='flex items-center justify-between md:hidden'>
            <a href='#' className='text-2xl font-bold text-white'>
              MyPortfolio
            </a>

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

          {/* Mobile Layout (Row 2): Nav Links */}
          <ul className='flex flex-row justify-between py-5 md:hidden'>
            <li>
              <a href='#about' className='text-sm hover:text-blue-600'>
                Projects
              </a>
            </li>
            <li>
              <a href='#projects' className='text-sm hover:text-blue-600'>
                Technologies
              </a>
            </li>
            <li>
              <a href='#contact' className='text-sm hover:text-blue-600'>
                About me
              </a>
            </li>
          </ul>

          {/* Desktop Layout: Inline Logo - Nav Links - Socials */}
          <div className='hidden items-center justify-between md:flex xl:mx-10'>
            <a href='#' className='text-2xl font-bold text-white'>
              MyPortfolio
            </a>

            {/* Nav Links */}
            <ul className='flex space-x-6 text-base'>
              <li>
                <a href='#about' className='hover:text-blue-600'>
                  Projects
                </a>
              </li>
              <li>
                <a href='#projects' className='hover:text-blue-600'>
                  Technologies
                </a>
              </li>
              <li>
                <a href='#contact' className='hover:text-blue-600'>
                  About me
                </a>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className='bg-dark flex space-x-4'>
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
        </div>
      </nav>
    </header>
  )
}

export default Header
