import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "../../components/Loading";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const StudentClass = ({ classData, loadin, refetc }) => {


    // const [classInfo, setClassInfo] = useState({});
    const refetch = refetc;
    const loading = loadin;
    // useEffect(() => {
    //     fetch(`https://b712-summer-camp-server-side.vercel.app/class/student/${classData.classId}`)
    //         .then(res => res.json()).then(data => setClassInfo(data))
    // }, [classData]);

    const { selectedClassName, email, image, insName, price} = classData;

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You want to Delete`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b712-summer-camp-server-side.vercel.app/student/class/${id}`, { method: 'DELETE' }).then(res => res.json()).then(data => {
                    if (data.deletedCount) {
                        refetch();
                        Swal.fire({ icon: "success", title: `${selectedClassName} is delete now` })
                    } else {
                        Swal.fire({ icon: "error", title: "something is going wrond maybe" })
                    }
                })
            }
        })
    }


    return (
        <div>
            {
                loading ?
                    <Loading></Loading>
                    :
                    <div className="card card-side bg-base-100 shadow-xl w-full grid grid-cols-5 p-5">
                        <figure><img className="w-72" src={image} alt={selectedClassName} /></figure>
                        <div className="col-span-4 grid grid-cols-4 pl-10 gap-3 justify-between items-center">
                            <div>
                                <h2 className="card-title">{selectedClassName}</h2>
                                {/* <p>Course Duration: {duration} Weeks</p> */}
                            </div>
                            <div>

                                <p>Instructor: </p>
                                <h2 className="card-title">{insName}</h2>
                                <p>{email}</p>
                            </div>
                            <div>
                                <h2 className="font-bold">Class Status: <span className="capitalize text-yellow-500">{classData.status}</span></h2>
                                <h2 className="font-bold">Price <span className="text-red-500">${price}</span></h2>
                                {/* <h2 className="font-bold">Available Seats: <span style={seats == 0 ? { color: 'red' } : { color: 'blue' }}>{seats}</span></h2> */}
                            </div>
                            <div className="w-2/3 flex justify-end">
                                <button onClick={() => handleDelete(classData._id)} className="btn btn-error"><FontAwesomeIcon icon={faTrash} /></button>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default StudentClass;