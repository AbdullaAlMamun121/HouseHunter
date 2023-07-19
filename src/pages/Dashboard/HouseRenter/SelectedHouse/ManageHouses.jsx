import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const ManageHouses = () => {
const token = localStorage.getItem('token');
    const { data: manageHouses = [], isLoading: loading, refetch } = useQuery(['manageHouses'], async () => {
        try {
            const res = await axios.get('http://localhost:5000/selectedHouses',{
                headers: {
                    Authorization: `Bearer ${token}`,
                  },
            });
            console.log('from manageHouses', res);
            return res.data;
        } catch (error) {
            console.error('Error fetching manageHouses:', error);
            throw error;
        }
    });

    const handleDeleteItem = id => {
        axios.delete(`http://localhost:5000/selectedHouses/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`,
              },
        }).then(res => {
            if (res.data.deletedCount > 0) {
                alert('Deleted successfully');
                refetch();
            }
        }).catch(error => {
            alert(error.message);
        });
    };

    return (
        <div className='w-100'>
            <h3 className="text-center text-3xl font-bold mb-4">Your Manage Houses</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>City Name</th>
                            <th>Price</th>
                            <th>Available Date</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(manageHouses) && manageHouses.length > 0 ? (
                            manageHouses.map((selectedItem, index) => (
                                <tr key={selectedItem._id}>
                                    <th>{index + 1}</th>
                                    <td>{selectedItem.name}</td>
                                    <td>{selectedItem.address}</td>
                                    <td>{selectedItem.city}</td>
                                    <td>{selectedItem.price}</td>
                                    <td>{selectedItem.availableDate}</td>
                                    <td>
                                        <button onClick={() => handleDeleteItem(selectedItem._id)} className="btn btn-warning bg-orange-200 hover:bg-orange-400">
                                           Delete
                                        </button>
                                    </td>
                                 
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8">No selected Houses found.</td>
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

export default ManageHouses;