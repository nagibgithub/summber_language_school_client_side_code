import { Helmet } from "react-helmet-async";
import TopSlider from "../TopSlider/TopSlider";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import AnimationSection from "../extraSection/AnimationSection";
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeProvider";

const Home = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <div style={theme ? { backgroundColor: "#1F3865", color: "white" } : { backgroundColor: "white", color: "#1F3865" }}>
        <Helmet>
            <title>Summer School | Home</title>
        </Helmet>
            <TopSlider></TopSlider>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <AnimationSection></AnimationSection>
        </div>
    );
};

export default Home;