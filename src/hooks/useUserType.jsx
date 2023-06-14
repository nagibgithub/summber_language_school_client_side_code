import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useUserSecure from "./useUserSecure";

const useUserType = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useUserSecure();
    // use axios secure with react query
    const { data: user_type, isLoading: isAdminLoading } = useQuery({
        queryKey: ['user_type', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/type/${user?.email}`);
            return res.data.user_type;
        }
    })

    

    return [user_type, isAdminLoading]
}
export default useUserType;