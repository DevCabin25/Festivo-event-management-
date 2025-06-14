import React, { useState } from "react";

const services = [
  {
    title: "Photography & Videography",
    items: [
      "Event photographers (hourly or full-day)",
      "Traditional or cinematic videography",
      "Drone coverage (optional)",
    ],
  },
  {
    title: "Car Rentals",
    items: [
      "Sedan, SUV, and luxury cars",
      "Wedding cars with floral decoration",
      "Shuttle services for guests",
    ],
  },
  {
    title: "Stages & Equipment",
    items: [
      "Basic, premium, and themed stage setups",
      "LED screens and stage lighting",
      "Podiums, sound systems, DJ setups",
    ],
  },
  {
    title: "Decorations",
    items: [
      "Floral, fabric, LED, and theme-based decor",
      "Mandap, archways, centerpieces",
      "Indoor & outdoor setup options",
    ],
  },
  {
    title: "Clothing & Styling",
    items: [
      "Bridal & groom attire coordination",
      "Makeup artists & stylists",
      "Traditional and modern dress providers",
    ],
  },
  {
    title: "Invitations & More",
    items: [
      "Printed invitation card design & printing",
      "Digital invites (PDF, WhatsApp-ready)",
      "Gift packaging & return favors",
    ],
  },
];

const CustomPlan = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const openModal = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your booking request has been submitted!");
    closeModal();
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-pink-50 py-12 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Customized Event Plan
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Tailor your event exactly how you envision it. Select from our wide
          range of services to craft an unforgettable experience.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between
              transform transition duration-500 ease-in-out hover:scale-105 
              animate-fadeInUp"
            style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "both" }}
          >
            <div>
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {service.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => openModal(service.title)}
              className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
            >
             Book Now
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-8 w-full max-w-md relative shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Book: {selectedService}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Your Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Phone Number</label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Service</label>
                <input
                  type="text"
                  value={selectedService}
                  readOnly
                  className="w-full border bg-gray-100 border-gray-300 rounded px-3 py-2"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Submit Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomPlan;
