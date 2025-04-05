import { FaBox, FaTruckMoving, FaGlobe, FaShippingFast } from 'react-icons/fa';

const features = [
  {
    icon: <FaBox className="text-3xl text-blue-500" />, 
    title: "Safe Packing", 
    description: "We can deliver your products anywhere in Dubai, Sharjah, Abu Dhabi, and Al Ain."
  },
  {
    icon: <FaTruckMoving className="text-3xl text-blue-500" />, 
    title: "Clean Vehicle", 
    description: "Delivery requires a room at the cold feature while on the movement."
  },
  {
    icon: <FaGlobe className="text-3xl text-blue-500" />, 
    title: "Quality Service", 
    description: "Advanced cooling system, so it can keep any sort of foods, items, products."
  },
  {
    icon: <FaShippingFast className="text-3xl text-blue-500" />, 
    title: "Fastest Delivery", 
    description: "Our transport speedy and reliable delivery give them best possible service."
  }
];

const services = [
  "Freezer Van Rental in Dubai",
  "Freezer Van for Rent in UAE",
  "Toyota Hiace high Roof for Rent",
  "Hire Freezer Van without Driver",
  "Freezer Van with Driver",
  "Delivery van for Rent in Dubai",
  "Rent on a Daily, Weekly & Monthly Basis",
  "Most Suitable Prices for the Freezer Van"
];

const serviceHighlights = [
  { number: "01", text: "Safe & Secure Delivery Services" },
  { number: "02", text: "Huge Cost Savings Delivery" },
  { number: "02", text: "Huge Cost Savings Delivery" }
];

export default function FreezerVanSection() {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-8">
      
        <div>
          <h2 className="text-blue-600 font-semibold">Hire Freezer Van For Rent in Dubai</h2>
          <h1 className="text-2xl font-bold mt-2 text-gray-800">Looking toward a valid Freezer Van for rent organization in Dubai?</h1>
          <p className="text-gray-600 mt-4">
            Our Freezer Van has an excellent cooling system, so its container keeps whatever kind of stock stays fresh, frozen if you want it, and healthy. We package and deliver your goods anywhere in Dubai. At Freezer Van Transport, we care for customers’ needs, hence why we try to give the best feasible service.
          </p>
          <ul className="mt-4 space-y-2 text-gray-700">
            {services.map((service, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-blue-500">■</span>
                {service}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-start">
              {feature.icon}
              <h3 className="text-lg font-semibold mt-4 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center mt-12">
        <h2 className="text-blue-600 font-semibold">Freezer Van Services Frozen Food Transport</h2>
        <h1 className="text-2xl font-bold text-gray-800 mt-2">Available 24/7 During Regular 12 Hours Of Service</h1>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          We have Toyota Hiace for Freezer Van Rental, with and without driver for rent on daily, weekly and monthly basis. Refrigerated transport capacity up to 1 ton. Get the most suitable prices for the Freezer van for rent. Freezer van either freezer van remains best of low supply product transportation up to 1 ton in weight.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="space-y-4">
          {serviceHighlights.map((item, index) => (
            <div key={index} className="flex items-center bg-white shadow-md p-4 rounded-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white font-bold rounded-full mr-4">
                {item.number}
              </div>
              <span className="text-lg font-semibold text-gray-800">{item.text}</span>
            </div>
          ))}
        </div>
        <div className="relative">
          <img src="assets/hiacechiller.jpg"  alt="Freezer Van" className="w-full rounded-lg shadow-lg" />
          <div className="absolute top-6 left-6 bg-white px-4 py-2 shadow-md rounded-lg text-gray-800 font-semibold">
            5+ Years Experience
          </div>
        </div>
      </div>
    </section>
  );
}