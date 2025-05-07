import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <nav className="flex justify-around bg-red-800 p-8 w-screen">
      <div className="flex basis-2/4 justify-center cursor-pointer">
        <img src="/images/logo.png" alt="logo" className="" />
      </div>

      <ul className="hidden md:flex items-center justify-end md:text-white basis-2/4">
        <li className="cursor-pointer md:pr-8 lg:pr-16">About Us</li>
        <li className="cursor-pointer md:pr-8 lg:pr-16">Services</li>
        <li className="cursor-pointer md:pr-8 lg:pr-16"></li>
        <li className="cursor-pointer md:pr-8 lg:pr-16">Contact</li>
      </ul>
      <div
        onClick={handleOpen}
        className="flex items-center text-white text-3xl"
      >
        <GiHamburgerMenu className="sm:block md:hidden" />
      </div>
      <div
        className={
          isOpen
            ? "fixed left-0 top-0 w-full md:hidden h-screen bg-red-900/95 p-10 ease-in"
            : "fixed left-[-100%] top-0 p-10 ease-in "
        }
      >
        <div className="flex justify-center flex-col items-center ">
          <IoCloseOutline
            size={50}
            className=" text-white"
            onClick={handleOpen}
          />
          <div className="flex justify-center items-center ">
            <img src="/images/logo.png" alt="logo" className="ml-11" />
          </div>
          <ul className="flex flex-col justify-between items-center font-bold text-lg text-white">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}
