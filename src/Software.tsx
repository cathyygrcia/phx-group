import Navbar from "./Navbar";
import { FaMobileAlt, FaBroom } from "react-icons/fa";

export default function Software() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-red-900 via-red-800 to-red-700 pt-40 pb-20 px-4 sm:px-8 min-h-screen text-white font-sans">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight max-w-4xl mx-auto">
            Handheld Technology Software
          </h1>
        </div>

        {/* Unified White Content Section */}
        <div className="mt-12 bg-white text-red-900 max-w-6xl mx-auto rounded-2xl shadow-md p-8 sm:p-12 space-y-10 text-lg leading-relaxed">
          {/* Optional Image + Section Header */}
          <div className="text-center">
            <img
              src="/images/cloudcomputing.jpg"
              alt="handheld technology"
              className="w-56 mx-auto rounded-xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300 mb-6"
            />
          </div>

          {/* WINCITE Software Description */}
          <div>
            <h3 className="text-2xl font-extrabold text-red-800 text-center mb-6 tracking-tight flex items-center justify-center gap-2">
              <FaMobileAlt /> WINCITE Mobile Citation Writing Software
            </h3>
            <p className="mb-4 text-gray-700">
              The WINCITE Mobile software is specifically designed to work with
              <span className="font-semibold"> WINCITE.NET</span> for fast,
              automated updates. Developed with a menu-driven interface, it
              ensures ease of operation and user guidance throughout the
              citation process.
            </p>
            <p className="text-gray-700">
              For unfamiliar users, the system allows officers to scroll through
              options before making selections. Before issuing a citation, a
              setup screen confirms key details such as time, date, officer
              name, badge number, and the default state abbreviation — ensuring
              accuracy and accountability.
            </p>
          </div>

          {/* EZ Ticket & Sweeping Description */}
          <div>
            <h3 className="text-2xl font-extrabold text-red-800 text-center mb-6 tracking-tight flex items-center justify-center gap-2">
              <FaBroom /> EZ Ticket & Street Sweeping Program
            </h3>
            <p className="mb-4 text-gray-700">
              These integrated programs are designed to automate and streamline
              street sweeping enforcement and citation management. Officers can
              issue citations quickly and accurately using pre-configured rule
              sets and time schedules.
            </p>
            <p className="text-gray-700">
              The system ensures proper synchronization with WINCITE.NET and
              supports full enforcement workflows, from issuance to reporting,
              for efficient urban compliance.
            </p>
          </div>

          {/* Optional Feature List */}
          <ul className="list-disc list-inside text-red-900 space-y-3 text-xl font-semibold leading-relaxed bg-red-100/50 rounded-lg p-6">
            <li>Menu-driven interface for guided citation issuance.</li>
            <li>Real-time synchronization with WINCITE.NET.</li>
            <li>Automated verification for accuracy and compliance.</li>
            <li>Full workflow support from citation to reporting.</li>
            <li>Optimized for street sweeping enforcement and mobile use.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
