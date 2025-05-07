export default function Banner() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/parkingmeter.jpeg')" }}
    >
      <div className="flex justify-center items-center h-1/3">
        <div className="flex justify-center items-start flex-col text-gray-500 text-base sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          <h1>Citation Management Systems</h1>
          <h2>
            We manage every phase in the life of a parking citation<br/> from the
            time an officer places it on the vehicle through payment.
          </h2>
        </div>
      </div>
    </div>
  );
}
