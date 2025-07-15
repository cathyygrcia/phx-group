
import Navbar from "./Navbar";
import { FaParking, FaTicketAlt, FaIdCard } from "react-icons/fa";

export default function AppSolutions() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-red-900 via-red-800 to-red-700 pt-40 pb-20 px-4 sm:px-8 min-h-screen text-white font-sans ">
        {/* Heading */}
        <div className="text-center ">
          <h1 className="text-5xl font-extrabold tracking-tight max-w-4xl mx-auto transition-shadow duration-300 mb-6 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
            Application Solutions
          </h1>
        </div>

        {/* Unified White Content Section */}
        <div className="mt-12 bg-white text-red-900 max-w-6xl mx-auto rounded-2xl shadow-md p-8 sm:p-12 space-y-10 text-lg leading-relaxed transition-shadow duration-300 mb-6 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          {/* Image and Title */}
          <div className="text-center">
            <img
              src="/images/parking.jpg"
              alt="parking"
              className="w-28 mx-auto rounded-xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300 mb-6 opacity-0 animate-[fadeIn_1.2s_ease-out_forwards]"
            />
            <h2 className="text-3xl font-extrabold text-red-800 mb-4 tracking-tight">
              Parking Citation Management
            </h2>
          </div>

          {/* Intro Paragraphs */}
          <p className="text-gray-700">
            <span className="font-bold">PHOENIX GROUP Information Systems</span>{" "}
            provides our Parking Citation Management System,{" "}
            <span className="font-semibold">WINCITE.NET</span>, a fully
            automated program designed to streamline processing, controls, and
            the collection of parking payments.
          </p>
          <p className="text-gray-700">
            Enhanced by our handheld enforcement technology and supporting
            software, this system delivers critical components to help cities
            and agencies maximize revenue in a real-time .NET environment.
          </p>

          {/* Reporting Features */}
          <div>
            <h3 className="text-2xl font-extrabold text-red-800 text-center mb-6 tracking-tight flex items-center justify-center gap-2">
              <FaTicketAlt /> WINCITE.NET Reporting Features
            </h3>
            <p className="mb-4 text-gray-700">
              Includes location analysis, officer activity, citation statistics,
              habitual offender trends, revenue tracking, and county surcharge
              distribution. Reports available in both PDF and Excel.
            </p>
            <p className="mb-4 text-gray-700">
              Supports automated letters (e.g. tow/boot warnings, partial
              payments), monthly reports, and ad hoc custom reporting — all
              web-accessible.
            </p>
            <p className="text-gray-700">
              Additional tools include out-of-state plate programs, follow-up
              workflows, robust data validation, and tracking of voids/waivers.
            </p>
          </div>

          {/* Administrative Citation Management */}
          <div>
            <h3 className="text-2xl font-extrabold text-red-800 text-center mb-6 tracking-tight flex items-center justify-center gap-2">
              <FaParking /> Administrative Citation Management
            </h3>
            <p className="mb-4 text-gray-700">
              Developed for clients managing citations for Municipal Code
              violations — from “No Smoking” to “Limited RV Parking”.
              WINCITE.NET handles progressive fine structures and warnings with
              flexibility.
            </p>
            <p className="mb-4 text-gray-700">
              Fines may accumulate daily, and unpaid citations can be sent to
              collections. Warnings (if issued) do not incur fines and are
              typically not appealable.
            </p>
            <p className="text-gray-700">
              As with parking citations, WINCITE.NET supports automated notices,
              reports, out-of-state tracking, and extensive workflow tools.
            </p>
          </div>

          {/* Feature List */}
          <ul className="list-disc list-inside text-red-900 space-y-3 text-xl font-semibold leading-relaxed bg-red-100/50 rounded-lg p-6">
            <li>
              Data Entry, Real-Time .Net Environment, Remote Data Entry
              Capability.
            </li>
            <li>Inquiry Search Capability By Citation Number and Name.</li>
            <li>Full Communication with all Handheld Programs.</li>
            <li>Notice of Violation Mailed Daily.</li>
            <li>Online Real-Time Citation Inquiries And Remote Updating.</li>
            <li>Post-Office Box For Incoming Mail And Daily Pickup.</li>
          </ul>

          {/* Residential & Temporary Permits */}
          <div>
            <h3 className="text-2xl font-extrabold text-red-800 text-center mb-6 tracking-tight flex items-center justify-center gap-2"
             >
              <FaIdCard /> Residential and Temporary Permits
            </h3>
            <p className="mb-4 text-gray-700">
              Phoenix Group offers an on-line Permit System that can easily be
              modified to accommodate any client requirements. The program
              currently includes the following features and functions:
            </p>
            <ul className="list-disc list-inside text-red-900 space-y-3 text-xl font-semibold leading-relaxed bg-red-100/50 rounded-lg p-6"   data-aos="zoom-up">
              <li>
                Data Entry and Maintenance screen for issuing and viewing
                permits.
              </li>
              <li>
                Search mode to find permit information by license plate,
                location, and contact name or permit number.
              </li>
              <li>
                Printing capability to print new and (reprint) existing permits.
              </li>
              <li>
                Payment Processing, by our customer service or remotely by the
                client.
              </li>
              <li>Renewal letter notices.</li>
              <li>
                Management reports in PDF and Excel that will identify all
                activity in the permit system.
              </li>
            </ul>
            <p className="mt-4 text-gray-700">
              Client access to the Permit system is through a web-based system
              in conjunction with our Parking Citation program, WINCITE.NET.
              After a secure login, the user will have access to both parking
              permits and citations. Permits may be added or edited remotely
              with search functions allowing permit-specific information by
              vehicle license plate, location, and contact name or permit
              number.
            </p>
            <p className="mt-2 text-gray-700">
              Letters of renewal may optionally be generated to the resident or
              property owner reminding them of renewal requirements for
              preferential parking permits and requesting payment.
            </p>
          </div>
        </div>
        
      </div>
     
    </>
  );
}
