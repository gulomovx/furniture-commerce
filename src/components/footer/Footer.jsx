import Link from 'next/link'
import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=' bg-[#2d2b93ef] w-full   bottom-0 p-8'>
      <div className="container flex flex-col lg:flex-row justify-between lg:items-center text-white p-4">
        {/* text */}
        <div className="flex lg:w-[50%] w-full  justify-between gap-16 items-center mb-8">
          <div className="flex flex-col gap-4">
            <Link href='/'>Services</Link>
            <Link href='/'>Products</Link>
            <Link href='/'>Gallery</Link>
         </div>
          <div className="flex flex-col gap-4">
            <Link href='/'>Create</Link>
            <Link href='/'>Collection</Link>
            <Link href='/'>Contact Us</Link>
         </div>
         
        </div>
        {/*  */}
        <div className="">
          <h1 className="text-2xl">Furniture</h1>
          <p className="">Great things maker</p>

          
        </div>
      </div>
      <hr />
      <div className="mt-4 gap-16 text-[30px] text-slate-200 flex justify-center items-center gap-8'">
        <FaInstagram />
        <FaXTwitter />
        <FaYoutube/>
      </div>
    </div>
  )
}

export default Footer