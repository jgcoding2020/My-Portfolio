import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * Component produces react-slick slider carousel  
 * @returns <Slider/> with DoConnect project images
 */
const DoConnectSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500
  };

  return (
    <Slider {...settings}>
      <div>
        <img decoding="async" src={process.env.PUBLIC_URL + "images/BBA_Degree.png"} alt="Image 1" />
      </div>
      <div>
        <img decoding="async" src={process.env.PUBLIC_URL + "images/BSCS_Degree.png"} alt="Image 2" />
      </div>
      <div>
        <img decoding="async" src={process.env.PUBLIC_URL + "images/Graduation_Certificate.png"} alt="Image 3" />
      </div>
    </Slider>
  );
};

export default DoConnectSlider();