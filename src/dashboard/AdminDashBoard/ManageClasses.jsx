import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../components/Loading";
import AdminClassCard from "./AdminClassCard";

const ManageClasses = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch, isLoading: loading } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/class/admin')
        return res.data;
    });

    return (
        <div className="my-5">
            {
                loading ?
                    <Loading></Loading>
                    :
                    <div className="grid w-full justify-center gap-3">
                        {classes.map(pd => <AdminClassCard key={pd._id} classData={pd} refetc={refetch}></AdminClassCard>)}
                    </div>
            }
        </div>
    );
};

export default ManageClasses;