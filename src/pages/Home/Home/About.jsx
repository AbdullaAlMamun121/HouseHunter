import React from 'react';
import about from '../../../../public/slide1.jpg'
const About = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-bold mb-6">About Us</h2>
                        <p className="text-lg mb-6">Welcome to our house renter website! We are dedicated to helping you find the perfect home for your needs. Whether you're looking for a cozy apartment or a spacious house, we have a wide selection of rental properties available.</p>
                        <p className="text-lg">Our mission is to make the rental process as seamless as possible. We understand that finding a place to call home is an important decision, and we're here to assist you every step of the way.</p>
                    </div>
                    <div className="md:w-1/2">
                        <img src={about} alt="About Us" className="w-full rounded-lg" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;