import { Helmet } from "react-helmet-async";
import TopSlider from "../TopSlider/TopSlider";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import AnimationSection from "../extraSection/AnimationSection";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <TopSlider></TopSlider>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <AnimationSection></AnimationSection>
        </div>
    );
};

export default Home;