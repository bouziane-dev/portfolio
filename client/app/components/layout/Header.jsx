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

            {/* Social Media Icons - Mobile */}
            <div className='flex space-x-4'>
              <a
                href='https://www.linkedin.com/in/bouziane-abderahim-dev/'
                className='text-white'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size='xl'
                  className='transition duration-200 hover:text-purple hover:drop-shadow-[0_0_10px_#13ADC7] active:text-[#0a6c85]'
                />
              </a>
              <a
                href='https://github.com/bouziane-dev'
                className='text-white'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size='xl'
                  className='transition duration-200 hover:text-purple hover:drop-shadow-[0_0_10px_#13ADC7] active:text-[#0a6c85]'
                />
              </a>
              <a
                href='https://www.instagram.com/bouzi_codes/'
                className='text-white'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size='xl'
                  className='transition duration-200 hover:text-purple hover:drop-shadow-[0_0_10px_#13ADC7] active:text-[#0a6c85]'
                />
              </a>
            </div>
          </div>

          {/* Mobile Layout (Row 2): Nav Links */}
          <ul className='flex flex-row justify-between py-5 md:hidden'>
            <li>
              <a
                href='#projects'
                className='text-sm duration-300 hover:text-purple'
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href='#tech'
                className='text-sm duration-300 hover:text-purple'
              >
                Technologies
              </a>
            </li>
            <li>
              <a
                href='#about'
                className='text-sm duration-300 hover:text-purple'
              >
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
                <a
                  href='#projects'
                  className='text-base font-medium duration-300 hover:text-purple'
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href='#tech'
                  className='text-base font-medium duration-300 hover:text-purple'
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href='#about'
                  className='text-base font-medium duration-300 hover:text-purple'
                >
                  About me
                </a>
              </li>
            </ul>

            {/* Social Media Icons - Desktop */}

            <div className='hidden space-x-4 md:flex'>
              <a
                href='https://www.linkedin.com/in/bouziane-abderahim-dev/'
                target='_blank'
                rel='noopener noreferrer'
                className='group text-white transition-transform duration-300 hover:scale-110 hover:text-purple hover:drop-shadow-[0_0_10px_#13ADC7] active:text-[#0a6c85]'
              >
                <FontAwesomeIcon icon={faLinkedin} size='xl' />
              </a>
              <a
                href='https://github.com/bouziane-dev'
                target='_blank'
                rel='noopener noreferrer'
                className='group text-white transition-transform duration-300 hover:scale-110 hover:text-purple hover:drop-shadow-[0_0_10px_#13ADC7] active:text-[#0a6c85]'
              >
                <FontAwesomeIcon icon={faGithub} size='xl' />
              </a>
              <a
                href='https://www.instagram.com/bouzi_codes/'
                target='_blank'
                rel='noopener noreferrer'
                className='group text-white transition-transform duration-300 hover:scale-110 hover:text-purple hover:drop-shadow-[0_0_10px_#13ADC7] active:text-[#0a6c85]'
              >
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
