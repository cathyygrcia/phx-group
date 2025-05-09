export default function Banner() {
  return (
    <div
      className="w-full min-h-[75vh] bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/parkingmeter.jpeg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-6 lg:px-20">
        <div className="text-center text-white mt-16 max-w-2xl">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Citation Management Systems
          </h1>
          <p className="text-base sm:text-lg md:text-2xl font-medium">
            We manage every phase in the life of a parking citation —
            from the time an officer places it on the vehicle through payment.
          </p>
          <button className="mt-6 w-2/5 py-2 px-4  text-white  bg-red-900 rounded-lg transition-all duration-300 hover:bg-transparent hover:border-2">
            See More
          </button>

        </div>
      </div>
    </div>
  );
}
