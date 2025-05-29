import React from 'react';
import { MdCorporateFare } from "react-icons/md";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { FcHome } from "react-icons/fc";
import { FaBuildingColumns } from "react-icons/fa6";
import { FaUtensils } from "react-icons/fa";
import { FaStar  } from "react-icons/fa6";



const Services = () => {
    const services = [
        {
            id: 1,
            title: "Wedding Planning",
            description: "Complete wedding planning and coordination services to make your special day unforgettable.",
            icon: <FcHome></FcHome>
        },
        {
            id: 2,
            title: "Corporate Events",
            description: "Professional corporate event management for conferences, seminars, and team building activities.",
            icon: <MdCorporateFare></MdCorporateFare>
        },
        {
            id: 3,
            title: "Birthday Celebrations",
            description: "Creative and personalized birthday party planning for all ages.",
            icon: <LiaBirthdayCakeSolid></LiaBirthdayCakeSolid>
        },
        {
            id: 4,
            title: "Venue Selection",
            description: "Expert guidance in finding and booking the perfect venue for your event.",
            icon: <FaBuildingColumns></FaBuildingColumns>
        },
        {
            id: 5,
            title: "Catering Services",
            description: "Coordination with top caterers to ensure delicious food and beverages at your event.",
            icon:<FaUtensils></FaUtensils>
        },
        {
            id: 6,
            title: "Event Decoration",
            description: "Stunning decoration and theme design to create the perfect ambiance.",
            icon:<FaStar ></FaStar >
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Our Services
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Comprehensive event management solutions tailored to your needs
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
                        >
                            <div className="p-6">
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Services;