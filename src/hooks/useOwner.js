import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useOwner = () => {
    const { user, loading } = useContext(AuthContext);
    const token = localStorage.getItem('token');
    // use axios secure with react query
    const { data: isOwner, isLoading: isOwnerLoading } = useQuery({
      queryKey: ['isOwner', user?.email],
      enabled: user?.email && !loading,  // Enable the query only when the user is not null/undefined and the email is available
      queryFn: async () => {
        if (user) {
          const res = await axios.get(`http://localhost:5000/users/roleInfo/${user.email}`,{
            headers: {
                Authorization: `Bearer ${token}`,
              },
          });
          console.log('house owner res', res);
          return res.data.houseOwner;
        }
      },
    });
  
    return [isOwner, isOwnerLoading];
  };
  export default useOwner;
  