import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../components/Loading";
import InstructorClassCard from "./InstructorClassCard";

const InstructorMyClass = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], isLoading: loading } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/instructor/class')
        return res.data;
    });



    return (
        <div className="my-5">
            {
                loading ?
                    <Loading></Loading>
                    :
                    <div className="grid gap-3">
                        {
                            classes.map(pd => <InstructorClassCard key={pd._id} classData={pd}></InstructorClassCard>)
                        }
                    </div>
            }
        </div>
    );
};

export default InstructorMyClass;