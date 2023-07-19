import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto flex flex-wrap justify-between">
                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-6 px-4">
                    <h3 className="text-xl font-bold mb-4">About Us</h3>
                    <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ultricies justo, in fermentum nunc bibendum ac.</p>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-6">
                    <h3 className="text-xl font-bold mb-4">Houses Location</h3>
                    <ul className="text-gray-400">
                        <li>Dhaka</li>
                        <li>Rajshahi</li>
                        <li>Khulna</li>
                        <li>Barishal</li>
                        <li>Pabna</li>
                    </ul>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-6">
                    <h3 className="text-xl font-bold mb-4">Contact</h3>
                    <ul className="text-gray-400">
                        <li>123 Main St</li>
                        <li>City, State 12345</li>
                        <li>info@example.com</li>
                        <li>(123) 456-7890</li>
                    </ul>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-6">
                    <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                    <ul className="flex">
                        <li className="mr-4">
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                <i className="fab fa-facebook"></i>
                            </a>
                        </li>
                        <li className="mr-4">
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-4 text-center">
                <p className="text-gray-400">&copy; {new Date().getFullYear()}  Houses Need. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
