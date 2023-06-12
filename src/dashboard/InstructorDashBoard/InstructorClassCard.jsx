import { Link } from "react-router-dom";

const InstructorClassCard = ({ classData }) => {

    const { description, duration, email, image, name, insName, price, seats, status, _id, feedback, enroll } = classData;

    return (
        <div className="card card-side bg-base-100 shadow-xl w-full grid grid-cols-5">
            <figure><img className="w-72" src={image} alt={name} /></figure>
            <div className="col-span-4 grid grid-cols-4 pl-10 gap-3 justify-between items-center">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>Course Duration: {duration} Weeks</p>
                </div>
                <div>

                    <p>Instructor: </p>
                    <h2 className="card-title">{insName}</h2>
                    <p>{email}</p>
                </div>
                <div>
                    <p className="font-bold">Price <span className="text-orange-500">${price}</span></p>
                    <p className="font-bold">Available Seats: {seats}</p>
                    <p className="font-bold">Enrolled Students: {!enroll ? 0 : enroll}</p>
                    <p className="font-bold">Status: <span className="capitalize font-bold" style={status == 'pending' ? { color: 'orange' } : status == 'approved' ? { color: 'green' } : status == 'deny' ? { color: 'red' } : { color: 'black' }}>{status}</span></p>

                </div>
                <div className="card-actions justify-end flex flex-col">
                    <label htmlFor={`modal-${_id}`} className="btn btn-neutral w-2/3 mx-auto" style={feedback ? { backgroundColor: 'red' } : { backgroundColor: 'gray' }}>{feedback ? 'Show Admin feedback' : 'No feedback from Admin'}</label>
                    <Link to={`/classes/update/${_id}`} className="w-2/3 mx-auto btn btn-neutral"><button className="">Update</button></Link>
                </div>
            </div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id={`modal-${_id}`} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{name}</h3>
                    <p className="py-4">{feedback ? feedback : "There is no feedback"}</p>
                    <div className="modal-action">
                        <label htmlFor={`modal-${_id}`} className="btn">Close!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorClassCard;