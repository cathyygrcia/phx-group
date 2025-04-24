import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  return (
    <nav className="flex justify-around bg-red-700 p-8 w-screen">
      <div className="flex basis-2/4 justify-center">
        <img src="/images/logo.png" alt="logo" />
      </div>
      <div className="flex items-center text-white text-3xl">
        <GiHamburgerMenu className="sm:block md:hidden" />
      </div>
      <ul className="hidden md:flex items-center justify-end md:text-white basis-2/4">
        <li className="md:pr-8 lg:pr-16">Home</li>
        <li className="md:pr-8 lg:pr-16">Services</li>
        <li className="md:pr-8 lg:pr-16">About</li>
        <li className="md:pr-8 lg:pr-16">Contact</li>
      </ul>
    </nav>
  );
}
