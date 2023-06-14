import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../components/Loading";
import StuEnrollCard from "./StuEnrollCard";
import { Link } from "react-router-dom";

const StudentEnrolledClass = () => {


    const [axiosSecure] = useAxiosSecure();
    const { data: enrollClass = [], isLoading: loading } = useQuery([''], async () => {
        const res = await axiosSecure.get('/payments')
        return res.data;
    });

    console.log(loading, enrollClass);


    return (
        <div>
            {
                loading ?
                    <Loading></Loading>
                    :
                    <div className="grid gap-3">
                        {
                            enrollClass && <div className="flex justify-center">
                                <Link to={'/payment/history'}><button className="btn btn-neutral">See Payment history</button></Link>
                            </div>
                        }
                        <h1 className="border-y-2 border-gray-800 text-center py-3 w-2/3 mx-auto">Your Enrolled Class List</h1>
                        {
                            enrollClass.length === 0 ?
                                <h1>No class is Enrolled</h1>
                                :
                                <div>
                                    <div className="grid">
                                        {enrollClass?.map((pd, index) => <StuEnrollCard key={index} load={loading} classesName123={pd}></StuEnrollCard>)}
                                    </div>
                                </div>
                        }
                    </div>
            }
        </div>
    );
};

export default StudentEnrolledClass;