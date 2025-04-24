export default function Navbar() {
  return (
    <>
      <nav className="flex justify-around bg-red-700 p-8 w-screen">
        <div className="flex basis-2/4	justify-center">
          <div>
            <img src="/images/logo.png" alt="logo" />
          </div>
        </div>
        <ul className="flex items-center justify-end lg:text-white basis-2/4">
          <li className="lg:pr-16 ">Home</li>
          <li className="lg:pr-16">Services</li>
          <li className="lg:pr-16">About</li>
          <li className="lg:pr-16">Contact</li>
        </ul>
      </nav>
    </>
  );
}
