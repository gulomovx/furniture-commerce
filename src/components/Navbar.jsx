"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const { cartItems, totalQuantity, totalPrice } = useSelector(
    (state) => state.counter
  );
  // console.log(cartTotal);
  const path = usePathname();

  return (
    <div className="w-full  border-b shadow-md ">
      <div className="max-w-[1440px] h-[60px]     mx-auto flex justify-between items-center ">
        {/* logo */}
        <div className="">
          <h1 className="lg:text-3xl text-xl text-blue font-semibold">Furniture</h1>
        </div>
        {/* nav link */}
        <div className="hidden lg:flex items-center gap-20">
          <Link className={`${path == `/` ? `active ` : ` `} text-sm`} href="/">
            Home
          </Link>
          <Link
            className={`${path == `/Services` ? `active ` : ` `} text-sm`}
            href="/Services"
          >
            Services
          </Link>
          <Link
            className={`${path == `/Products` ? `active ` : ` `} text-sm`}
            href="/Products"
          >
            Products
          </Link>
          <Link
            className={`${path == `/Contact` ? `active ` : ` `} text-sm`}
            href="/Contact"
          >
            Contact
          </Link>
          <Link
            className={`${path == `/About` ? `active ` : ` `} text-sm`}
            href="/About"
          >
            About
          </Link>
        </div>
        {/* icons */}
        <div className="flex items-center">
          <Link href={`/Cart`} className="lg:flex hidden items-center">

          <BsCart3
            size={30}
            className="text-blue cursor-pointer hover:scale-110 duration-300"
          />
          <span className="bg-red-500  text-white flex items-center size-8 text-center justify-center rounded-full">
            {cartItems.length}
            </span>
          </Link>
            
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBars className="h-6 w-6" />
            </label>
            <ul 
              tabIndex={0}
              className="menu relative right-8 menu-sm dropdown-content z-[1] mt-3 px-16 py-4 shadow bg-base-200"
            >
              {/* <Navlinks/> */}
              <div className="flex flex-col items-center gap-4">
          <Link className={`${path == `/` ? `active ` : ` `} text-sm`} href="/">
            Home
          </Link>
          <Link
            className={`${path == `/Services` ? `active ` : ` `} text-sm`}
            href="/Services"
          >
            Services
          </Link>
          <Link
            className={`${path == `/Products` ? `active ` : ` `} text-sm`}
            href="/Products"
          >
            Products
          </Link>
          <Link
            className={`${path == `/Contact` ? `active ` : ` `} text-sm`}
            href="/Contact"
          >
            Contact
          </Link>
          <Link
            className={`${path == `/About` ? `active ` : ` `} text-sm`}
            href="/About"
          >
            About
          </Link>
        </div>
              
            </ul>
          </div>
        </div>
      </div>
    </div>


// {/* <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
//   <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//   <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
//       <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo"/>
//       <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
//   </a>
//   <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//       <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
//       <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
//         <span class="sr-only">Open main menu</span>
//         <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
//         </svg>
//     </button>
//   </div>
//   <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
//     <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//       <li>
//         <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
//       </li>
//       <li>
//         <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
//       </li>
//       <li>
//         <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
//       </li>
//       <li>
//         <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
//       </li>
//     </ul>
//   </div>
//   </div>
// </nav> */}

  )
};

export default Navbar;
