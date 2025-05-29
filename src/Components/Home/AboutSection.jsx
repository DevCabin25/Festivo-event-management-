import React from "react";

const AboutSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white">
      <div className="my-4">
        <img className="rounded-r-xl" src="https://i.ibb.co/QFMG5KcM/luxurious-dinner-hall-with-large-crystal-chandelier.jpg" alt="" />
      </div>
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Festivo</h2>
          <p className="text-lg text-gray-600 mb-6">
            Festivo is your ultimate event management platform, designed to simplify the planning and execution of events of all sizes. 
            From weddings to corporate gatherings, we provide the tools you need to create unforgettable experiences.
          </p>
          <p className="text-lg text-gray-600">
            Our mission is to empower event professionals with innovative solutions that enhance productivity, creativity, and collaboration. 
            Join us in transforming the way events are planned and executed.
          </p>
          <button className="border border-purple-300 p-2 px-4 text-purple-500 rounded-md mt-4">About Us</button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
