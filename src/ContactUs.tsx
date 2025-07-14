import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div id="contact" className="p-8 bg-white/90 rounded-xl shadow-lg max-w-5xl mx-auto">
      <div className="flex flex-col gap-8 md:flex-row md:justify-between text-center items-center">
        {/* Phone */}
        <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <FaPhone className="text-3xl text-red-900 mb-2" />
          <h2 className="text-lg font-semibold text-red-900">Office Phone</h2>
          <p className="text-base text-gray-700">(714) 460-7200</p>
        </div>

        {/* Email */}
        <a
          href="mailto:customerservice@phxgis.com"
          className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
        >
          <FaEnvelope className="text-3xl text-red-900 mb-2" />
          <h2 className="text-lg font-semibold text-red-900">Email</h2>
          <p className="text-base text-gray-700">customerservice@phxgis.com</p>
        </a>

        {/* Location */}
        <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <FaMapMarkerAlt className="text-3xl text-red-900 mb-2" />
          <h2 className="text-lg font-semibold text-red-900">Location</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            2677 North Main Street, Suite 440<br />
            Santa Ana, California 92705
          </p>
        </div>
      </div>
    </div>
  );
}
