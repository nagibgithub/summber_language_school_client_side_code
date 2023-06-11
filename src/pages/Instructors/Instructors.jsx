import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import InstructorCard from "../../components/InstructorCard";

const Instructors = () => {

    const [instructors, setInstructors] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true)
        fetch('https://b712-summer-camp-server-side.vercel.app/instructor').then(res => res.json()).then(data => {
            setInstructors(data)
            setLoading(false)
        });
    }, []);

    return (
        <div>
            {
                loading ?
                    <h1 className="text-center text-5xl font-bold text-sky-600">Loading <FontAwesomeIcon icon={faSpinner} spin /></h1>
                    :
                    instructors.map(pd => <InstructorCard key={pd._id}></InstructorCard>)
            }
        </div>
    );
};

export default Instructors;