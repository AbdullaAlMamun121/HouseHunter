import axios from "axios";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useOwner = () => {
    const { user,loading } = useAuth();
    // use axios secure with react query
    const {data: isOwner, isLoading: isOwnerLoading} = useQuery({
        queryKey:['isOwner', user?.email],
        enabled:!loading,
        queryFn: async ()=>{
            const res = await axios.get(`http://localhost:5000/users/roleInfo/${user?.email}`);
            console.log('house owner res',res)
            return res.data.houseOwner;
        },
    })
    return [isOwner,isOwnerLoading]
}
export default useOwner;