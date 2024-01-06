import Image from "next/image";
import React from "react";
import grid1 from "../../../public/img3.jpeg";
import grid2 from "../../../public/img1.jpeg";
import grid3 from "../../../public/header2.jpg";
const About = () => {
  return (
    <div className=" my-20">
      <div className=" container flex flex-col lg:flex-row justify-between items-center my-12">
        <div className="">
          {/* content */}
          <h1 className="lg:text-6xl text-3xl text-blue font-medium">
            Discover the latest
            <br />
            Furniture Trends
          </h1>
          <p className="text-slate-400 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            at!
          </p>
          <button className="bg-slate-600 lg:mt-4 mt-2 mb-8 text-white p-2 px-8 hover:bg-slate-700 transition-all duration-300 rounded-3xl">Get started</button>
        </div>
        <div className="flex gap-4 flex-col justify-center items-center  ">
          {/* img grid */}
          <div className="flex items-center gap-4">
            {/* frist img */}
            <div className="">
              <Image
                alt="img"
                src={grid1}
                className="w-[300px] h-[200px] rounded-2xl object-cover"
              />
            </div>
            <div className="">
              <Image
                alt="img"
                src={grid2}
                className="w-[300px] h-[200px] rounded-2xl object-cover"
              />
            </div>
          </div>
          <div className="">
            {/* seconds img */}
            <div className="">
              <Image
                alt="img"
                src={grid3}
                className="w-[616px] h-[300px] rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
