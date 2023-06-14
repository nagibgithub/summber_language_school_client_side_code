import Loading from "../../components/Loading";
import StudentClass from "./StudentClass";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const StudentSelectedClasses = () => {



    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], isLoading: loading, refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/student/class/selected')
        return res.data;
    })
    const total = users.reduce((sum, item) => sum + parseInt(item.price), 0);
    console.log(total);



    return (
        <div className="my-10">
            {
                loading ?
                    <Loading></Loading>
                    :
                    <>
                        <div className=" md:w-2/3 mx-auto grid grid-cols-3 justify-center items-center">
                            <div >
                                <h1 className="text-xl font-bold">Total Selected Class: {users.length}</h1>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold">Total Due Payment: ${total}</h1>
                            </div>
                            <div className={`${users.length !== 0 ? 'flex' : 'hidden'}`}>
                                <Link to={'/payment'}><button className="btn btn-success">Go to Payment process</button></Link>
                            </div>
                        </div>
                        <div className="grid gap-3">
                            {
                                users.map(pd => <StudentClass key={pd._id} classData={pd} refetc={refetch}></StudentClass>)
                            }
                        </div>
                    </>
            }
        </div>
    );
};

export default StudentSelectedClasses;