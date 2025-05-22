import Navbar from "./Navbar";
import { FaParking, FaTicketAlt } from "react-icons/fa";

export default function AppSolutions() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-red-900 via-red-800 to-red-700 pt-32 pb-20 px-4 sm:px-8 min-h-screen text-white font-sans">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight max-w-4xl mx-auto">
            Application Solutions
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Streamlined systems for managing citations and administrative compliance.
          </p>
        </div>

        {/* Section 1: Intro */}
        <div className="mt-12 bg-white text-red-900 max-w-4xl mx-auto rounded-2xl shadow-md p-8 sm:p-12 space-y-8 text-lg leading-relaxed">
          <div className="text-center">
            <img
              src="/images/parking.jpg"
              alt="parking"
              className="w-28 mx-auto rounded-xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300 mb-6"
            />
            <h2 className="text-3xl font-extrabold text-red-800 mb-4 tracking-tight">
              Parking Citation Management
            </h2>
          </div>
          <p className="text-gray-700">
            <span className="font-bold">PHOENIX GROUP Information Systems</span> provides our Parking Citation Management System,{" "}
            <span className="font-semibold">WINCITE.NET</span>, a fully automated program designed to streamline processing, controls, and the collection of parking payments.
          </p>
          <p className="text-gray-700">
            Enhanced by our handheld enforcement technology and supporting software, this system delivers critical components to help cities and agencies maximize revenue in a real-time .NET environment.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          {/* Card 1 */}
          <div className="flex-1 bg-white text-red-900 rounded-2xl shadow-md p-8 hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="text-2xl font-extrabold text-red-800 text-center mb-6 tracking-tight flex items-center justify-center gap-2">
              <FaTicketAlt /> WINCITE.NET Reporting Features
            </h3>
            <p className="mb-4 text-gray-700">
              Includes location analysis, officer activity, citation statistics, habitual offender trends, revenue tracking, and county surcharge distribution. Reports available in both PDF and Excel.
            </p>
            <p className="mb-4 text-gray-700">
              Supports automated letters (e.g. tow/boot warnings, partial payments), monthly reports, and ad hoc custom reporting — all web-accessible.
            </p>
            <p className="text-gray-700">
              Additional tools include out-of-state plate programs, follow-up workflows, robust data validation, and tracking of voids/waivers.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex-1 bg-white text-red-900 rounded-2xl shadow-md p-8 hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="text-2xl font-extrabold text-red-800 text-center mb-6 tracking-tight flex items-center justify-center gap-2">
              <FaParking /> Administrative Citation Management
            </h3>
            <p className="mb-4 text-gray-700">
              Developed for clients managing citations for Municipal Code violations — from “No Smoking” to “Limited RV Parking”. WINCITE.NET handles progressive fine structures and warnings with flexibility.
            </p>
            <p className="mb-4 text-gray-700">
              Fines may accumulate daily, and unpaid citations can be sent to collections. Warnings (if issued) do not incur fines and are typically not appealable.
            </p>
            <p className="text-gray-700">
              As with parking citations, WINCITE.NET supports automated notices, reports, out-of-state tracking, and extensive workflow tools.
            </p>
          </div>
        </div>

        {/* List */}
        <div className="max-w-4xl mx-auto mt-10">
          <ul className="list-disc list-inside text-white space-y-3 text-xl font-semibold leading-relaxed bg-opacity-40 rounded-lg p-6">
            <li>Data Entry, Real-Time .Net Environment, Remote Data Entry Capability.</li>
            <li>Inquiry Search Capability By Citation Number and Name.</li>
            <li>Full Communication with all Handheld Programs.</li>
            <li>Notice of Violation Mailed Daily.</li>
            <li>Online Real-Time Citation Inquiries And Remote Updating.</li>
     
          </ul>
        </div>
      </div>
    </>
  );
}
