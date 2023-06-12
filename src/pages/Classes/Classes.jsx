import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import ClassCard from "../../components/ClassCard";

const Classes = () => {

    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        fetch('https://b712-summer-camp-server-side.vercel.app/class/all').then(res => res.json()).then(data => {
            setClasses(data)
            setLoading(false);
        });
    }, []);

    return (
        <div className="my-10">
            {
                loading ?
                    <h1 className="text-center text-5xl font-bold text-sky-600">Loading data <FontAwesomeIcon icon={faSpinner} spin /></h1>
                    :
                    <>
                    <h1 className="text-xl font-bold text-center my-2">Total Number of Approved Classes: {classes.length}</h1>
                    <div className="grid grid-cols-2 justify-center items-center gap-3">
                        {
                            classes.map(pd => <ClassCard key={pd._id} classData={pd}></ClassCard>)
                        }
                    </div>
                        </>
            }
        </div>
    );
};

export default Classes;