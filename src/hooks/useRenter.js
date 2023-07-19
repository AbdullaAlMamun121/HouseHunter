// import axios from "axios";
// import useAuth from "./useAuth";
// import { useQuery } from "@tanstack/react-query";


// const useRenter = () => {
//     const { user,loading } = useAuth();
//     // use axios secure with react query
//     const {data: isRenter, isLoading: isRenterLoading} = useQuery({
//         queryKey:['isRenter', user?.email],
//         enabled:!loading,
//         queryFn: async ()=>{
//             const res = await axios.get(`http://localhost:5000/users/roleInfo/${user?.email}`);
//             return res.data.houseRenter;
//         },
//     })
//     return [isRenter,isRenterLoading]
// }
// export default useRenter;

// export const fetchUserRole = async (email) => {
//     try {
//       const response = await fetch(`http://localhost:5000/users/roleInfo/${email}`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`, // Include the JWT token in the request headers
//         },
//       });
  
//       if (response.ok) {
//         const data = await response.json();
//         return data; // Return the user role information
//       } else {
//         throw new Error('Failed to fetch user role');
//       }
//     } catch (error) {
//       console.error('Error fetching user role:', error);
//       throw error;
//     }
//   };
  