import React, { useContext, useEffect, useState } from 'react';
import useAllUsers from '../../../hooks/useAllUsers';
import { AuthContext } from '../../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { saveHousesInDB } from '../../../api/auth';

const DisplayCard = ({ houseList }) => {
    const [userRole, setUserRole] = useState([]);
    const [selectedItem, setSelectedItem] = useState([]);
    const [isUsers, isUsersLoading] = useAllUsers();
    const { user, loading } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && isUsers && isUsers.length > 0) {
            const loggedInUserRole = isUsers.find((u) => u.email === user?.email)?.role;
            setUserRole(loggedInUserRole ? [loggedInUserRole] : []);
        }
    }, [loading, isUsers, user]);

    const handleBooked = () => {
        const { name, email, phoneNumber } = user || {};

        if (!name || !email || !phoneNumber) {
            alert('Please provide your name, email, and phone number.');
            return;
        }

        if (user) {
            const bookingData = {
                name: name || user.name,
                email: email || user.email,
                phoneNumber,
            };
            saveHousesInDB(houseList, bookingData);
        } else {
            alert('Please login first.');
            navigate('/login');
        }
    };

    const { name, address, city, bedrooms, bathrooms, roomSize, price, availableDate, image } = houseList;

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={image} alt="House" className="w-full h-48 object-cover" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">
                    <span className="font-bold">Address:</span> {address}
                </p>
                <p className="text-gray-700 text-base">
                    <span className="font-bold">City:</span> {city}
                </p>
                <p className="text-gray-700 text-base">
                    <span className="font-bold">Bathrooms:</span> {bathrooms}
                </p>
                <p className="text-gray-700 text-base">
                    <span className="font-bold">Bedrooms:</span> {bedrooms}
                </p>
                <p className="text-gray-700 text-base">
                    <span className="font-bold">Room Size:</span> {roomSize}
                </p>
                <p className="text-gray-700 text-base">
                    <span className="font-bold">Price:</span> {price}
                </p>
                <p className="text-gray-700 text-base">
                    <span className="font-bold">Available Date:</span> {availableDate}
                </p>
               
                <div className="flex justify-between items-center mt-4">
                  
                    <div>
                        <label htmlFor="name" className="text-gray-700 text-sm mr-2">
                            Name:
                        </label>
                        <input type="text" id="name" name="name" value={user?.name || ''} disabled className="bg-gray-100 p-1 rounded" />
                        <label htmlFor="email" className="text-gray-700 text-sm mx-2">
                            Email:
                        </label>
                        <input type="email" id="email" name="email" value={user?.email || ''} disabled className="bg-gray-100 p-1 rounded" />
                        <label htmlFor="phoneNumber" className="text-gray-700 text-sm mx-2">
                            Phone Number:
                        </label>
                        <input type="tel" id="phoneNumber" name="phoneNumber" className="bg-gray-100 p-1 rounded" />
                    </div>
                </div>
            </div>
            <div className="px-6 pt-4 pb-2">
                <button
                    onClick={handleBooked}
                    disabled={(userRole[0] === 'houseOwner' || availableDate === 0)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default DisplayCard;
