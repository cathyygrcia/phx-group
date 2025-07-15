import { FaCheckCircle } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section id="chooseus" className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-red-800 mb-6 text-center md:text-left">
            Why Choose Us?
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-center md:text-left">
            <p>
              Phoenix Group Information Systems has an experienced and dedicated
              team for sales, service, and government contracts. Our devotion to
              quality and excellence has made us a trusted name in the industry
              for over 33 years.
            </p>
            <p>
              What sets us apart is our common-sense approach, deep expertise,
              responsiveness, and strong sense of responsibility. We get the job
              done—efficiently and effectively.
            </p>
            <p>
              Phoenix Group recognizes that our most valuable asset is the
              ability to understand and fulfill our customers' needs. We exceed
              expectations through quality, responsiveness, and a commitment to
              grow alongside our clients.
            </p>
          </div>
          <div className="mt-6 flex justify-center md:justify-center">
            <img
              src="/images/customerservice.jpg"
              alt="Customer service representative"
              data-aos="fade-right"
              className="rounded-xl shadow-md w-full max-w-xs object-cover"
            />
          </div>
        </div>

        {/* Right Content with Icons */}
        <div className="md:w-1/2 flex flex-col items-center gap-6">
          <img
            src="/images/cloud.jpg"
            alt="Cloud computing"
                data-aos="fade-left"
            className="rounded-xl shadow-md w-full max-w-sm object-cover"
          />
          <div className="bg-red-800 border border-gray-200 rounded-xl shadow-md p-10 w-full max-w-md text-left">
            <ul className="text-white space-y-4">
              <li className="flex items-center gap-2 justify-start">
                <FaCheckCircle className="text-white" />
                <span>Commitment to Excellence</span>
              </li>
              <li className="flex items-center gap-2 justify-start">
                <FaCheckCircle className="text-white" />
                <span>Proven Expertise</span>
              </li>
              <li className="flex items-center gap-2 justify-start">
                <FaCheckCircle className="text-white" />
                <span>Exceptional Customer Service</span>
              </li>
              <li className="flex items-center gap-2 justify-start">
                <FaCheckCircle className="text-white" />
                <span>State of The Art Technology</span>
              </li>
              <li className="flex items-center gap-2 justify-start">
                <FaCheckCircle className="text-white" />
                <span>Industry Leader</span>
              </li>
              <li className="flex items-center gap-2 justify-start">
                <FaCheckCircle className="text-white" />
                <span>One Stop Shop</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
