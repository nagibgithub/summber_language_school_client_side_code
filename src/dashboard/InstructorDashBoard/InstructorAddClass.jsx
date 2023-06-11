import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const InstructorAddClass = () => {

    const { user} = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    const { register, handleSubmit, reset } = useForm();
    const handleClassForm = data => {
        setErrorMessage('');
        fetch('https://b712-summer-camp-server-side.vercel.app/class', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(data => {
            if (data.insertedId) {
                reset();
                Swal.fire({
                    icon: 'success',
                    title: 'User created successfully.',
                    showConfirmButton: false,
                    timer: 1500
                }).catch(error => console.log(error));
            }
        }).catch(error => setErrorMessage(error.message));
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleClassForm)} className="grid md:grid-cols-2 justify-center items-center w-full md:w-2/3 md:mx-auto gap-3 border-2 border-gray-400 p-5 rounded-xl shadow-lg">

                {/* class name */}
                <div className="w-full">
                    <label className="label" htmlFor="name">
                        <span className="label-text">Class Name: </span>
                    </label>
                    <input {...register("name")} id="name" type="text" placeholder="Type here" className="input input-bordered w-full" required />
                </div>

                {/* class Image URL */}
                <div className="form-control w-full">
                    <label className="label" htmlFor="image">
                        <span className="label-text">Class Image URL: </span>
                    </label>
                    <input {...register("image")} id="image" type="url" placeholder="https://example.com" className="input input-bordered w-full" required />
                </div>

                {/* class Instructor Name */}
                <div className="form-control w-full">
                    <label className="label" htmlFor="insName">
                        <span className="label-text">Class Instructor Name: </span>
                    </label>
                    <input {...register("insName")} id="insName" type="text" placeholder="https://example.com" value={user.displayName} className="input input-bordered w-full" readOnly required />
                </div>

                {/* class Instructor Email */}
                <div className="form-control w-full">
                    <label className="label" htmlFor="email">
                        <span className="label-text">Class Instructor Email: </span>
                    </label>
                    <input {...register("email")} id="email" type="email" placeholder="https://example.com" value={user.email} className="input input-bordered w-full" readOnly required />
                </div>

                {/* course duration */}
                <div className="form-control w-full">
                    <label className="label" htmlFor="duration">
                        <span className="label-text">Class duration in weeks: </span>
                    </label>
                    <input {...register("duration")} id="duration" type="number" placeholder="weeks between 2-6" defaultValue={3} max={6} min={2} step={1} className="input input-bordered w-full" required />
                </div>

                {/* available seats */}
                <div className="form-control w-full">
                    <label className="label" htmlFor="seats">
                        <span className="label-text">Class Available Seats: </span>
                    </label>
                    <input {...register("seats")} id="seats" type="number" placeholder="Number (10-50)" defaultValue={10} max={50} min={10} step={1} className="input input-bordered w-full" required />
                </div>

                {/* Course Price */}
                <div className="form-control w-full">
                    <label className="label" htmlFor="price">
                        <span className="label-text">Enter amount</span>
                    </label>
                    <label className="input-group w-full">
                        <span>Price</span>
                        <input type="number" {...register("price")} id="price" placeholder="10" defaultValue={20} min={10} max={100} step={0.01} className="input input-bordered" required />
                        <span>USD</span>
                    </label>
                </div>

                {/* short description */}
                <div className="form-control w-full">
                    <label className="label" htmlFor="description">
                        <span className="label-text">Class Summary: </span>
                    </label>
                    <input {...register("description")} id="description" type="text" placeholder="Type here" className="input input-bordered w-full" required />
                </div>

                {/* error message */}
                <div className="form-control">
                    <h1 className="text-red-600 text-lg font-bold">{errorMessage}</h1>
                </div>

                {/* submit button */}
                <div className="form-control mt-6 md:col-span-2 w-full">
                    <input type="submit" className="btn btn-neutral w-2/3 mx-auto" value="Add Class" />
                </div>
            </form>
        </div>
    );
};

export default InstructorAddClass;