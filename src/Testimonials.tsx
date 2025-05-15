import { reviews } from "./reviews"; 

export default function Testimonials() {
  return (
    <section className="bg-gray-50 px-4 py-12">
      <div>
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-4">
          Testimonials
        </h1>
        <hr className="w-24 border-t-2 border-red-800 mx-auto mt-2 mb-8" />
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white/90 p-6 backdrop-blur-md border border-red-800 rounded-2xl shadow-md w-72 text-center transition-transform hover:-translate-y-1 hover:shadow-xl duration-300"
          >
            <div className="w-20 h-20 mb-3">
              <img
                src={item.image}
                alt={item.signature}
                className="w-full h-full object-contain rounded-full bg-white"
              />
            </div>
            <p className="text-sm text-gray-700 italic leading-snug mb-3">
              “{item.review}”
            </p>
            <div>
              <p className="font-semibold text-sm">{item.signature}</p>
              <p className="text-xs text-gray-500">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
