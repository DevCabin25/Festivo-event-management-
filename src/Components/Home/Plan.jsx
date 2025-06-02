import React from 'react';

const Plan = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center py-8 gap-4 bg-gray-100'>
                <h1 className='text-center text-4xl font-bold'>Flexible Plans to Fit Every Budget</h1>
                <p className='text-center'>All-inclusive, pre-designed event solutions for all budgets. Each package includes free consultation and customized planning to ensure your event is perfect.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4'>
                    {/* Low Budget Package */}
                    <div>
                        <div className="bg-white p-6 mt-14 rounded-lg flex flex-col justify-center items-center shadow-lg">
                            <h2 className="text-2xl font-bold mb-4 text-purple-600">Essential Fest</h2>
                            <p className="text-gray-600 mb-4">Ideal for birthdays and small family events.</p>
                            <ul className="list-disc pl-5 text-left mb-4 text-gray-700">
                                <li>Basic stage setup</li>
                                <li>1 professional photographer</li>
                                <li>Standard decoration (floral + fabric)</li>
                                <li>Sound system & lighting</li>
                                <li>50–100 guest seating arrangement</li>
                                <li>One event coordinator</li>
                            </ul>
                            <p className="text-xl font-semibold text-purple-700">$500</p>
                            <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700 transition">Choose Plan</button>
                        </div>
                    </div>
                    {/* Medium Budget Package */}
                    <div>
                        <div className="bg-white p-6 rounded-lg flex flex-col justify-center items-center shadow-lg">
                            <h2 className="text-2xl font-bold mb-4 text-blue-600">Classic Celebration</h2>
                            <p className="text-gray-600 mb-4">Perfect for weddings and engagements.</p>
                            <ul className="list-disc pl-5 text-left mb-4 text-gray-700">
                                <li>Custom stage with premium backdrop</li>
                                <li>Photographer + Videographer (4 hours coverage)</li>
                                <li>Themed decoration (custom colors/styles)</li>
                                <li>Branded sound system & lighting</li>
                                <li>Guest management (up to 200 guests)</li>
                                <li>Basic car service for bride/groom</li>
                            </ul>
                            <p className="text-xl font-semibold text-blue-700">$1200</p>
                            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Choose Plan</button>
                        </div>
                    </div>
                    {/* Luxury Package */}
                    <div>
                        <div className="bg-white mt-14 p-6 rounded-lg flex flex-col justify-center items-center shadow-lg">
                            <h2 className="text-2xl font-bold mb-4 text-yellow-600">Grand Gala</h2>
                            <p className="text-gray-600 mb-4">Designed for high-end weddings, receptions & corporate galas.</p>
                            <ul className="list-disc pl-5 text-left mb-4 text-gray-700">
                                <li>Luxury stage design & thematic decor</li>
                                <li>Full-day photography + cinematic videography</li>
                                <li>LED walls, custom lighting, and effects</li>
                                <li>Premium floral arrangements</li>
                                <li>VIP car rental with chauffeur</li>
                                <li>Makeup artist & guest hostess team</li>
                                <li>Printed & digital invitations</li>
                            </ul>
                            <p className="text-xl font-semibold text-yellow-700">$3000</p>
                            <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">Choose Plan</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plan;