import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../components/Loading";
import StuEnrolled from "./StuEnrolled";

const StudentEnrolledClass = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: classesData = [], isLoading: loading } = useQuery(['classesData'], async () => {
        const res = await axiosSecure.get('/payments')
        return res.data;
    })


    // console.log(classesData);

    return (
        <div>
            {
                loading ?
                    <Loading></Loading>
                    :

                    classesData.map(pd => <StuEnrolled key={pd._id} classData={pd} ></StuEnrolled >)

            }
        </div >
    );
};

export default StudentEnrolledClass;