import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import InstructorCard from "../../../components/InstructorCard";
import { Link } from "react-router-dom";

const PopularInstructor = () => {

    const [instructorData, setInstructorData] = useState([]);

    useEffect(() => {
        fetch('https://b712-summer-camp-server-side.vercel.app/instructor').then(res => res.json()).then(data => setInstructorData(data));
    }, []);

    return (
        <>
            <SectionTitle title={'Instructor'} subTitle={'Popular Instructor'}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4 justify-center my-5">
                {
                    instructorData.map(pd => <InstructorCard key={pd._id} instructor={pd}></InstructorCard>)
                }
            </div>
            <div className="w-full flex justify-center my-5">
                <Link to={'/instructors'}><button className="btn btn-neutral">See All Instructors</button></Link>
            </div>
        </>
    );
};

export default PopularInstructor;