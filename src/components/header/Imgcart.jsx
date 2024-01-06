import Image from 'next/image'
import React from 'react'
import img1 from '../../../public/header2.jpg'
import img2 from '../../../public/header3.jpg'
import img3 from '../../../public/header4.jpg'
const Imgcart = () => {
  return (
      <div className='w-full py-16'>
          <div className="container flex flex-col ">
              <h1 className="text-4xl  text-center text-blue">Browse your option</h1>
              <p className="text-sm text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, minus!</p>
              <div className="flex lg:justify-center lg:flex-row flex-col lg:gap-12 gap-4 items-center mt-12">
                  {/* images */}
                  <div className="">
                      <Image src={img1} className='lg:w-[300px] lg:h-[400px] w-full object-cover rounded-lg'/>
                  </div>
                  <div className="">
                  <Image src={img2} className='lg:w-[500px] lg:h-[500px] w-full rounded-lg'/>

                  </div>
                  <div className="">
                  <Image src={img3} className=' lg:w-[300px] lg:h-[400px] w-full object-cover rounded-lg'/>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Imgcart