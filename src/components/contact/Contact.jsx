import React from "react";
import bg from "../../../public/cart3.jpg";
import bgc from "../../../public/bgc.jpg";
import { IoLocationSharp } from "react-icons/io5";
import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="w-full ">
      <div
        style={{
          backgroundImage: `url(${bgc.src}) `,
          //   backgroundRepeat:'no-repeat',
          //   width: "100%",
          // height: "100%",
        }}
        className="  h-[300px] bg-cover mb-8  object-cover relative flex justify-center items-center"
      >
        <div className="p-12 lg:w-[80%] w-[90%]   justify-center   mx-auto absolute    inline-block backdrop-blur-sm    bg-white/20  rounded-3xl text-blue">
          <h1 className="lg:text-7xl md:text-5xl text-4xl text-center  ">Contact Us</h1>
        </div>
      </div>
      {/* from */}
      <div className="container lg:py-16 flex px-4 gap-8 mt-8  justify-around  lg:flex-row flex-col">
        {/* text */}
        <div className="text-blue ">
          <h1 className="lg:text-5xl text-4xl ">Let's talk with us</h1>
          <p className="text-sm w-96 text-slate-400 py-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A veniam
            aperiam illo.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <IoLocationSharp />
            <p className="text-sm">Tashkent City, Amir Temur street 67</p>
          </div>
          <div className="flex my-2 items-center gap-4">
            <FaPhoneAlt />
            <p className="text-sm">+998 99 123 45 67</p>
          </div>
          <div className="flex items-center gap-4">
            <AiOutlineMail />
            <p className="text-sm">Contact@Triple.com</p>
          </div>
        </div>
        {/* form */}
        <div className=" border lg:w-[40%] w-full rounded-3xl p-8 shadow-lg ">
          <form className="flex flex-col gap-4 ">
            <div className="">
              <label for="name" className="block text-blue">
                First name
              </label>

              <input
                className="outline-none w-full border py-2 px-6 rounded-2xl"
                type="text"
                id="name"
                placeholder="First name..."
              />
            </div>
            <div className="">
              <label for="name" className="block text-blue">
                Last name
              </label>

              <input
                className="outline-none w-full border py-2 px-6 rounded-2xl"
                type="text"
                id="name"
                placeholder="Last name..."
              />
            </div>
            <div className="">
              <label for="name" className="block text-blue">
                Your email
              </label>

              <input
                className="outline-none w-full border py-2 px-6 rounded-2xl"
                type="email"
                id="name"
                placeholder="Email..."
              />
                      </div>
                      <div className="">
                          <textarea className="outline-none w-full border rounded-2xl p-4" name="" id="" cols="20" rows="2" placeholder="Your message..."></textarea>
                      </div>
                      <button className="bg-blue-700 text-white rounded-3xl py-2">Send message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
