import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const SelectedHouses = () => {
    const token = localStorage.getItem('token');
    const { data: selectedHouses = [], isLoading: loading, refetch } = useQuery(['selectedHouses'], async () => {
        try {
            const res = await axios.get('http://localhost:5000/selectedHouses',{
                headers: {
                    Authorization: `Bearer ${token}`,
                  },
            });
            console.log('from selected Houses', res);
            return res.data;
        } catch (error) {
            console.error('Error fetching selected Houses:', error);
            throw error;
        }
    });


    return (
        <div className='w-100'>
            <h3 className="text-center text-3xl font-bold mb-4">Your Selected Houses</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Price</th>
                            <th>Available Date</th>      
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(selectedHouses) && selectedHouses.length > 0 ? (
                            selectedHouses.map((selectedItem, index) => (
                                <tr key={selectedItem._id}>
                                    <th>{index + 1}</th>
                                    <td>{selectedItem.name}</td>
                                    <td>{selectedItem.address}</td>
                                    <td>{selectedItem.city}</td>
                                    <td>{selectedItem.price}</td>
                                    <td>{selectedItem.availableDate}</td>
                                  
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8">No selected House found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <Link to="/dashboard">
                <button className=' text-2xl rounded-2xl bg-orange-200 hover:bg-orange-400'>
                    Go Back
                </button>
            </Link>
        </div>
    );
};

export default SelectedHouses;