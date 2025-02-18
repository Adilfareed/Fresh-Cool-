import { motion } from "framer-motion";
import { FaTruck, FaSnowflake, FaUsers, FaBox, FaShippingFast, FaWarehouse } from "react-icons/fa";

const services = [
  {
    title: "Chiller Van Rental",
    description: "We have small to large chiller vans to provide made-to-measure solutions.",
    icon: <FaTruck className="text-orange-500 text-4xl mx-auto" />,
  },
  {
    title: "Freezer Van Rental",
    description: "We provide freezer vans for your transportation needs. This can carry frozen meat foods.",
    icon: <FaSnowflake className="text-orange-500 text-4xl mx-auto" />,
  },
  {
    title: "Chiller Truck Rental",
    description: "These trucks are similar to chiller vans but carry more load compared to vans.",
    icon: <FaUsers className="text-orange-500 text-4xl mx-auto" />,
  },
  {
    title: "Freezer Truck Rental",
    description: "We provide freezer trucks for your transportation needs. This can carry frozen foods.",
    icon: <FaBox className="text-orange-500 text-4xl mx-auto" />,
  },
  {
    title: "Cold Transport",
    description: "As a refrigerated transport company, we have small and medium-size refrigerated vehicles.",
    icon: <FaShippingFast className="text-orange-500 text-4xl mx-auto" />,
  },
  {
    title: "Cargo Van Rental",
    description: "Cargo van rentals provide a very cost-effective and efficient service.",
    icon: <FaWarehouse className="text-orange-500 text-4xl mx-auto" />,
  },
];

const ServicesSection = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 md:px-20 text-center">
      <h3 className="text-blue-600 uppercase text-sm font-semibold">Our Services</h3>
      <h2 className="text-3xl md:text-4xl font-bold mt-2">
        We Provide World-Class Logistic Services
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-white p-6 border hover:bg-[#03bacc] hover:text-white border-blue-400 rounded-lg shadow-md hover:shadow-xl transition-all relative"
          >
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
            <div className="mt-4">{service.icon}</div>
            <div className="absolute bottom-2 right-2 text-blue-500 opacity-40">
              <FaTruck className="text-2xl" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
