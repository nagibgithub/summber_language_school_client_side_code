import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const ClassSelect = () => {


    const userEmail = useParams();
    console.log(userEmail);
    const navigate = useNavigate();
    const { type } = useLoaderData();
    if (type !== 'student') {
        Swal.fire({
            title: 'You are not a Student',
            icon: 'warning',
        })
        navigate('/');
    }

    if (type == 'student') {
        const classID = sessionStorage.getItem('classId');
        const data1 = { email: userEmail.id, classId: classID };
        fetch(`https://b712-summer-camp-server-side.vercel.app/student/class`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data1)
        }).then(res => res.json()).then(data => {
            console.log(data)
            data.insertedId ?
                alert('success')
                :
                alert(data.message);
        })
        navigate('/');
    }





    return (
        <div>
            {type}
        </div>
    );
};

export default ClassSelect;