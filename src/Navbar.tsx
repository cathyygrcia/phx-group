export default function Navbar() {
  return (
    <>
      <nav className="flex justify-around bg-red-700 p-8">
        <div className="flex w-2/5	justify-center">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <ul className="flex items-center justify-end text-white w-1/2">
          <li className="pr-16">Home</li>
          <li className="pr-16">Services</li>
          <li className="pr-16">About</li>
          <li className="pr-16">Contact</li>
        </ul>
      </nav>
    </>
  );
}
