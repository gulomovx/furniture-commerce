import React from "react";
import Image from "next/image";
import ReactStars from "react-rating-stars-component";

const Cart = ({ img, title, price }) => {
  return (
      <div className="w-full my-8">
      <div className="container hover:scale-110 duration-300 relative flex flex-col justify-center bg-slate-100 rounded-2xl lg:w-[420px] w-full p-4 px-6">
              <Image src={img} className='w-[400px] object-cover h-[300px] rounded-2xl ' />
              {/* <h1 className="text-2xl">{ title}</h1> */}
        <h1 className="text-xl my-2 text-blue">{title}</h1>
              <ReactStars
          count={5}
        //   onChange={ratingChanged}
          size={24}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
        />
        
      </div>
    </div>
  );
};

export default Cart;
