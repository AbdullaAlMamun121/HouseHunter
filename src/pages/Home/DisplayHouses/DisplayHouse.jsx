import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import DisplayCard from './DisplayCard';

const DisplayHouse = () => {
  const [filters, setFilters] = useState({
    city: '',
    bedrooms: '',
    bathrooms: '',
    roomSize: '',
    availability: '',
    rentMin: '',
    rentMax: ''
  });

  const { data: houses = [] } = useQuery(['houses', filters], async () => {
    const res = await axios.get('http://localhost:5000/houses/show', { params: filters });
    return res.data;
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div>
      <h3 className='text-5xl text-center font-semibold capitalize'>Display all Houses</h3>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10'>
        <div className="flex items-center justify-center space-x-2"> 
          <label htmlFor="search">Search:</label>
          <input type="text" id="search" name="search" value={filters.search} onChange={handleFilterChange} />

          <label htmlFor="criteria">Criteria:</label>
          <select id="criteria" name="criteria" value={filters.criteria} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="city">City</option>
            <option value="bedrooms">Bedrooms</option>
            <option value="bathrooms">Bathrooms</option>
            <option value="roomSize">Room Size</option>
            <option value="availability">Availability</option>
            <option value="rentMin">Rent Min</option>
            <option value="rentMax">Rent Max</option>
          </select>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10'>
        {houses.map(houseList => (
          <DisplayCard key={houseList._id} houseList={houseList} />
        ))}
      </div>
    </div>
  );
};

export default DisplayHouse;
