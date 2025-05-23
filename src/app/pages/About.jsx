import React from "react";
import chillertruck from '../assets/chillertruck.png'
import OurWorkSection from "../components/OurWorkSection";
import { FiArrowRight } from "react-icons/fi";
import chillerhiace from '../assets/hiace chiller.jpg'
import { Link } from "react-router-dom";
const AboutUs = () => {
    return (

        <div>
            <section className="flex flex-col md:flex-row items-center bg-white py-10 px-6 md:px-16 lg:px-24">
                <div className="w-full md:w-1/2 flex flex-col space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900">About Fresh & Cooled Transport</h2>
                    <p className="text-gray-700">
                        At Fresh & Cooled Transport, we are dedicated to providing top-tier
                        refrigerated transport solutions across the UAE. With years of
                        experience in the industry, we specialize in chiller van rentals, freezer
                        vehicle hire, and comprehensive cold chain logistics. Our mission is
                        to ensure the safe and efficient delivery of temperature-sensitive
                        goods, helping businesses maintain the quality of their products
                        from pickup to delivery.
                    </p>
                    <p className="text-gray-900 font-bold">Advanced Technology:</p>
                    <p className="text-gray-700">
                        Every van is equipped with state-of-the-art refrigeration, GPS tracking,
                        and digital temperature monitoring, ensuring precision and reliability.
                    </p>
                    <p className="text-gray-900 font-bold">Flexible rental:</p>
                    <p className="text-gray-700">
                        We offer <span className="font-bold">van rental services in Dubai</span> with short-term
                        and long-term contracts tailored to your business needs.
                    </p>
                    <p className="text-gray-900 font-bold">Wide Service Area:</p>
                    <p className="text-gray-700">
                        Serving Dubai, Abu Dhabi, Sharjah, and beyond, we bring our reliable transport
                        services to your doorstep across the UAE.
                    </p>
                    <Link to='/contact'>
                    <button className="bg-[#03bacc] text-white px-6 py-3 rounded-lg font-bold transition">
                        Contact us
                    </button>
                    </Link>
                </div>
                <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
                    <img
                        src={chillerhiace }
                        alt="Fresh & Cool Transport Vehicles"
                        className="rounded-lg shadow-lg w-full max-w-md"
                    />
                </div>
            </section>

            <OurWorkSection />

            <section className="bg-white p-6 md:p-12 flex flex-col md:flex-row items-center border rounded-lg shadow-md">
                <div className="md:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        Freezer Chiller Truck Rental in Dubai
                    </h2>
                    <p className="text-gray-700">
                        Looking to rent a <strong>freezer chiller truck in Dubai</strong> for your next event?
                        Fast and Cool Transport, we provide high-quality, fully functional trucks ideal
                        for private parties, corporate events, and more. Our vehicles are hygienic,
                        polished, and designed to assist your catering or kitchen staff efficiently.
                    </p>
                    <p className="text-gray-700 mt-2">
                        With a variety of sizes available, we ensure the perfect fit for your event needs.
                        Trust us to keep your food and beverages fresh and your event stress-free.
                    </p>
                </div>
                <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
                    <img
                        src="/mnt/data/image.png"
                        alt="Freezer Chiller Truck Rental"
                        className="rounded-lg shadow-lg w-full max-w-md"
                    />
                </div>
            </section>
            <section className="bg-gradient-to-r from-blue-300 via-blue-100 to-blue-300 hover:from-blue-400 my-4 hover:via-blue-200 hover:to-blue-400 text-white p-8 md:p-12 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center transition-all duration-300">
                <div className="md:w-3/4">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">What We Offer</h2>
                    <p className="text-blue-800">
                        We provide a wide range of transportation services to suit your needs.
                        From air and rail freight support to freezer and chiller van rentals, we ensure
                        safe and reliable delivery. Our expertise includes pharmaceutical transport
                        and delicate flower and plant deliveries. For event catering and special occasions,
                        we offer tailored solutions to keep things running smoothly. Trust us for professional
                        and efficient service every time!
                    </p>
                </div>
                <div className="md:w-1/4 flex justify-center mt-6 md:mt-0">
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold flex items-center space-x-2 shadow-md hover:bg-gray-100 transition">
                        <FiArrowRight />
                      <Link to='/contact'><span>Contact Now</span></Link>  
                    </button>
                </div>
            </section>

        </div>
    );
};

export default AboutUs;
