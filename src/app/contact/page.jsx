import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="p-8 md:p-12 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
        Need a Chiller Van? Contact Fresh & Cooled Transport!
      </h2>
      <div className="flex flex-col md:flex-row justify-between bg-white p-6 rounded-lg shadow-lg">
        <div className="md:w-1/2">
          <p className="text-gray-700 mb-6 leading-relaxed p-2 ">
            Got questions? Need a reliable transport solution? We’re here to help!
            Get in touch with Fresh & Cooled Transport for expert guidance on chiller
            vans, freezer trucks, cargo transport, and more. Whether you need a quote,
            booking assistance, or custom transportation solutions, our team is ready to assist.
          </p>
          <div className="mb-4">
            <p className="font-bold text-2xl text-gray-800">Our Location</p>
            <p className="text-gray-700">UAE</p>
          </div>
          <div className="mb-4">
            <p className="font-bold text-2xl text-gray-800">Phone</p>
            <p className="text-gray-700">+923303949638</p>
          </div>
          <div className="mb-4">
            <p className="font-bold text-2xl text-gray-800">Email</p>
            <p className="text-gray-700">info@fastandcooltransport.com</p>
          </div>
        </div>
        <div className="md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Get In Touch</h3>
          <form className="text-gray-800">
            <input type="text" placeholder="Name" className="w-full p-3 mb-4 border rounded" />
            <input type="email" placeholder="Email" className="w-full p-3 mb-4 border rounded" />
            <input type="text" placeholder="Phone" className="w-full p-3 mb-4 border rounded" />
            <textarea placeholder="Get a message" className="w-full p-3 mb-4 border rounded"></textarea>
            <button className="bg-[#03bacc] text-white px-6 py-3 rounded-lg font-bold w-full hover:bg-blue-700 transition">
              Get A Quick Quote
            </button>
          </form>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Fresh & Cooled Transport?</h2>
        <p className="text-gray-700 mb-4">Reliable & On-Time Deliveries</p>
        <ul className="text-gray-700 space-y-2">
          <li className="flex items-center"><FaCheckCircle className="text-green-600 mr-2" /> Modern Fleet with Temperature-Controlled Vehicles</li>
          <li className="flex items-center"><FaCheckCircle className="text-green-600 mr-2" /> Custom Transport Solutions for Every Industry</li>
          <li className="flex items-center"><FaCheckCircle className="text-green-600 mr-2" /> 24/7 Customer Support for Urgent Inquiries</li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
