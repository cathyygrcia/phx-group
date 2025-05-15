export default function Testimonials() {
  return (
    <section className="bg-gray-50 px-4 py-20">
      <div>
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
          Testimonials
        </h1>
        <hr className="w-32 border-t-4 border-red-800 mx-auto mt-4 mb-14" />
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Card 1 */}
        <div className=" flex  flex-col items-center bg-white/90 p-8 backdrop-blur-md border border-red-800 rounded-2xl shadow-xl w-80 text-center transition-transform hover:-translate-y-1 hover:shadow-2xl duration-300">
          <div className="w-32">
            <img src="/images/del.png" alt="delmar" />
          </div>
          <p className="text-gray-700 italic leading-relaxed ">
            “When the competition starts recommending you and the overwhelming
            consensus among the customer is that Phoenix Group does the best
            job, it is a closed case.”
          </p>
          <div className="pt-6">
            <p className="font-semibold">-Cathy Garcia</p>
            <p>Client Relations</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white/90 backdrop-blur-md border border-red-800 rounded-2xl shadow-xl p-8 w-80 text-center transition-transform hover:-translate-y-1 hover:shadow-2xl duration-300">
          <p className="text-gray-700 italic leading-relaxed">
            “Phoenix Group brought professionalism and creativity to every step
            of our project. They’re simply the best.”
          </p>
        </div>
        {/* Card 3 */}
        <div className="bg-white/90 backdrop-blur-md border border-red-800 rounded-2xl shadow-xl p-8 w-80 text-center transition-transform hover:-translate-y-1 hover:shadow-2xl duration-300">
          <p className="text-gray-700 italic leading-relaxed">
            “I was blown away by their communication, attention to detail, and
            results. Highly recommend.”
          </p>
        </div>
        {/* Card 4 */}
        <div className="bg-white/90 backdrop-blur-md border border-red-800 rounded-2xl shadow-xl p-8 w-80 text-center transition-transform hover:-translate-y-1 hover:shadow-2xl duration-300">
          <p className="text-gray-700 italic leading-relaxed">
            “Their team went above and beyond—on time, on budget, and exceeded
            expectations.”
          </p>
        </div>
      </div>
    </section>
  );
}
