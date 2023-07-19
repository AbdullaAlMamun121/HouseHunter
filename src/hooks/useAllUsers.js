import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const useAllUsers = () => {
    const { user,loading } = useAuth();
    // use axios secure with react query
    const {data: isUsers, isLoading: isUsersLoading} = useQuery({
        queryKey:['isUsers', user?.email],
        enabled:!loading,
        queryFn: async ()=>{
            const res = await axios.get('http://localhost:5000/users');
            console.log('res from all users',res)
            return res.data;
        },
    })
    return [isUsers,isUsersLoading]
}
export default useAllUsers;