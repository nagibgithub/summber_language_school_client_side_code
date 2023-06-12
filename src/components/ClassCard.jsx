
const ClassCard = ({ classData }) => {

    const { duration, image, name, insName, price, seats, _id } = classData;

    const handleCourse = id => {
        console.log(id);
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
                <button onClick={() => handleCourse(_id)} className="btn btn-neutral">Select The Course</button>
            </div>
        </div>
    );
};

export default ClassCard;