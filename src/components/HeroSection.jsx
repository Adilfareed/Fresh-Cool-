import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <div
      ref={ref} // Attach ref to the div
      className="relative w-full h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/hice.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay for Opacity Effect */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl px-6">
        {/* Main Heading */}
        <motion.h1
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }} // Reset animation when out of view
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mt-10 text-[#03bacc]"
        >
          Best Refrigerator Trucks In UAE
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 text-lg md:text-xl"
        >
          We provide commercial refrigerated, dry & chiller trailers, trucks &
          vans on rent in Dubai and all over U.A.E at very affordable prices.
          Fast and easy contracts are available on daily, monthly, yearly, and
          trip basis 24/7.
        </motion.p>

        {/* Button */}
        <Link to='/about'>
        <motion.button
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 px-6 py-3 bg-[#03bacc] rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-600 transition-all"
        >
          Get Started
        </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
