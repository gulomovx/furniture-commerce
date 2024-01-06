'use client'
import Image from 'next/image'
import React from 'react'
import img1 from '../../public/grid1.jpg'
import img2 from '../../public/grid2.jpg'
import img3 from '../../public/grid3.jpg'
const IconCart = () => {
  return (
      <div className='container flex flex-col '>
          <h1 className="lg:text-5xl md:text-4xl text-3xl text-center text-blue mt-16">Inspiration collection</h1>
          <p className='text-center text-sm my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, praesentium!</p>
          {/* images */}
          <div className="flex flex-col   mx-auto  lg:justify-center   lg:items-center  lg:flex-row  lg:gap-16 gap-8 lg:mt-20 mt-8">
              <Image src={img1} className='lg:w-[300px] lg:h-[400px] w-full object-cover rounded-lg lg:rounded-l-3xl'/>
              <Image src={img2} className='lg:w-[300px] lg:h-[400px] w-full object-cover rounded-lg lg:mb-20'/>
              <Image src={img3} className='lg:w-[300px] lg:h-[400px] w-full object-cover rounded-lg lg:rounded-r-3xl'/>
          </div> 
          {/* img text */}
          <div className="flex justify-between bg-slate-100 items-center">
              <div className=""></div>
          </div>
    </div>
  )
}

export default IconCart