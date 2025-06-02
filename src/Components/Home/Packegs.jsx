import React, { useState } from "react";

const packages = [
  {
    name: "Essential Fest",
    budget: "Low Budget Package",
    emoji: "🔹",
    features: [
      "Basic stage setup",
      "1 professional photographer",
      "Standard decoration (floral + fabric)",
      "Sound system & lighting",
      "50–100 guest seating arrangement",
      "One event coordinator",
    ],
    price: "৳20,000",
  },
  {
    name: "Classic Celebration",
    budget: "Medium Budget Package",
    emoji: "🔹",
    features: [
      "Custom stage with premium backdrop",
      "Photographer + Videographer (4 hours coverage)",
      "Themed decoration (custom colors/styles)",
      "Branded sound system & lighting",
      "Guest management (up to 200 guests)",
      "Basic car service for bride/groom",
    ],
    price: "৳60,000",
  },
  {
    name: "Grand Gala",
    budget: "Luxury Package",
    emoji: "🔹",
    features: [
      "Luxury stage design & thematic decor",
      "Full-day photography + cinematic videography",
      "LED walls, custom lighting, and effects",
      "Premium floral arrangements",
      "VIP car rental with chauffeur",
      "Makeup artist & guest hostess team",
      "Printed & digital invitations",
    ],
    price: "৳150,000",
  },
];

const Packegs = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (pkg) => {
    setSelectedPackage(pkg);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPackage(null);
  };

  return (
    <div className="bg-gray-50 py-12 px-4 md:px-10 min-h-screen">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-blue-600 mb-3">
          Plan an Event with Festivo
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          We make event planning simple and stress-free.Whether you want a
          ready-to-go package or a fully customized plan built around your
          specific needs,Festivo is here to make it happen with style,quality,
          and care.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition duration-300"
          >
            <div>
              <h3 className="text-blue-600 text-lg font-semibold mb-1">
                {pkg.emoji} {pkg.budget}
              </h3>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {pkg.name}
              </h2>

              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <p className="text-xl font-semibold text-green-600 mb-4">
                Price: {pkg.price}
              </p>
            </div>

            <button
              onClick={() => openModal(pkg)}
              className="mt-auto w-1/2 mx-auto bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition duration-300"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 text-center">
              Book: {selectedPackage.name}
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded px-3 py-2"
              />
              <textarea
                placeholder="Additional Message"
                className="w-full border rounded px-3 py-2"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Submit Booking
              </button>
            </form>
            <button
              onClick={closeModal}
              className="mt-4 w-full text-sm text-gray-500 hover:text-red-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Packegs;
