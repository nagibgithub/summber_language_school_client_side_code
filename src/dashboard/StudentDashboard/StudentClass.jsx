import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const StudentClass = ({ classData, refetc }) => {

    // console.log(classData.classId);
    // const [axiosSecure] = useAxiosSecure();
    // const { data: classInfo = [], isLoading: loading } = useQuery(['class'], async () => {
    //     const res = await axiosSecure.get(`/class/student/${classData.classId}`)
    //     return res.data;
    // });

    const [classInfo, setClassInfo] = useState({});
    const refetch = refetc;

    useEffect(() => {
        fetch(`https://b712-summer-camp-server-side.vercel.app/class/student/${classData.classId}`)
            .then(res => res.json()).then(data => setClassInfo(data))
    }, [classData]);

    const { duration, email, image, name, insName, price, seats, _id } = classInfo;

    const handleDelete = id => {
        fetch(`https://b712-summer-camp-server-side.vercel.app/student/class/${id}`, { method: 'DELETE' }).then(res => res.json()).then(data => {
            if (data.deletedCount) {
                refetch();
                Swal.fire({ icon: "success", title: `${name} is delete now` })
            } else {
                Swal.fire({ icon: "error", title: "something is going wrond maybe" })
            }
        })
    }

    const handlePayment = id => {
        console.log(id);
    }

    return (
        <div>
            {
                <div className="card card-side bg-base-100 shadow-xl w-full grid grid-cols-5 p-5">
                    <figure><img className="w-72" src={image} alt={name} /></figure>
                    <div className="col-span-4 grid grid-cols-4 pl-10 gap-3 justify-between items-center">
                        <div>
                            <h2 className="card-title">{name}</h2>
                            <p>Course Duration: {duration} Weeks</p>
                        </div>
                        <div>

                            <p>Instructor: </p>
                            <h2 className="card-title">{insName}</h2>
                            <p>{email}</p>
                        </div>
                        <div>
                            <h2 className="font-bold">Price ${price}</h2>
                            <h2 className="font-bold">Available Seats: <span style={seats == 0 ? { color: 'red' } : { color: 'blue' }}>{seats}</span></h2>
                        </div>
                        <div className="grid gap-3">
                            <button onClick={() => handlePayment(_id)} className="btn btn-success">Pay</button>
                            <button onClick={() => handleDelete(classData._id)} className="btn btn-warning">Delete</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default StudentClass;