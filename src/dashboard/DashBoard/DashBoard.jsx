import Loading from "../../components/Loading";
import useAdmin from "../../hooks/useAdmin";
import AdminDashBoard from "../AdminDashBoard/AdminDashBoard";
import InstructorDashBoard from "../InstructorDashBoard/InstructorDashBoard";
import StudentDashboard from "../StudentDashboard/StudentDashboard";

const DashBoard = () => {
    const [user_type, isAdminLoading] = useAdmin();
    !isAdminLoading ? console.log(user_type) : console.log('loading');


    // const isAdmin 

    return (
        <div>
            {
                isAdminLoading ?
                    <Loading></Loading>
                    :
                    user_type === "admin" ?
                        <AdminDashBoard></AdminDashBoard>
                        :
                        user_type === "instructor" ?
                            <InstructorDashBoard></InstructorDashBoard>
                            :
                            user_type === "student" ?
                                <StudentDashboard></StudentDashboard>
                                :
                                <h1>You are not valid user. please Log in with valid user.</h1>
            }

        </div>
    );
};

export default DashBoard;