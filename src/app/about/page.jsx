"use client";

import Image from "next/image";
import OurWorkSection from "../components/OurWorkSection";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div>
      {/* About Section */}
      <section className="flex flex-col md:flex-row items-center bg-white py-10 px-6 md:px-16 lg:px-24">
        <div className="w-full md:w-1/2 flex flex-col space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">About Fresh & Cooled Transport</h2>
          <p className="text-gray-700">
            At Fresh & Cooled Transport, we are dedicated to providing top-tier refrigerated transport solutions across the UAE. 
            With years of experience, we specialize in chiller van rentals, freezer vehicle hire, and comprehensive cold chain logistics.
          </p>
          <p className="text-gray-900 font-bold">Advanced Technology:</p>
          <p className="text-gray-700">
            Every van is equipped with state-of-the-art refrigeration, GPS tracking, and digital temperature monitoring.
          </p>
          <p className="text-gray-900 font-bold">Flexible Rental:</p>
          <p className="text-gray-700">
            We offer <span className="font-bold">van rental services in Dubai</span> with short-term and long-term contracts tailored to your needs.
          </p>
          <p className="text-gray-900 font-bold">Wide Service Area:</p>
          <p className="text-gray-700">
            Serving Dubai, Abu Dhabi, Sharjah, and beyond, we bring reliable transport services across the UAE.
          </p>
          <Link href="/contact">
            <button className="bg-[#03bacc] text-white px-6 py-3 rounded-lg font-bold transition">Contact us</button>
          </Link>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <Image 
            src="/assets/hiacechiller.jpg" 
            alt="Fresh & Cool Transport Vehicles" 
            width={400} 
            height={300} 
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>
      </section>

      <OurWorkSection />

      {/* Rental Section */}
      <section className="bg-white p-6 md:p-12 flex flex-col md:flex-row items-center border rounded-lg shadow-md">
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Freezer Chiller Truck Rental in Dubai
          </h2>
          <p className="text-gray-700">
            Looking to rent a <strong>freezer chiller truck in Dubai</strong> for your next event? Fast and Cool Transport provides 
            high-quality, fully functional trucks ideal for private parties, corporate events, and more.
          </p>
          <p className="text-gray-700 mt-2">
            With a variety of sizes available, we ensure the perfect fit for your event needs.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <Image 
            src="/assets/hiacechiller.jpg" 
            alt="Freezer Chiller Truck Rental" 
            width={400} 
            height={300} 
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-blue-300 via-blue-100 to-blue-300 hover:from-blue-400 my-4 hover:via-blue-200 hover:to-blue-400 text-white p-8 md:p-12 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center transition-all duration-300">
        <div className="md:w-3/4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">What We Offer</h2>
          <p className="text-blue-800">
            We provide a wide range of transportation services including air and rail freight, freezer and chiller van rentals, 
            and pharmaceutical transport. Trust us for professional and efficient service every time!
          </p>
        </div>
        <div className="md:w-1/4 flex justify-center mt-6 md:mt-0">
          <Link href="/contact">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold flex items-center space-x-2 shadow-md hover:bg-gray-100 transition">
              <FiArrowRight />
              <span>Contact Now</span>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
