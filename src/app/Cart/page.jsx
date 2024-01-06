"use client";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCartTotal, increaseItemQuantity, decreaseItemQuantity,removeItem } from "../../redux/ItemSlice";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  const { cartItems, totalQuantity, totalPrice } = useSelector(
    (state) => state.counter
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cartItems]);

  return (
    <div className="w-full h-screen bg-slate-300 pt-16  ">
      {cartItems.length>0 ? <div className="container flex justify-between relative  ">
        
        <div className="bg-white w-[1000px] rounded-lg p-8 flex">
          <div className="border shadow-lg  w-full rounded-lg p-4 ">
            {cartItems?.map((item) => {
              return (
                <div className="flex items-center bg-slate-50 my-4 p-4 rounded-3xl justify-between ">
                  <Image src={item.img} alt="img" width={200} height={200} className='w-[300px]  h-[200px]' />
                    <h1 className="text-2xl">{item.name}</h1>
                  <div className="flex items-center gap-8">
                    <button
                      onClick={() => dispatch(removeItem(item.id))}
                      className="text-red-400"
                    >
                      remove
                    </button>
                    <div className="flex items-center px-8 gap-4 rounded-2xl border">
                      <button
                        onClick={() => dispatch(increaseItemQuantity(item.id))}
                        className="text-2xl"
                      >
                        +
                      </button>
                      <h1 className="">{item.amount}</h1>
                      <button onClick={() =>
                              dispatch(decreaseItemQuantity(item.id))
                            } className="text-2xl">-</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* card amount, carttotal */}
        <div className="bg-white p-24 rounded-2xl h-[200px]">
          asdfg
        </div>
      </div> : 
        <div className="flex justify-center text-4xl ">Your cart is empty!</div>
      }
    </div>
  );
};

export default page;
