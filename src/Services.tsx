import { FaLaptop, FaMobileAlt } from "react-icons/fa";
import { IoMdPaper } from "react-icons/io";

export default function Services() {
  return (
    <div className="bg-red-900 p-8">
      <div className="flex flex-col gap-6 md:flex-row md:justify-center">
        {/** Card 1 */}
        <div className="flex-1 bg-white/80 flex flex-col items-center text-center p-6 rounded-xl shadow-md">
          <FaLaptop className="text-4xl mb-4 text-red-900" />
          <h2 className="text-xl font-semibold mb-2">Application Solutions</h2>
          <p className="text-base">
            We offer complete application solutions including Parking Citation
            Management, Administrative Citation Management, and Residential and
            Temporary Permits.
          </p>
        </div>

        {/** Card 2 */}
        <div className="flex-1 bg-gray-400/50 flex flex-col items-center text-center p-6 rounded-xl shadow-md">
          <FaMobileAlt className="text-4xl mb-4 text-red-900" />
          <h2 className="text-xl font-semibold mb-2">Mobile Solutions</h2>
          <p className="text-base">
            In addition to application solutions, we offer the latest in complete
            mobile systems and software featuring state-of-the-art enforcement
            hardware and handheld technology.
          </p>
        </div>

        {/** Card 3 */}
        <div className="flex-1 bg-white/80 flex flex-col items-center text-center p-6 rounded-xl shadow-md">
          <IoMdPaper className="text-4xl mb-4 text-red-900" />
          <h2 className="text-xl font-semibold mb-2">End-to-End Software</h2>
          <p className="text-base">
            We manage every phase in the life of a parking citation — from the
            moment it's placed on the vehicle to final data processing.
          </p>
        </div>
      </div>
    </div>
  );
}
