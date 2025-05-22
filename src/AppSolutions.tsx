import Navbar from "./Navbar";

export default function AppSolutions() {
  return (
    <>
      <Navbar />
      <div className="bg-red-800 pt-32 pb-16 px-4 sm:px-8 min-h-screen text-white">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-4xl mx-auto">
            Application Solutions
          </h1>
        </div>

        {/* Section 1 */}
        <div className="mt-12 bg-white text-red-900 max-w-4xl mx-auto rounded-xl shadow-md p-6 sm:p-10 space-y-6 text-lg leading-relaxed">
          <div className="text-center">
            <p className="text-2xl font-semibold text-red-800 mb-2">
              Parking Citation Management
            </p>
          </div>
          <p>
            <span className="font-bold">PHOENIX GROUP Information Systems</span> provides our Parking Citation
            Management System, <span className="font-semibold">WINCITE.NET</span>, a fully automated program
            designed to streamline processing, controls, and the collection of parking payments.
          </p>
          <p>
            Enhanced by our handheld enforcement technology and supporting software, this system delivers
            critical components to help cities and agencies maximize revenue in a real-time .NET environment.
          </p>
        </div>

        {/* Side-by-side Cards */}
        <div className="mt-10 flex flex-col md:flex-row gap-6 max-w-4xl mx-auto">
          {/* Card 1 */}
          <div className="flex-1 bg-white text-red-900 rounded-xl shadow-md p-6 sm:p-8 space-y-4 text-base leading-relaxed">
            <h2 className="text-xl font-semibold text-red-800 text-center mb-2">
              WINCITE.NET Reporting Features
            </h2>
            <p>
              Includes location analysis, officer activity, citation statistics, habitual offender trends,
              revenue tracking, and county surcharge distribution. Reports are available in both PDF and Excel.
            </p>
            <p>
              WINCITE.NET also supports automated letters (e.g. tow/boot warnings, partial payments, review
              outcomes), monthly reports, and ad hoc custom reporting — all accessible via the web.
            </p>
            <p>
              Other features: out-of-state plate programs, follow-up workflows, robust data validation, and
              tracking of voids/waivers.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex-1 bg-white text-red-900 rounded-xl shadow-md p-6 sm:p-8 flex items-center justify-center text-xl font-semibold text-center">
            <p>More solutions coming soon.</p>
          </div>
        </div>
      </div>
    </>
  );
}
