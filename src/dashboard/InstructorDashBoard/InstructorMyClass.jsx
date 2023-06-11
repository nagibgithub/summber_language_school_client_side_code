import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const InstructorMyClass = () => {

    const { user, loading } = useContext(AuthContext);

    const [myClasses, setMyClasses] = useState([]);
    useEffect(() => {
        !loading ?
            user ?
                fetch(`http://localhost:3000/class?email=${user.email}`).then(res => res.json()).then(data => setMyClasses(data))
                :
                setMyClasses([])
            :
            setMyClasses([])
    }, [user, loading]);



    return (
        <div>
            {myClasses.length}
        </div>
    );
};

export default InstructorMyClass;