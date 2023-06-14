import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const InstructorClassUpdate = () => {
    const navigate = useNavigate();

    // const { id } = useParams();
    const classData = useLoaderData();
    const {
        name,
        duration,
        seats,
        price,
        description,
        _id
    } = classData;

    const { register, handleSubmit } = useForm();

    const handleClassForm = data => {
        fetch(`https://b712-summer-camp-server-side.vercel.app/class/update/${_id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Class update successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate('/dashboard');
                }
            }).catch(error => console.log(error.message));
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleClassForm)} className="grid md:grid-cols-2 justify-center items-center w-full md:w-2/3 md:mx-auto gap-3 border-2 border-gray-400 p-5 rounded-xl shadow-lg">

                {/* class name */}
                <div className="w-full">
                    <label className="label" htmlFor="name">
                        <span className="label-text">Class Name: </span>
                    </label>
                    <input {...register("name")} id="name" type="text" defaultValue={name} placeholder="Type here" className="input input-bordered w-full" required />
                </div>

                {/* course duration */}
                <div className="form-control w-full">
                    <label className="label" htmlFor="duration">
                        <span className="label-text">Class duration in weeks: </span>
                    </label>
                    <input {...register("duration")} id="duration" type="number" defaultValue={duration} placeholder="weeks between 2-6" max={6} min={2} step={1} className="input input-bordered w-full" required />
                </div>

                {/* available seats */}
                <div className="form-control w-full">
                    <label className="label" htmlFor="seats">
                        <span className="label-text">Class Available Seats: </span>
                    </label>
                    <input {...register("seats")} id="seats" type="number" placeholder="Number (10-50)" defaultValue={seats} max={50} min={10} step={1} className="input input-bordered w-full" required />
                </div>

                {/* Course Price */}
                <div className="form-control w-full">
                    <label className="label" htmlFor="price">
                        <span className="label-text">Enter amount</span>
                    </label>
                    <label className="input-group w-full">
                        <span>Price</span>
                        <input type="number" {...register("price")} id="price" placeholder="10" defaultValue={price} min={10} max={500} step={0.01} className="input input-bordered" required />
                        <span>USD</span>
                    </label>
                </div>

                {/* short description */}
                <div className="form-control w-full col-span-2">
                    <label className="label" htmlFor="description">
                        <span className="label-text">Class Summary: </span>
                    </label>
                    <input defaultValue={description} {...register("description")} id="description" type="text" placeholder="Type here" className="input input-bordered w-full" required />
                </div>

                {/* submit button */}
                <div className="form-control mt-6 md:col-span-2 w-full">
                    <input type="submit" className="btn btn-neutral w-2/3 mx-auto" value="Update Class" />
                </div>
            </form>
        </div>
    );
};

export default InstructorClassUpdate;