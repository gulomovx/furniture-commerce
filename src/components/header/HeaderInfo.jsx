import Image from "next/image";
import React from "react";
import img1 from "../../../public/img1.jpeg";
import img2 from "../../../public/img2.webp";
import img3 from "../../../public/img3.jpeg";
import { CiClock2 } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const HeaderInfo = () => {
  return (
    <div className="w-full my-24">
      <div className="container flex lg:justify-between flex-col lg:flex-row text-2xl items-center gap-4 ">
        <div className="flex flex-col lg:w-[20%] w-full justify-center border items-center text-center p-4 rounded-lg">
          <div className="flex gap-4 ">
            <CiClock2 />
            <h1 className="">Shop online</h1>
          </div>
          <p className="text-sm text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex flex-col lg:w-[20%] w-full justify-center border items-center text-center p-4  rounded-lg">
          <div className="flex gap-4">
            <BsBag />
            <h1 className="">Free shipping</h1>
          </div>
          <p className="text-sm text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex flex-col lg:w-[20%] w-full justify-center border items-center text-center p-4 rounded-lg">
          <div className="flex gap-4">
            <RiMoneyDollarCircleLine size={30}/>
            <h1 className="">Payment</h1>
          </div>
          <p className="text-sm text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderInfo;
