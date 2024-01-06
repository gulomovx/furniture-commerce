import Image from "next/image";
import React from "react";
import img from "../../../public/header1.jpg";
const ContentImg = () => {
  return (
    <div className="w-full bg-slate-100 mt-[200px]">
      <div className="container py-16 justify-center flex lg:justify-around lg:items-center lg:flex-row flex-col gap-8">
        {/* text */}
        <div className="lg:w-[50%] lg:text-start text-center">
          <h1 className="lg:text-5xl text-4xl mb-4 text-blue">Beauty of furniture</h1>
          <p className="text-sm mb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
            reiciendis asperiores delectus ipsum quis quisquam numquam
            necessitatibus cum repellat aperiam.
          </p>
          <button className="bg-blue-600 text-white py-4 px-8 rounded-[30px]">
            Learn more
          </button>
        </div>
        {/* img */}
        <div className="relative z-10">
          <Image
            src={img}
            className="object-cover lg:w-[400px] lg:h-[500px] w-full z-99 rounded-tl-3xl rounded-br-3xl"
          />
                   {/* <div className="w-[200px] h-[200px] rounded-tr-full rounded-br-full  z-0 bg-blue-900 absolute top-32 left-64 "></div> */}

        </div>
      </div>
    </div>
  );
};

export default ContentImg;
