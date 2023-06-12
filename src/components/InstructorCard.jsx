
const InstructorCard = ({ instructor }) => {

    const { email, img, name } = instructor;

    return (
        <div className="border-2 border-gray-500 w-3/4 mx-auto rounded-xl shadow-lg flex justify-center flex-col items-center py-5">
            <div className="avatar">
                <div className="w-64 mask mask-squircle">
                    <img src={img} />
                </div>
            </div>
            <div className="w-full text-center my-5">
                <hr className="border-gray-600 border w-full" />
                <div className="my-5">
                    <h1 className="text-lg font-semibold ">Instructor Name: {name}</h1>
                    <h1 className="text-lg font-semibold ">Instructor Email: {email}</h1>
                </div>
                <hr className="border-gray-600 border w-full" />
            </div>
        </div>
    );
};

export default InstructorCard;