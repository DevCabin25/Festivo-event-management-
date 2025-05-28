import React, { useState } from 'react';

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [showAll, setShowAll] = useState(false);

    const eventCategories = [
        { id: 'all', name: 'All Events' },
        { id: 'wedding', name: 'Weddings' },
        { id: 'birthday', name: 'Birthdays' },
        { id: 'corporate', name: 'Corporate Events' },
        { id: 'cultural', name: 'Cultural Events' },
        { id: 'academic', name: 'Academic Events' }
    ];

    const events = [
        {
            id: 1,
            category: 'wedding',
            title: 'Elegant Wedding Ceremony',
            image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'A beautiful outdoor wedding celebration'
        },
        {
            id: 2,
            category: 'birthday',
            title: 'Kids Birthday Party',
            image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Colorful birthday celebration for children'
        },
        {
            id: 3,
            category: 'corporate',
            title: 'Annual Company Meeting',
            image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Professional corporate event setup'
        },
        {
            id: 4,
            category: 'cultural',
            title: 'Traditional Festival',
            image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Vibrant cultural celebration'
        },
        {
            id: 5,
            category: 'academic',
            title: 'Graduation Ceremony',
            image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Academic achievement celebration'
        },
        {
            id: 6,
            category: 'wedding',
            title: 'Luxury Wedding',
            image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'High-end wedding event setup'
        },
        {
            id: 7,
            category: 'birthday',
            title: 'Kids Birthday Party',
            image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Colorful birthday celebration for children'
        },
        {
            id: 8,
            category: 'birthday',
            title: 'Adult Birthday Bash',
            image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Elegant birthday party for adults'
        },
        {
            id: 9,
            category: 'birthday',
            title: 'Themed Birthday Party',
            image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Creative themed birthday celebration'
        },
        {
            id: 10,
            category: 'birthday',
            title: 'Surprise Birthday',
            image: 'https://images.unsplash.com/photo-1513279922550-250c2129b13a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Special surprise birthday arrangement'
        },
        {
            id: 11,
            category: 'birthday',
            title: 'Outdoor Birthday',
            image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Fun outdoor birthday party setup'
        },
        {
            id: 12,
            category: 'birthday',
            title: 'VIP Birthday',
            image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Exclusive VIP birthday celebration'
        }
    ];

    const filteredEvents = selectedCategory === 'all'
        ? events
        : events.filter(event => event.category === selectedCategory);

    const eventsToDisplay = showAll ? filteredEvents : filteredEvents.slice(0, 6);

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
                    Event Gallery
                </h1>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {eventCategories.map(category => (
                        <button
                            key={category.id}
                            onClick={() => {
                                setSelectedCategory(category.id);
                                setShowAll(false); // Reset when changing category
                            }}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                                ${selectedCategory === category.id
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {eventsToDisplay.map(event => (
                        <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                            <div className="relative h-48">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {event.title}
                                </h3>
                                <p className="text-gray-600">
                                    {event.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Show More Button */}
                {!showAll && filteredEvents.length > 6 && (
                    <div className="flex justify-center mb-12">
                        <button
                            onClick={() => setShowAll(true)}
                            className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition"
                        >
                            Show More Events
                        </button>
                    </div>
                )}

                {/* CTA Section */}
                <div className="bg-white shadow-md rounded-lg p-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Want to See Your Event Here?</h2>
                    <p className="text-gray-600 mb-6">
                        Let us create a beautiful and memorable event that you'll be proud to showcase.
                        Contact us today to start planning.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
