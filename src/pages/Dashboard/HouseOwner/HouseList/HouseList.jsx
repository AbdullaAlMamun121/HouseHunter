import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import UpdateHouses from "./UpdateHouses/UpdateHouses";

const HouseList = () => {
    const [modalShow, setModalShow] = useState({});
    const [control, setControl] = useState(false);
    const token = localStorage.getItem('token');

    const { data: houses = [], refetch } = useQuery(['houses'], async () => {
        const res = await axios.get('http://localhost:5000/houses', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        console.log(res.data)
        return res.data;
    })
    const handleUpdateHouses = (data) => {
        console.log(data)
        fetch(`http://localhost:5000/updateHouses/${data._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    alert('Data updated successfully');
                    setControl(!control);
                }
            });
    };
    const handleDeleteItem = id => {
        axios.delete(`http://localhost:5000/houses/${id}`).then(res => {
            if (res.data.deletedCount > 0) {
                alert('Deleted successfully');
                refetch();
            }
        }).catch(error => {
            alert(error.message);
        });
    };
    const handleEditButtonClick = (itemId) => {
        setModalShow((prevState) => ({
            ...prevState,
            [itemId]: true,
        }));
    };
    return (
        <>
            <div className='w-100'>
                <h3 className="text-center font-bold">Update house data </h3>
                <div className="overflow-x-auto">
                    <table className="table">

                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>Price</th>
                                <th>Edit</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                houses.map((item, index) => <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.address}</td>
                                    <td>{item.city}</td>
                                    <td>{item.price}</td>
                                    <td>{item.status}</td>
                                    <td>
                                        <button
                                            className="btn btn-warning bg-orange-200 hover:bg-orange-400"
                                            onClick={() => handleEditButtonClick(item._id)}
                                        >
                                            Update
                                        </button>
                                        {modalShow[item._id] && (
                                            <UpdateHouses
                                                show={modalShow[item._id]}
                                                onHide={() =>
                                                    setModalShow((prevState) => ({
                                                        ...prevState,
                                                        [item._id]: false,
                                                    }))
                                                }
                                                item={item}
                                                handleUpdateHouses={handleUpdateHouses}
                                            />
                                        )}
                                    </td>
                                    <td>
                                        <td>
                                            <button onClick={() => handleDeleteItem(item._id)} className="btn btn-warning bg-orange-200 hover:bg-orange-400">
                                                Delete
                                            </button>
                                        </td>
                                    </td>


                                </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
};

export default HouseList;