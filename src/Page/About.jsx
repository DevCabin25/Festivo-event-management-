import React from 'react';

const About = () => {
    const services = [
        {
            icon: "🎉",
            title: "Event Planning",
            description: "From concept to execution, we handle every detail of your event"
        },
        {
            icon: "📊",
            title: "Event Analytics",
            description: "Data-driven insights to optimize your event performance"
        },
        {
            icon: "🤝",
            title: "Vendor Management",
            description: "Connect with trusted vendors and manage relationships seamlessly"
        },
        {
            icon: "📱",
            title: "Digital Solutions",
            description: "Modern tools for event registration and management"
        }
    ];

    const teamStats = [
        { number: "50+", label: "Expert Planners" },
        { number: "1000+", label: "Events Yearly" },
        { number: "15+", label: "Years Experience" }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-400 to-purple-400">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            Your Event, Our Passion
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Transforming ordinary gatherings into extraordinary experiences
                        </p>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} 
                             className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-bold text-gray-900">
                            Why Choose Festivo?
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            At Festivo, we understand that every event is a unique story waiting to be told. 
                            Our platform combines cutting-edge technology with human expertise to create 
                            seamless, memorable experiences.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <span className="text-2xl">✨</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Innovative Solutions</h3>
                                    <p className="text-gray-600">State-of-the-art tools for modern event management</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                    <span className="text-2xl">🎯</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Expert Support</h3>
                                    <p className="text-gray-600">Dedicated team of event professionals at your service</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <span className="text-2xl">🌐</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Global Reach</h3>
                                    <p className="text-gray-600">Connect with vendors and clients worldwide</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622"
                                alt="Event Management"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6">
                            <div className="flex space-x-8">
                                {teamStats.map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                                        <div className="text-sm text-gray-600">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonial Section */}
            <div className="bg-gray-50 py-24">
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

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-8">
                        Ready to Elevate Your Events?
                    </h2>
                    <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
                        Start Your Journey
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
