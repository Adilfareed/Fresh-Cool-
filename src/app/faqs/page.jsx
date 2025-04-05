"use client";

import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            category: "General Information About Chiller Vans",
            items: [
                {
                    question: "What is a chiller truck rental in the UAE?",
                    answer: "A chiller truck rental in the UAE provides temperature-controlled transportation for perishable goods, ensuring their freshness and quality."
                },
                {
                    question: "Where can I rent a chiller van in Dubai?",
                    answer: "You can rent a chiller van in Dubai from various rental services specializing in refrigerated transport solutions."
                },
                {
                    question: "How do I book a temperature-controlled truck in the UAE?",
                    answer: "Booking a temperature-controlled truck in the UAE is easy; simply contact a transport company and specify your requirements."
                },
                {
                    question: "What is a cold transport vehicle rental in the UAE?",
                    answer: "Cold transport vehicle rentals in the UAE provide specialized vehicles designed for transporting perishable and temperature-sensitive goods."
                },
                {
                    question: "What industries benefit from chiller truck rentals in the UAE?",
                    answer: "Industries such as food & beverage, pharmaceuticals, florists, and catering services greatly benefit from chiller truck rentals."
                }
            ]
        },
        {
            category: "Costs and Rental Options",
            items: [
                {
                    question: "What is the cost of renting a refrigerated truck in Abu Dhabi?",
                    answer: "The cost of renting a refrigerated truck in Abu Dhabi varies based on the duration and type of vehicle required."
                },
                {
                    question: "Where can I find an affordable chiller truck rental in Dubai?",
                    answer: "Affordable chiller truck rentals can be found by comparing rental services in Dubai and choosing the best deal."
                },
                {
                    question: "What is the cost of a Toyota HiAce chiller van in the UAE?",
                    answer: "The cost of renting a Toyota HiAce chiller van in the UAE depends on the rental provider and duration of use."
                },
                {
                    question: "Can I rent a chiller van in Dubai without a driver?",
                    answer: "Some rental companies in Dubai offer self-drive chiller van rental options for eligible customers."
                },
                {
                    question: "Are there any long-term rental options for chiller vans in the UAE?",
                    answer: "Yes, long-term rental options are available for businesses that require refrigerated transport on a regular basis."
                },
                {
                    question: "Do chiller van rental services in Dubai include fuel costs?",
                    answer: "Fuel costs may or may not be included in chiller van rental services, depending on the rental agreement."
                }
            ]
        },
        {
            category: "Vehicle Types and Features",
            items: [
                {
                    question: "What types of vehicles are available for refrigerated delivery in the UAE?",
                    answer: "Various vehicles such as chiller vans, freezer trucks, and temperature-controlled cargo vehicles are available for refrigerated delivery."
                },
                {
                    question: "Can I hire a cold storage van in the UAE for short-term use?",
                    answer: "Yes, many rental services in the UAE offer short-term cold storage van rentals for temporary use."
                },
                {
                    question: "What is the temperature range of freezer trucks available for rent in Dubai?",
                    answer: "Freezer trucks in Dubai typically maintain temperatures between -18°C and -25°C to ensure safe transportation of frozen goods."
                },
                {
                    question: "Can I rent a chiller van for food delivery in the UAE?",
                    answer: "Yes, chiller vans are widely used for food delivery services across the UAE, ensuring safe and fresh delivery."
                }
            ]
        },
        {
            category: "Rental Processes and Policies",
            items: [
                {
                    question: "How do I rent a chiller truck for events in Dubai?",
                    answer: "To rent a chiller truck for events in Dubai, contact a rental service, provide event details, and choose a vehicle that meets your requirements."
                },
                {
                    question: "What services are included in chiller truck rental packages?",
                    answer: "Chiller truck rental packages often include refrigeration units, maintenance, and insurance for safe transportation of perishable goods."
                },
                {
                    question: "What is the typical lead time for booking a refrigerated truck in Abu Dhabi?",
                    answer: "Lead times vary, but most companies require a booking at least 24-48 hours in advance."
                },
                {
                    question: "What is the rental process for a cold storage van in the UAE?",
                    answer: "The process includes selecting a van type, providing necessary documentation, and signing a rental agreement."
                },
                {
                    question: "What are the requirements for renting a chiller van in the UAE?",
                    answer: "Requirements typically include a valid ID, driver’s license, and a refundable security deposit."
                }
            ]
        },
        {
            "category": "Specific Use Cases",
            "items": [
                {
                    "question": "Is cold chain logistics available in the UAE?",
                    "answer": "Yes, cold chain logistics is available in the UAE to support businesses requiring temperature-controlled transportation."
                },
                {
                    "question": "Can I rent a refrigerated vehicle for perishable goods in the UAE?",
                    "answer": "Yes, refrigerated vehicles are available for rent to transport perishable goods safely across the UAE."
                },
                {
                    "question": "Can I hire a freezer truck for bulk food delivery in Ras Al Khaimah?",
                    "answer": "Yes, freezer trucks are available in Ras Al Khaimah for bulk food delivery, ensuring proper temperature control."
                },
                {
                    "question": "Are rental chiller trucks in Abu Dhabi suitable for seafood transportation?",
                    "answer": "Yes, chiller trucks in Abu Dhabi are well-suited for seafood transportation, maintaining freshness during transit."
                },
                {
                    "question": "Can I use a chiller van rental in Dubai for pharmaceuticals?",
                    "answer": "Yes, chiller van rentals in Dubai are commonly used for pharmaceutical transportation to maintain required temperatures."
                },
                {
                    "question": "Can I rent a freezer van in Dubai for frozen food delivery?",
                    "answer": "Yes, freezer vans are available in Dubai for frozen food delivery, ensuring compliance with food safety standards."
                },
                {
                    "question": "Is it possible to transport flowers using a chiller van rental in the UAE?",
                    "answer": "Yes, chiller vans are often used to transport flowers in the UAE, preserving their freshness."
                },
                {
                    "question": "Are refrigerated delivery trucks in the UAE suitable for dairy products?",
                    "answer": "Yes, refrigerated delivery trucks are suitable for transporting dairy products while maintaining the required temperature."
                }
            ]
        }
        ,
        {
            "category": "Locations and Availability",
            "items": [
                {
                    "question": "Do rental companies in Sharjah offer chiller trucks for long-distance transport?",
                    "answer": "Yes, several rental companies in Sharjah provide chiller trucks for long-distance transport to maintain temperature control."
                },
                {
                    "question": "Are freezer truck hire services available in Dubai for weekly rentals?",
                    "answer": "Yes, freezer truck hire services in Dubai offer weekly rental options for businesses and logistics companies."
                },
                {
                    "question": "Are there temperature-controlled delivery services in Fujairah?",
                    "answer": "Yes, temperature-controlled delivery services are available in Fujairah for perishable and sensitive goods."
                },
                {
                    "question": "Can I find chiller vans for rent in Abu Dhabi for one day?",
                    "answer": "Yes, chiller vans in Abu Dhabi are available for short-term rentals, including one-day options."
                },
                {
                    "question": "What vehicles are available for refrigerated transport in Ajman?",
                    "answer": "Refrigerated transport options in Ajman include chiller vans, freezer trucks, and temperature-controlled delivery vehicles."
                },
                {
                    "question": "Are there used chiller vans for sale in Sharjah?",
                    "answer": "Yes, used chiller vans are available for sale in Sharjah through various dealerships and rental companies."
                },
                {
                    "question": "Where can I find used chiller vans for sale in Ajman?",
                    "answer": "Used chiller vans can be found for sale in Ajman at vehicle dealerships, rental companies, and online marketplaces."
                }
            ]
        }
        ,
        {
            "category": "Maintenance and Service Standards",
            "items": [
                {
                    "question": "What are the maintenance standards for rented chiller trucks?",
                    "answer": "Rented chiller trucks must meet strict maintenance standards, including regular refrigeration unit checks, temperature monitoring, and compliance with food safety regulations."
                },
                {
                    "question": "How do I ensure my goods stay fresh during transportation?",
                    "answer": "To keep goods fresh, use properly calibrated chiller trucks, monitor temperature levels, and minimize door openings during transit."
                }
            ]
        }
        ,
        {
            "category": "Recommendations",
            "items": [
                {
                    "question": "What is the best chiller van service in the UAE?",
                    "answer": "The best chiller van service in the UAE depends on factors such as reliability, pricing, and customer reviews. Some top-rated providers include XYZ Logistics and ABC Cold Transport."
                },
                {
                    "question": "How do I select the best chiller truck service in Dubai?",
                    "answer": "Consider factors such as fleet condition, customer feedback, pricing, and compliance with food safety regulations when selecting a chiller truck service in Dubai."
                }
            ]
        }

    ];

    return (
        <section className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center">
            {faqs.map((section, secIndex) => (
                <div key={secIndex} className="mb-8 w-full md:w-3/4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                        {secIndex + 1}. {section.category}
                    </h2>
                    <div className="space-y-4">
                        {section.items.map((faq, index) => (
                            <div key={index} className="border rounded-lg overflow-hidden">
                                <button
                                    onClick={() => toggleFAQ(`${secIndex}-${index}`)}
                                    className="w-full text-gray-800 flex justify-between items-center p-4 text-left text-lg font-semibold bg-white hover:bg-gray-200"
                                >
                                    <span>{faq.question}</span>
                                    {openIndex === `${secIndex}-${index}` ? <FiMinus /> : <FiPlus />}
                                </button>
                                {openIndex === `${secIndex}-${index}` && (
                                    <div className="p-4 bg-gray-50 text-gray-700 border-t">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default FAQSection;
