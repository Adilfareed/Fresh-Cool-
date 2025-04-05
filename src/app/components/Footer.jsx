"use client";

import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaGoogle, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/logo1.png";
import whatsapp from "../../../public/assets/whtasapp.webp";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-300 via-blue-100 to-blue-300 text-black shadow-lg">
      {/* Main Footer Section */}
      <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Logo & Slogan */}
        <div>
          <div className="flex items-center space-x-2">
            <Image src={logo} alt="Logo1" width={144} height={48} className="w-36 h-12 mr-2" />
            <p> <span className="text-[#b4d364] font-bold">Fresh</span> & <span className="text-blue-600 font-bold">Cooled</span> </p>
          </div>
          <p className="mt-2 text-black">Chill on the move: Our freeze trucks redefine freshness in motion.</p>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-semibold text-lg">Contact us</h3>
          <ul className="mt-2 space-y-2 text-black">
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-blue-500" /> <span>United Arab Emirates</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-blue-500" /> <span>info@freshcool.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhone className="text-blue-500" /> <span>+923303949638</span>
            </li>
          </ul>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4">
            <FaFacebook className="text-blue-600 hover:text-blue-800 cursor-pointer" />
            <FaTwitter className="text-blue-400 hover:text-blue-600 cursor-pointer" />
        
            <FaInstagram className="text-pink-500 hover:text-pink-700 cursor-pointer" />
          </div>
        </div>

        {/* Quick Links & Services */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-black">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="mt-2 space-y-2 text-black">
              <li>Chiller Van Rental</li>
              <li>Freezer Van Rental</li>
              <li>Cold Transport</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center py-3 font-medium text-black">
        Copyright © Fresh&Cooled 2025 All Rights Reserved.
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/+9203303949638"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 z-50 p-4 rounded-full shadow-lg hover:bg-green-600 transition-all"
      >
        <Image src={whatsapp} alt="WhatsApp" width={32} height={32} className="w-8 h-8" />
      </a>
    </footer>
  );
};

export default Footer;
