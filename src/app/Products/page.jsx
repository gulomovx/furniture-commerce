"use client";
import Cart from "../../components/products/Cart";
import cart1 from "../../../public/cart1.jpeg";
import cart2 from "../../../public/cart2.jpeg";
import cart3 from "../../../public/cart3.jpg";
import cart4 from "../../../public/cart4.jpg";
import cart5 from "../../../public/cart5.jpeg";
import cart6 from "../../../public/cart6.jpeg";
import { FaAnglesDown } from "react-icons/fa6";

const Products = () => {
  return (
    <div className="w-full h-full ">
      <div className="bg-[#D5CFBF] lg:py-16 py-6 ">
        <div className=" container ">
          <h1 className="text-4xl  text-center text-blue w-full">
            See what we created
          </h1>
          <p className="text-sm text-center mx-auto lg:w-[60%] w-[90%]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
            quaerat expedita labore tenetur, ipsum obcaecati placeat odio,
            perferendis blanditiis dolore cum sit magnam consectetur praesentium
            dolorum ipsa numquam! Quis, reprehenderit.
          </p>
          <FaAnglesDown  className="w-[60px] text-blue h-[60px] mx-auto mt-8 rounded-full p-2 border animate-bounce"/>
        </div>
      </div>
      <h1 className="lg:text-5xl text-3xl text-blue text-center lg:my-12 my-4">Our products</h1>
      <div className="container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <Cart img={cart1} title={"Modern sofa"} />
        <Cart img={cart2} title={"Modern sofa"} />
        <Cart img={cart3} title={"Modern sofa"} />
        <Cart img={cart4} title={"Modern sofa"} />
        <Cart img={cart5} title={"Modern sofa"} />
        <Cart img={cart6} title={"Modern sofa"} />
      </div>
    </div>
  );
};

export default Products;
