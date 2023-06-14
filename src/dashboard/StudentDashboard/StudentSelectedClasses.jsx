import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../components/Loading";
import StudentClass from "./StudentClass";

const StudentSelectedClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], isLoading: loading, refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/student/class/selected')
        return res.data;
    })

    console.log(users);



    return (
        <div>
            {/* <h1>{users[0].classId}</h1>
            <h1>{users[1].classId}</h1>
            <h1>{users[2].classId}</h1> */}
            {
                loading ?
                    <Loading></Loading>
                    :
                    <div className="grid gap-3">
                        {
                            users.map(pd => <StudentClass key={pd._id} classData={pd} refetc={refetch}></StudentClass>)
                        }
                    </div>
            }
        </div>
    );
};

export default StudentSelectedClasses;