"use client";
// import bg from "../../public/scandinavian-interior-mockup-wall-decal-background 1.png";
import Image from "next/image";
import Link from "next/link";
import bg from "../../public/bg.jpg";
import iconCart from "../components/IconCart.jsx";
import car from "../../public/car.svg";
import { BsTruck } from "react-icons/bs";
import IconCart from "../components/IconCart.jsx";
import ContentImg from "../components/header/ContentImg";
import Imgcart from "../components/header/Imgcart";
import HeaderInfo from "../components/header/HeaderInfo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AllCounter } from "../redux/ItemSlice";
export default function Home() {
  // const {}
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.counter);
  const {cartTotalQuantity}=useSelector((state)=> state.counter)
  console.log(cartTotalQuantity);
  useEffect(() => {
    // dispatch(AllCounter());
    // console.log(data);
  }, [data]);

  return (
    <main className="w-full  ">
      <Image alt="img" src={bg} className="w-full object-cover h-[700px]" />
      <div className="container flex justify-center">
        <div className=" lg:w-[600px] md:w-[400px] w-[350px] absolute lg:top-[250px]   lg:right-32 top-40 lg:text-start text-center bg-[#cee0f3] p-16  rounded-2xl ">
          <h1 className="lg:text-5xl md:text-3xl text-3xl text-blue">
            Discover new furnitures
          </h1>
          <p className="my-2 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, vel.
          </p>
          <Link
            href="/"
            className="bg-blue-600 text-white py-2 px-8 rounded-3xl mt-4 hover:bg-blue-700"
          >
            Buy now
          </Link>
        </div>
      </div>

      {/* icons content */}
      <div className=" ">
        <IconCart />
        <ContentImg />
        <Imgcart />
        <HeaderInfo />
      </div>
    </main>
  );
}
