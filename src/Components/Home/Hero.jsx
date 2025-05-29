import React from "react";

const Hero = () => {
  const teamStats = [
    { number: "50+", label: "Expert Planners" },
    { number: "1000+", label: "Events Yearly" },
    { number: "15+", label: "Years Experience" },
  ];
  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Ac mattis
              <span className="dark:text-violet-600">senectus</span>erat
              pharetra
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Dictum aliquam porta in condimentum ac integer
              <br className="hidden md:inline lg:hidden" />
              turpis pulvinar, est scelerisque ligula sem
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
              >
                Suspendisse
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800"
              >
                Malesuada
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full max-w-md lg:max-w-xl aspect-w-16 aspect-h-9">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622"
                alt="Event Management"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
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
      </section>
    </div>
  );
};

export default Hero;
