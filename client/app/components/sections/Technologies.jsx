import React from 'react'
import IconSVG from '@/app/components/ui/IconSVG'
import techStack from '@/app/data/techStack'

const Technologies = () => {
  return (
    <section id='tech' className='mt-20 px-3 py-2 md:mt-32'>
      <h2 className='mb-14 pl-3 text-lg font-medium text-white md:text-xl'>
        Technologies
      </h2>
      <div className='grid grid-cols-3 gap-3 md:grid-cols-6'>
        {techStack.map(technology => (
          <IconSVG
            pathData={technology.pathData}
            text={technology.name}
            viewBox={technology.viewBox}
          />
        ))}
      </div>
    </section>
  )
}

export default Technologies
