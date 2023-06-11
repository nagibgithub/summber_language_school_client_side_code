import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import InstructorCard from "../../../components/InstructorCard";

const PopularInstructor = () => {

    const [instructorData, setInstructorData] = useState([]);

    useEffect(() => {
        fetch('https://b712-summer-camp-server-side.vercel.app/instructor').then(res => res.json()).then(data => setInstructorData(data));
    }, []);

    return (
        <>
            <SectionTitle title={'Instructor'} subTitle={'Popular Instructor'}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4 justify-center">
                {
                    instructorData.map(pd => <InstructorCard key={pd._id}></InstructorCard>)
                }
            </div>
        </>
    );
};

export default PopularInstructor;