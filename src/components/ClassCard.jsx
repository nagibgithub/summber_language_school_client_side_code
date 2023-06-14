import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useUserType from "../hooks/useUserType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";


const ClassCard = ({ classData }) => {

    const { duration, image, name, insName, price, seats, _id } = classData;
    const { user } = useAuth();
    const [user_type, isAdminLoading] = useUserType();
    const navigate = useNavigate();

    const handleSelectClass = () => {

        if (user_type !== 'student') {
            Swal.fire({
                title: 'You are not a Student',
                icon: 'warning',
            })
            navigate('/');
            return;
        }


        if (!user.email) {
            alert('user email is not found')
        } else {




            if (user_type == 'student') {
                const data1 = { email: user.email, classId: _id };
                fetch(`https://b712-summer-camp-server-side.vercel.app/student/class`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data1)
                }).then(res => res.json()).then(data => {
                    data.insertedId ?
                        Swal.fire({
                            icon: 'success',
                            title: 'Class is selected Successfully'
                        })
                        :
                        Swal.fire({
                            icon: 'error',
                            title: data.message
                        })
                })
            }
        }

    };




























    return (
        <div className="md:w-3/4 mx-auto flex flex-col justify-center items-center rounded-lg border-4 border-gray-500 shadow-lg">
            <img className="w-full" src={image} alt="" />
            <div className="my-5 w-3/4">
                <hr className="border border-gray-500 w-full" />
                <h1 className="text-lg font-bold text-center my-3">{name}</h1>
                <hr className="border border-gray-500 w-full" />
            </div>
            <h1 className="text-lg py-1">Course Instructor: <span className="font-bold">{insName}</span></h1>
            <h1 className="text-lg py-1">Available Seats: <span className="font-bold">{seats}</span></h1>
            <h1 className="text-lg py-1">Course Duration: <span className="font-bold">{duration}</span> Weeks</h1>
            <h1 className="text-lg py-1">Course Price: <span className="font-bold">${price}</span></h1>
            <div className="my-5">
                {
                    !user ?
                        <button className="btn btn-neutral">to Select login first</button>
                        :
                        isAdminLoading ?
                            <button className="btn btn-neutral">Loading... <FontAwesomeIcon icon={faSpinner} spin /></button>
                            :
                            user_type !== 'student' ?
                                <button className="btn btn-neutral">to select need student login</button>
                                :
                                <button onClick={handleSelectClass} className="btn btn-neutral">Select Class</button>
                }
            </div>
        </div>
    );
};

export default ClassCard;