"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { data } from "../../../constants/data";
import Image from "next/image";
// import { Increment, Decrement } from "../../../redux/ItemSlice";
const page = () => {
  const [item, setItem] = useState();
  const cartTotalQuantity = useSelector(
    (state) => state.counter.cartTotalQuantity
  );
  const allData = useSelector((state) => state.counter);
  const amount = useSelector((state) => state.counter.data);
  console.log('16', amount);
  //   console.log(cartTotalQuantity);
  const { id } = useParams();
  //   console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    setItem(amount.find((itm) => itm.id === +id));
  }, [data]);
  return (
    <div className=" lg:my-12 my-8">
      <h1 className="lg:text-6xl text-3xl mb-8 text-center text-blue">
        Choose product amount
      </h1>
      <div className="container border lg:p-8 p-4 rounded-lg shadow-lg  flex flex-col lg:flex-row  items-center lg:gap-32 gap-4 ">
        <Image
          className="rounded-2xl lg:w-[600px] lg:h-[400px] w-full h-[300px] object-cover "
          src={item?.img}
          width={500}
          height={700}
          alt="img"
        />
        <div className="flex flex-col lg:gap-8 gap-2 text-center">
          <h1 className="lg:text-6xl md:text-5xl text-3xl tracking-widest text-blue">
            {item?.name}
          </h1>
          <p className="text-slate-500">{item?.price}$</p>
          <div className="flex gap-8 items-center mx-auto">
            <button
              onClick={() => dispatch(Increment(item.id))}
              className="border size-12 rounded-lg shadow-lg"
            >
              +
            </button>
            <p className="text-4xl">{item?.amount}</p>
            <button
              onClick={() => dispatch(Decrement())}
              className="border size-12 rounded-lg shadow-lg"
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
