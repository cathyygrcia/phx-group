import { FaLaptop, FaMobileAlt } from "react-icons/fa";
import { IoMdPaper } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div id="services" className="bg-red-900 p-8">
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center">
        {/** Card 1 (Side Card 1) */}
        <div className="flex-1 bg-white/80 flex flex-col items-center text-center p-8 rounded-xl shadow-md max-w-md">
          <FaLaptop className="text-5xl mb-4 text-red-900 " />
          <h2 className="text-2xl font-semibold mb-2">Application Solutions</h2>
          <p className="text-xl">
            We offer complete application solutions including Parking Citation
            Management, Administrative Citation Management, and Residential and
            Temporary Permits.
          </p>
          <Link
            to="/AppSolutions"
            className="mt-6 w-2/5 py-2 px-4 text-center bg-transparent text-red-900 border-2 border-red-900 rounded-lg transition-all duration-300 hover:bg-red-900 hover:text-white"
          >
            See More
          </Link>
        </div>

        {/** Card 2 (Middle Card - raised) */}
        <div className="flex-1 bg-gray-400/50 flex flex-col items-center text-center p-8 rounded-xl shadow-md max-w-md transform md:translate-y-[-40px]">
          <FaMobileAlt className="text-5xl mb-4 text-red-900 " />
          <h2 className="text-2xl font-semibold mb-2">Mobile Solutions</h2>
          <p className="text-xl">
            In addition to application solutions, we offer the latest in
            complete mobile systems and software featuring state-of-the-art
            enforcement hardware and handheld technology.
          </p>
          <Link to="/MobileSolutions" className="mt-6 w-2/5 py-2 px-4 bg-transparent text-red-900 border-2 border-red-900 rounded-lg transition-all duration-300 hover:bg-red-900 hover:text-white">
            See More
          </Link>
        </div>

        {/** Card 3 (Side Card 2) */}
        <div className="flex-1 bg-white/80 flex flex-col items-center text-center p-8 rounded-xl shadow-md max-w-md">
          <IoMdPaper className="text-5xl mb-4 text-red-900 " />
          <h2 className="text-2xl font-semibold mb-2">End-to-End Software</h2>
          <p className="text-xl">
            We manage every phase in the life of a parking citation — from the
            moment it's placed on the vehicle to final data processing.
          </p>
          <Link to="/MobileSolutions" className="mt-6 w-2/5 py-2 px-4 bg-transparent text-red-900 border-2 border-red-900 rounded-lg transition-all duration-300 hover:bg-red-900 hover:text-white">
            See More
          </Link>
        </div>
      </div>
    </div>
  );
}
