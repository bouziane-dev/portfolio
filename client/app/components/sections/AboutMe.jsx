import React from 'react'

const AboutMe = () => {
  const events = [
    {
      year: '2012',
      text: 'Graduated KTC (Krasnodar Technical College) lorem ipsum dolor'
    },
    {
      year: '2016',
      text: 'Underwent a digital marketing course dkkas kasdkjasdkjd asduaskd ksdakdaksd kashdka'
    },
    {
      year: '2021',
      text: 'Became more interested in IT and programming skhdk askhdkas asdkhaskd kuahdkuhas'
    },
    {
      year: '2022',
      text: 'Worked on frontend development daskjdasjd sakjd ajsdlja sakdjalj sakdla kdsajdlja asidhlajs djsaldj daksjdlkj'
    }
  ]

  return (
    <section id='about' className='mt-20 px-3 py-2 md:mt-32'>
      <h2 className='mb-10 pl-3 text-lg font-medium text-white md:text-xl'>
        About Me
      </h2>

      <div>
        <div className='relative hidden w-full items-start md:flex'>
          <div className='relative hidden w-full items-start justify-center gap-x-8 md:flex md:gap-x-16'>
            {/* Horizontal Line */}
            <div className='absolute left-0 top-10 h-0.5 w-full bg-white'></div>

            {events.map((event, index) => (
              <div
                key={index}
                className='relative flex min-w-[120px] flex-col items-center'
              >
                {/* Year */}
                <div className='mt-2 flex justify-center text-center text-sm text-white md:text-base'>
                  {event.year}
                </div>

                {/* Circle with Gradient */}
                <div className='relative z-30 flex h-4 w-4 items-center justify-center'>
                  <div className='h-4 w-4 rounded-full bg-gradient-to-r from-blue via-purple to-violet'></div>
                </div>

                {/* Text Content - Responsive Spacing */}
                <p className='mt-4 text-start text-base leading-relaxed text-gray-400'>
                  {event.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Timeline for Mobile */}
        <div className='relative flex flex-col space-y-6 md:hidden'>
          {/* Timeline Line */}
          <div className='absolute left-[7px] top-0 mt-[30px] h-3/4 w-[2px] bg-white'></div>

          {events.map((event, index) => (
            <div key={index} className='relative flex items-start'>
              {/* Circle and Line Combined */}
              <div className='relative flex flex-col items-center'>
                <div className='z-10 h-4 w-4 animate-gradient rounded-full bg-gradient-to-r from-blue via-purple to-violet'></div>
              </div>
              {/* Text Content */}
              <div className='ml-6'>
                <div className='font-semibold text-white'>{event.year}</div>
                <p className='text-sm text-gray-400'>{event.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutMe
