import React from 'react';

const Plan = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center py-8 gap-4 bg-gray-100'>
                <h1 className='text-center text-4xl font-bold'>Flexible Plans to Fit Every Budget</h1>
                <p className='text-center'>Each package includes free consultation and customized planning to ensure your event is perfect.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4'>
                    <div>
                        <div className="bg-white p-6 mt-14 rounded-lg flex flex-col justify-center items-center shadow-lg">
                            <h2 className="text-2xl font-bold mb-4">Basic Plan</h2>
                            <p className="text-gray-600 mb-4">Ideal for small gatherings and intimate events.</p>
                            <ul className="list-disc pl-5 text-center mb-4">
                                <p>Up to 50 guests</p>
                                <p>1 event coordinator</p>
                                <p>Basic decor package</p>
                                <p>Up to 50 guests</p>
                                <p>1 event coordinator</p>
                                <p>Basic decor package</p>
                                <p>Basic decor package</p>
                                <p>Up to 50 guests</p>
                                <p>1 event coordinator</p>
                                <p>Basic decor package</p>
                            </ul>
                            <p className="text-xl font-semibold">$500</p>
                             <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded">Choose Plan</button>
                        </div>

                    </div>
                    <div>
                        <div className="bg-white p-6 rounded-lg flex flex-col justify-center items-center shadow-lg">
                            <h2 className="text-2xl font-bold mb-4">Basic Plan</h2>
                            <p className="text-gray-600 mb-4">Ideal for small gatherings and intimate events.</p>
                            <ul className="list-disc pl-5 text-center mb-4">
                                <p>Up to 50 guests</p>
                                <p>1 event coordinator</p>
                                <p>Basic decor package</p>
                                <p>Up to 50 guests</p>
                                <p>1 event coordinator</p>
                                <p>Basic decor package</p>
                                <p>Basic decor package</p>
                                <p>Up to 50 guests</p>
                                <p>1 event coordinator</p>
                                <p>Basic decor package</p>
                                <p>Basic decor package</p>
                                <p>Up to 50 guests</p>
                                <p>1 event coordinator</p>
                                <p>Basic decor package</p>
                            </ul>
                            <p className="text-xl font-semibold">$500</p>
                             <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded">Choose Plan</button>
                        </div>

                    </div>
                    <div>
                         <div className="bg-white mt-14 p-6 rounded-lg flex flex-col justify-center items-center shadow-lg">
                            <h2 className="text-2xl font-bold mb-4">Basic Plan</h2>
                            <p className="text-gray-600 mb-4">Ideal for small gatherings and intimate events.</p>
                            <ul className="list-disc pl-5 text-center mb-4">
                                <p>Up to 50 guests</p>
                                <p>1 event coordinator</p>
                                <p>Basic decor package</p>
                                <p>Up to 50 guests</p>
                                <p>1 event coordinator</p>
                                <p>Basic decor package</p>
                                <p>Basic decor package</p>
                                <p>Up to 50 guests</p>
                                <p>1 event coordinator</p>
                                <p>Basic decor package</p>
                            </ul>
                            <p className="text-xl font-semibold">$500</p>
                             <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded">Choose Plan</button>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default Plan;