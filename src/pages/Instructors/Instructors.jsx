import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import InstructorCard from "../../components/InstructorCard";
import { Helmet } from "react-helmet-async";

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


        <>

        <Helmet><title>Summber School | Instructors</title></Helmet>

            <div>
                {
                    loading ?
                        <h1 className="text-center text-5xl font-bold text-sky-600">Loading <FontAwesomeIcon icon={faSpinner} spin /></h1>
                        :
                        <div className="grid grid-cols-2 gap-3">
                            {
                                instructors.map(pd => <InstructorCard key={pd._id} instructor={pd}></InstructorCard>)
                            }
                        </div>
                }
            </div>
        </>
    );
};

export default Instructors;