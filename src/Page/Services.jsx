import React from "react";
import { MdCorporateFare } from "react-icons/md";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { FcHome } from "react-icons/fc";
import { FaBuildingColumns } from "react-icons/fa6";
import { FaUtensils } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-r from-blue-400 to-purple-400">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive event management solutions tailored to your needs
            </p>
          </div>
        </div>
      </div>

     <div className="flex flex-col items-center justify-center py-8 gap-4">
         <div className="grid grid-cols-1 gap-5 m-5 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-3">
          <h2 className="text-3xl font-bold">Wedding Events</h2>
          <p>
            We create magical wedding celebrations that honor traditions while
            incorporating your personal style. From intimate ceremonies to grand
            receptions, we handle every detail.
          </p>
          <h5 className="font-semibold text-xl">What We Offer:</h5>
          <ul className="list-disc pl-5">
            <li>Venue selection and decoration</li>
            <li>Catering and menu planning</li>
            <li>Guest management and invitations</li>
            <li>Photography and videography coordination</li>
            <li>Entertainment arrangements</li>
          </ul>

          <button className="bg-purple-400 text-white px-8 py-2 rounded-md font-medium hover:bg-blue-700 transition duration-300">
            Get a Quote
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 m-5 md:grid-cols-2 lg:grid-cols-2">
       
        <div className="flex flex-col justify-center items-start gap-3">
          <h2 className="text-3xl font-bold">Wedding Events</h2>
          <p>
            We create magical wedding celebrations that honor traditions while
            incorporating your personal style. From intimate ceremonies to grand
            receptions, we handle every detail.
          </p>
          <h5 className="font-semibold text-xl">What We Offer:</h5>
          <ul className="list-disc pl-5">
            <li>Venue selection and decoration</li>
            <li>Catering and menu planning</li>
            <li>Guest management and invitations</li>
            <li>Photography and videography coordination</li>
            <li>Entertainment arrangements</li>
          </ul>

          <button className="bg-purple-400 text-white px-8 py-2 rounded-md font-medium hover:bg-blue-700 transition duration-300">
            Get a Quote
          </button>
        </div>
         <div>
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622"
            alt=""
          />
        </div>


      </div>
      <div className="grid grid-cols-1 gap-5 m-5 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-3">
          <h2 className="text-3xl font-bold">Wedding Events</h2>
          <p>
            We create magical wedding celebrations that honor traditions while
            incorporating your personal style. From intimate ceremonies to grand
            receptions, we handle every detail.
          </p>
          <h5 className="font-semibold text-xl">What We Offer:</h5>
          <ul className="list-disc pl-5">
            <li>Venue selection and decoration</li>
            <li>Catering and menu planning</li>
            <li>Guest management and invitations</li>
            <li>Photography and videography coordination</li>
            <li>Entertainment arrangements</li>
          </ul>

          <button className="bg-purple-400 text-white px-8 py-2 rounded-md font-medium hover:bg-blue-700 transition duration-300">
            Get a Quote
          </button>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Services;
