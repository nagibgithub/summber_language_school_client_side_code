import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import ClassCard from "../../../components/ClassCard";
import { Link } from "react-router-dom";

const PopularClass = () => {

    const [classesData, setClassesData] = useState([]);

    useEffect(() => {
        fetch('https://b712-summer-camp-server-side.vercel.app/class/top').then(res => res.json()).then(data => setClassesData(data.slice(0, 6)));
    }, []);




    return (
        <>
            <SectionTitle title={'Populer Class'} subTitle={'Popupler Class most Students are enrolled'}></SectionTitle>

            <div className="grid md:grid-cols-2 gap-3 justify-center items-center my-10">
                {
                    classesData.map(pd => <ClassCard key={pd._id} classData={pd}></ClassCard>)
                }
            </div>
            <div className="w-full flex justify-center my-5">
                <Link to={'/classes'}><button className="btn btn-neutral">See All Classes</button></Link>
            </div>
        </>
    );
};

export default PopularClass;