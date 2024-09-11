import React from 'react'
import { CarouselHero } from './CarouselHero'
import { Button } from '@/components/ui/button'

const About = () => {
  return (
    <div>
      {/* <CarouselHero /> */}
      <div className="flex px-20 gap-5 md:flex-row flex-col justify-center items-center md:gap-32 pt-20 md:py-20">
      <div className="image">
          <div className='shadow-lg'>
            <img src="/aboutus.svg " alt="" className='md:w-96 md:h-full h-60' />
            
          </div>
        </div>
        <div className="text">
        <span className="absolute animate-pulse mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-7xl box-content font-extrabold text-transparent text-center select-none">
        ABOUT US OF EFD<br /> COOL GRADIENT </span>
         <h2 className='bg-gradient-to-r from-[#0d3a13] to-[#0d2d3b] bg-clip-text text-transparent text-3xl font-black'>About US!</h2>
         <p className='max-w-[500px]'>
         EFDBD is an innovative job platform specializing in connecting top engineering talent with companies seeking skilled professionals. From civil to software engineering, EFDBD streamlines the hiring process by offering tailored job postings, candidate screening, and recruitment solutions, ensuring the best match for both employers and engineers. With a focus on efficiency and industry expertise, EFDBD simplifies the hiring journey for engineering roles across all sectors.
         </p>
        </div>
      </div>
    </div>
  )
}

export default About
