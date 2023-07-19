import axios from "axios";
import { useForm } from "react-hook-form";
const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddHouse = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData,
        }).then(res => res.json()).then(imageResponse => {
            if (imageResponse.success) {
                const imageURL = imageResponse.data.display_url;
                // destructuring from submitted value
                const { name, address, city, bedrooms, bathrooms, roomSize, availableDate, price, phoneNumber, description } = data;
                // create new object to input mongodb
                const newItems = { name, address, city, bedrooms: parseInt(bedrooms), bathrooms: parseInt(bathrooms), roomSize: parseFloat(roomSize), availableDate,image:imageURL, price: parseFloat(price), phoneNumber, description }
                // accessing mongodb to input
                axios.post('http://localhost:5000/houses', newItems).then(data => {
                    if (data.data.insertedId) {
                        reset();
                        alert('Data uploaded successfully');
                    }
                })


            }
        })
    }

    return (
        <div className="w-full">
            <h3 className='text-center font-bold mb-4'>Add Classes</h3>
            <form className="w-full max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="block mb-1">Name</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" {...register('name', { required: true })} />
                    {errors.name && <span className="text-danger">Name field is required</span>}
                </div>
                <div className="mb-3">
                    <label className="block mb-1">Address</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" {...register('address', { required: true })} />
                    {errors.address && <span className="text-danger">Address field is required</span>}
                </div>
                <div className="mb-3">
                    <label className="block mb-1">City</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" {...register('city', { required: true })} />
                    {errors.city && <span className="text-danger">City field is required</span>}
                </div>
                <div className="mb-3">
                    <label className="block mb-1">Bedrooms</label>
                    <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md" {...register('bedrooms', { required: true })} />
                    {errors.bedrooms && <span className="text-danger">Bedrooms field is required</span>}
                </div>
                <div className="mb-3">
                    <label className="block mb-1">Bathrooms</label>
                    <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md" {...register('bathrooms', { required: true })} />
                    {errors.bathrooms && <span className="text-danger">Bathrooms field is required</span>}
                </div>
                <div className="mb-3">
                    <label className="block mb-1">Room size</label>
                    <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md" {...register('roomSize', { required: true })} />
                    {errors.roomSize && <span className="text-danger">Room size field is required</span>}
                </div>

                <div className="mb-3">
                    <label className="block mb-1">Image</label>
                    <input type="file" className="w-full px-3 py-2 border border-gray-300 rounded-md" {...register('image', { required: true })} />
                    {errors.image && <span className="text-danger">Image is required</span>}
                </div>

                <div className="mb-3">
                    <label className="block mb-1">Availability date</label>
                    <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-md" {...register('availableDate', { required: true })} />
                    {errors.availableDate && <span className="text-danger">Availability date is required</span>}
                </div>

                <div className="mb-3">
                    <label className="block mb-1">Rent per month</label>
                    <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md" {...register('price', { required: true })} />
                    {errors.price && <span className="text-danger">This field is required</span>}
                </div>

                <div className="mb-3">
                    <label className="block mb-1">Phone number</label>
                    <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md" {...register('phoneNumber', { required: true })} />
                    {errors.phoneNumber && <span className="text-danger">This field is required</span>}
                </div>
                <div className="mb-3">
                    <label className="block mb-1">Description</label>
                    <input type="textarea" className="w-full px-3 py-2 border border-gray-300 rounded-md" {...register('description', { required: true })} />
                    {errors.description && <span className="text-danger">This field is required</span>}
                </div>

                <button type="submit" className="btn btn-primary w-full py-2 mt-4">Add Classes</button>
            </form>
        </div>
    );
};

export default AddHouse;