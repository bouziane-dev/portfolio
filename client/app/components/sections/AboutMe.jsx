import React from 'react'

const AboutMe = () => {
  const events = [
    { year: '2011', text: 'Graduated KTC (Krasnodar Technical College)...' },
    { year: '2016', text: 'Underwent a digital marketing course...' },
    { year: '2021', text: 'Became more interested in IT and programming...' },
    { year: '2022', text: 'Worked on frontend development...' }
  ]

  return (
    <section className='mt-20 px-3 py-2 md:mt-32'>
      <h2 className='mb-8 pl-3 text-xl font-medium text-white md:text-3xl'>
        About Me
      </h2>

      <div>
        <div className='relative hidden items-center justify-between md:flex'>
          {/* Horizontal Timeline */}
          {events.map((event, index) => (
            <div key={index} className='relative flex w-1/4 flex-col'>
              <div className='mt-2 w-48 text-center text-white'>
                {event.year}
              </div>
              <div className='z-30 ml-4 h-4 w-4 rounded-full bg-blue-400'></div>

              <p className='mt-2 w-48 text-sm text-gray-400'>{event.text}</p>
            </div>
          ))}
          {/* Timeline Line */}
          <div className='absolute left-0 top-10 h-0.5 w-3/4 bg-white'></div>
        </div>

        {/* Vertical Timeline for Mobile */}
        <div className='flex flex-col space-y-6 md:hidden'>
          {events.map((event, index) => (
            <div key={index} className='relative flex items-start'>
              <div className='mr-4 mt-2 h-4 w-4 rounded-full bg-blue-400'></div>
              <div>
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
