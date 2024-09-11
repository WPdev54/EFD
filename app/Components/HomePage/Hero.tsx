import React from 'react'
import { CarouselHero } from './CarouselHero'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <div>
      {/* <CarouselHero /> */}
      <div className="flex md:flex-row  flex-col justify-center items-center gap-5 pt-5 md:py-20">
        <div className="text">
          <div className='flex flex-col md:max-w-[600px] max-w-[300px] bg-gradient-to-r from-green-700 to-teal-600 bg-clip-text text-transparent font-black xl:text-6xl md:text-5xl text-2xl'>
            <span>EFDBD</span>
            <span className="absolute animate-pulse mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-7xl -z-40 box-content font-extrabold text-transparent text-center select-none">EFDBD IS GOOD <br />Is A Engeneiring <br /> Job Hiring br Platform  </span>
            <span>Is A Engeneiring Job Hiring Platform</span>
          </div>
          <div className="btn py-4 z-50">
            <Button variant={'primary'}>Get Started</Button>
          </div>
          
        </div>
        <div className="image">
          
          <div className='shadow-lg'>
            <img src="/hero.svg " alt="" className='md:w-96 md:h-full h-60' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
