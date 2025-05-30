import React from "react";

const About = () => {
  const teamStats = [
    { number: "50+", label: "Expert Planners" },
    { number: "1000+", label: "Events Yearly" },
    { number: "15+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-400 to-purple-400">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              About Festivo
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Transforming ordinary gatherings into extraordinary experiences
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622"
                alt="Event Management"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2010, Festivo began with a simple yet powerful vision:
              to create memorable events that reflect Bangladesh's rich cultural
              heritage while incorporating modern design elements and
              world-class service standards. What started as a small team of
              passionate event enthusiasts has grown into one of Bangladesh's
              premier event management agencies, with a portfolio spanning
              elegant weddings, high-profile corporate events, memorable
              birthday celebrations, and authentic cultural programs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">
              Why Choose Festivo?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Festivo, we understand that every event is a unique story
              waiting to be told. Our platform combines cutting-edge technology
              with human expertise to create seamless, memorable experiences.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Innovative Solutions
                  </h3>
                  <p className="text-gray-600">
                    State-of-the-art tools for modern event management
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Expert Support
                  </h3>
                  <p className="text-gray-600">
                    Dedicated team of event professionals at your service
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌐</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Global Reach
                  </h3>
                  <p className="text-gray-600">
                    Connect with vendors and clients worldwide
                  </p>
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
                    <div className="text-2xl font-bold text-blue-600">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team */}

      <div>
        <div className="flex flex-col justify-center items-center my-10 gap-4">
          <h2 className="text-4xl font-bold">
            Meet Our <span className="text-purple-400">Team</span>
          </h2>
          <p>
            Our talented team of event professionals is dedicated to making your
            event perfect in every way.
          </p>
        </div>

        <div className="my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                alt="Team Member"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">Event Manager</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                alt="Team Member"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-600">Creative Director</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                alt="Team Member"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold">Alice Johnson</h3>
              <p className="text-gray-600">Logistics Coordinator</p>
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
