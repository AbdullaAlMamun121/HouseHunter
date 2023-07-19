import React, { useContext, useEffect, useState } from 'react';
import useAllUsers from '../../../hooks/useAllUsers';
import { AuthContext } from '../../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { saveHousesInDB } from '../../../api/auth';

const DisplayCard = ({houseList}) => {

    const [userRole, setUserRole] = useState([]);
    const [selectedItem, setSelectedItem] = useState([]);
    const [isUsers, isUsersLoading] = useAllUsers();
    const { user,loading } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && isUsers && isUsers.length > 0) {
            const loggedInUserRole = isUsers.find(u => u.email === user?.email)?.role;
            setUserRole(loggedInUserRole ? [loggedInUserRole] : []);
        }
    }, [loading,isUsers,user]);

    console.log(userRole);
    const handleBooked = (item,email) => {
        if(user){
            setSelectedItem(item);
            saveHousesInDB(item,email)
        }else{
            alert('Login first');
            navigate('/login');
        }
       
    }
    const { name,address,city,bedrooms,bathrooms,roomSize,price,availableDate,image } = houseList;

    return (
        <>
        <div className={`card shadow-xl ${availableDate === 0 ? 'bg-red-500' : 'bg-base-100'}`}>
            <figure className="px-10 pt-10">
                <img src={image} alt="Instructor Image" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <p>
                    <span className="text-orange-500 capitalize">Name:</span>
                    {name}
                </p>
                
                <p>
                    <span className="text-orange-500 capitalize">Available Date:</span>
                    {availableDate}
                </p>
                <p>
                    <span className="text-orange-500 capitalize">Address:</span>
                    {address}
                </p>
                <p>
                    <span className="text-orange-500 capitalize">City:</span>
                    {city}
                </p>
                <p>
                    <span className="text-orange-500 capitalize">Bathrooms:</span>
                    {bathrooms}
                </p>
                <p>
                    <span className="text-orange-500 capitalize">Bedrooms:</span>
                    {bedrooms}
                </p>
                <p>
                    <span className="text-orange-500 capitalize">Room Size:</span>
                    {roomSize}
                </p>
                <p>
                    <span className="text-orange-500 capitalize">Price:</span>
                    {price}
                </p>
              

                <button onClick={() => handleBooked(houseList,user?.email)}
                    disabled={(userRole[0] === 'houseOwner' ||  availableDate === 0 )}
                    className="btn btn-outline btn-accent"
                >
                    Booking
                   {/* {selectedItem ? 'Selected' : 'Select'} */}
                </button>
            </div>
        </div>
    </>
    );
};

export default DisplayCard;