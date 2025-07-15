import Navbar from "./Navbar";

export default function MobileSolutions() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-red-900 via-red-800 to-red-700 pt-40 pb-20 px-4 sm:px-8 min-h-screen text-white font-sans">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight max-w-4xl mx-auto transition-shadow duration-300 mb-6 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
            Mobile Solutions
          </h1>
        </div>

        {/* Content Section */}
        <div className="mt-12 bg-white text-red-900 max-w-6xl mx-auto rounded-2xl shadow-md p-8 sm:p-12 space-y-10 text-lg leading-relaxed transition-shadow duration-300 mb-6 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          <div className="flex flex-col md:flex-row items-start gap-10">
            {/* Image */}
            <img
              src="/images/phone.png"
              alt="Android handheld"
              className="w-40 sm:w-48 md:w-56 lg:w-64 object-contain"
            />

            {/* Text */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-red-800">
                Why Choose Our Android Handheld?
              </h2>

              <p className="text-gray-700 mb-4">
                Our Android handheld devices offer seamless integration,
                real-time syncing, durable performance, and a user-friendly
                interface tailored for enforcement officers on the go.
              </p>

              <p className="text-gray-700 mb-4">
                As the industry leader in cutting-edge mobile handheld solutions
                for cities, municipalities, and schools, Phoenix Group takes
                great pride in a top-quality product line and our highly
                recognized service solutions.
              </p>

              <ul className="list-disc list-inside text-red-900 space-y-3 text-xl font-semibold leading-relaxed bg-red-100/50 rounded-lg p-6">
                <li>Select from the latest available Android devices.</li>
                <li>Minimal up-front cost with boundless long-term savings.</li>
                <li>Easy to use and proven to increase user efficiency.</li>
                <li>Fast and seamless integration with existing systems.</li>
                <li>Exclusive Wincite Application pre-installed.</li>
                <li>No more dock-to-sync redundancy — auto sync via Wi-Fi or optional data plan.</li>
                <li>Fastest print-to-process speed in the industry.</li>
                <li>Mobile-friendly Bluetooth printing capability.</li>
                <li>Variety of field-ready Bluetooth printers to choose from.</li>
                <li>No more ink! Thermal printing technology.</li>
                <li>No more envelopes! Heat, light, and weather-resistant paper.</li>
                <li>Fully customizable citation formats and artwork.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
