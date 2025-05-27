import React, { useState } from 'react';

const About = () => {
    const [activeTab, setActiveTab] = useState('mission');

    const tabs = [
        { id: 'mission', label: 'Our Mission' },
        { id: 'story', label: 'Our Story' },
        { id: 'values', label: 'Our Values' }
    ];

    const achievements = [
        { number: '5000+', text: 'Events Managed' },
        { number: '98%', text: 'Client Satisfaction' },
        { number: '200+', text: 'Cities Covered' },
        { number: '24/7', text: 'Support Available' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-90"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Redefining Event Management
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Where technology meets creativity to create unforgettable experiences
                        </p>
                    </div>
                </div>
            </div>

            {/* Achievement Cards */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {achievements.map((achievement, index) => (
                        <div key={index} 
                             className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
                            <div className="text-3xl font-bold text-blue-600">{achievement.number}</div>
                            <div className="text-gray-600 mt-2">{achievement.text}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Tab Navigation */}
                <div className="flex justify-center space-x-4 mb-12">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                activeTab === tab.id
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'bg-white text-blue-600 hover:bg-blue-50'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    {activeTab === 'mission' && (
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-blue-900">Our Mission</h2>
                            <p className="text-gray-700 leading-relaxed">
                                At Festivo, we're on a mission to transform the event management landscape. 
                                We believe every event deserves to be extraordinary, whether it's a corporate 
                                gathering, wedding celebration, or community festival.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                                <div className="bg-blue-50 p-6 rounded-xl">
                                    <h3 className="text-xl font-semibold text-blue-800 mb-3">What We Do</h3>
                                    <p className="text-gray-700">
                                        We provide cutting-edge event management solutions that combine 
                                        technology with human touch, making event planning seamless and enjoyable.
                                    </p>
                                </div>
                                <div className="bg-purple-50 p-6 rounded-xl">
                                    <h3 className="text-xl font-semibold text-purple-800 mb-3">How We Do It</h3>
                                    <p className="text-gray-700">
                                        Through innovative tools, dedicated support, and a passion for 
                                        creating memorable experiences, we help bring your vision to life.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'story' && (
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-blue-900">Our Story</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-4">
                                    <p className="text-gray-700 leading-relaxed">
                                        Born from a passion for creating unforgettable moments, Festivo 
                                        started as a small team of event enthusiasts who saw the need for 
                                        better event management solutions.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed">
                                        Today, we've grown into a global platform trusted by thousands of 
                                        event professionals, but our commitment to excellence remains the same.
                                    </p>
                                </div>
                                <div className="relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622"
                                        alt="Event Celebration"
                                        className="rounded-xl shadow-lg w-full h-64 object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'values' && (
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-blue-900">Our Values</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    {
                                        title: "Innovation",
                                        description: "Constantly pushing boundaries to create better solutions",
                                        icon: "💡"
                                    },
                                    {
                                        title: "Excellence",
                                        description: "Committed to delivering the highest quality service",
                                        icon: "⭐"
                                    },
                                    {
                                        title: "Community",
                                        description: "Building strong relationships with our clients and partners",
                                        icon: "🤝"
                                    }
                                ].map((value, index) => (
                                    <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
                                        <div className="text-4xl mb-4">{value.icon}</div>
                                        <h3 className="text-xl font-semibold text-blue-800 mb-2">{value.title}</h3>
                                        <p className="text-gray-700">{value.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-8">
                        Ready to Transform Your Events?
                    </h2>
                    <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
                        Get Started Today
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
