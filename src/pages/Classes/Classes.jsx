import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Classes = () => {

    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        fetch('https://b712-summer-camp-server-side.vercel.app/class').then(res => res.json()).then(data => {
            setClasses(data)
            setLoading(false);
        });
    }, []);

    return (
        <div>
            {
                loading ?
                    <h1 className="text-center text-5xl font-bold text-sky-600">Loading data <FontAwesomeIcon icon={faSpinner} spin /></h1>
                    :
                    <h1>{classes.length}</h1>
            }
        </div>
    );
};

export default Classes;