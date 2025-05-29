import React from 'react';

const ServiceSection = () => {
    return (
        <div>
        <div className='flex flex-col items-center justify-center py-8 gap-4'>
            <h2 className='text-4xl font-bold'>Our <span className='text-purple-400'> Services</span> </h2>
            <p>From event planning to equipment rentals, we offer comprehensive solutions tailored to your specific needs.</p>
        </div>

        <section className="bg-white py-10"> 
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <div>
                            <img src="https://i.ibb.co/4f1x5z3/event-planning.jpg" alt="Event Planning" className="w-full h-48 object-cover rounded-t-lg mb-4" />

                        </div>
                        <h3 className="text-xl font-semibold mb-4">Event Planning</h3>
                        <p className="text-gray-600">Comprehensive planning services for weddings, corporate events, and more.</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <div>
                            <img src="https://i.ibb.co/4f1x5z3/event-planning.jpg" alt="Event Coordination" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Venue Booking</h3>
                        <p className="text-gray-600">Access to a wide range of venues to suit any occasion.</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <div>
                            <img src="https://i.ibb.co/4f1x5z3/event-planning.jpg" alt="Catering Services" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Catering Services</h3>
                        <p className="text-gray-600">Delicious catering options tailored to your event's theme and preferences.</p>
                    </div>
                    
                    
                </div>
            </div>

        </section>



            
        </div>
    );
};

export default ServiceSection;