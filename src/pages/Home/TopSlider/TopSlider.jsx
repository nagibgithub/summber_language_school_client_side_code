import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TopSlider = () => {

    const bannerImages = [
        { title: 'imege3', src: 'https://raw.githubusercontent.com/nagibgithub/images/main/image/banner/banner3.png' },
        { title: 'imege1', src: 'https://raw.githubusercontent.com/nagibgithub/images/main/image/banner/banner1.png' },
        { title: 'imege2', src: 'https://raw.githubusercontent.com/nagibgithub/images/main/image/banner/banner2.png' },
    ]



    return (
        <Carousel autoPlay={true} infiniteLoop={true} interval={2000} >
            {bannerImages.map((image, index) => <div key={index}><img  src={image.src} alt={image.title} /></div>)}
        </Carousel>
    );
};

export default TopSlider;