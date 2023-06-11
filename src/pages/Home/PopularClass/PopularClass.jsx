import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import ClassCard from "../../../components/ClassCard";

const PopularClass = () => {

    const [classesData, setClassesData] = useState([]);

    useEffect(() => {
        fetch('https://b712-summer-camp-server-side.vercel.app/class').then(res => res.json()).then(data => setClassesData(data));
    }, []);


    return (
        <>
        <SectionTitle title={'Populer Class'} subTitle={'Popupler Class most Students are enrolled'}></SectionTitle>

            <div className="grid md:grid-cols-2 gap-3 justify-center">
                {
                    classesData.map(pd => <ClassCard key={pd._id}></ClassCard>)
                }
            </div>
        </>
    );
};

export default PopularClass;