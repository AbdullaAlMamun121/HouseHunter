import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import DisplayCard from './DisplayCard';

const DisplayHouse = () => {
    const { data: houses = [] } = useQuery(['houses'], async () => {
        const res = await axios.get('http://localhost:5000/houses/show')
        return res.data;
    })
    return (
        <div>
            <h3 className='text-5xl text-center font-semibold capitalize'>Display all Houses</h3>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10'>
                {
                    houses.map(houseList => <DisplayCard key={houseList._id} houseList={houseList}>

                    </DisplayCard>)
                }
            </div>
        </div>
    );
};

export default DisplayHouse;