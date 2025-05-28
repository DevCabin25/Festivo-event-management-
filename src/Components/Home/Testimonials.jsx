import React from 'react';

const Testimonials = () => {
    return (
        <div>
          
            <div className="bg-[#e5deff] py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">
                            Trusted by Event Professionals
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Join thousands of successful event planners who trust Festivo
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="flex items-center mb-6">
                                <img
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                                    alt="Sarah Johnson"
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div className="ml-4">
                                    <h4 className="text-lg font-semibold text-gray-900">Sarah Johnson</h4>
                                    <p className="text-blue-600">Wedding Planner</p>
                                </div>
                            </div>
                            <p className="text-gray-600 italic">
                                "Festivo has revolutionized how I manage weddings. The platform's efficiency 
                                and support team are unmatched."
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="flex items-center mb-6">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                                    alt="Michael Chen"
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div className="ml-4">
                                    <h4 className="text-lg font-semibold text-gray-900">Michael Chen</h4>
                                    <p className="text-blue-600">Corporate Event Director</p>
                                </div>
                            </div>
                            <p className="text-gray-600 italic">
                                "The analytics and reporting features have been game-changers for our 
                                corporate events. Highly recommended!"
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="flex items-center mb-6">
                                <img
                                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
                                    alt="Emma Rodriguez"
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div className="ml-4">
                                    <h4 className="text-lg font-semibold text-gray-900">Emma Rodriguez</h4>
                                    <p className="text-blue-600">Community Event Organizer</p>
                                </div>
                            </div>
                            <p className="text-gray-600 italic">
                                "Managing community events has never been easier. The platform's flexibility 
                                is exactly what we needed."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;