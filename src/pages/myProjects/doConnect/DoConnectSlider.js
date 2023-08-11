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

  const doConnectImagePath = "images/myProjectsImages/doConnectImages/";

  return (
    <Slider {...settings}>
      <div>
        <img decoding="async" src={`${doConnectImagePath}image_1.png`} alt="image_1.png" />
      </div>
      <div>
        <img decoding="async" src={`${doConnectImagePath}image_2.png`} alt="image_2.png" />
      </div>
      <div>
        <img decoding="async" src={`${doConnectImagePath}image_3.png`} alt="image_3.png" />
      </div>
      <div>
        <img decoding="async" src={`${doConnectImagePath}image_4.png`} alt="image_4.png" />
      </div>
      <div>
        <img decoding="async" src={`${doConnectImagePath}image_5.png`} alt="image_5.png" />
      </div>
      <div>
        <img decoding="async" src={`${doConnectImagePath}image_6.png`} alt="image_6.png" />
      </div>
      <div>
        <img decoding="async" src={`${doConnectImagePath}image_7.png`} alt="image_7.png" />
      </div>
      <div>
        <img decoding="async" src={`${doConnectImagePath}image_8.png`} alt="image_8.png" />
      </div>
      <div>
        <img decoding="async" src={`${doConnectImagePath}image_9.png`} alt="image_9.png" />
      </div>
      <div>
        <img decoding="async" src={`${doConnectImagePath}image_10.png`} alt="image_10.png" />
      </div>
      <div>
        <img decoding="async" src={`${doConnectImagePath}image_11.png`} alt="image_11.png" />
      </div>
      <div>
        <img decoding="async" src={`${doConnectImagePath}image_12.png`} alt="image_12.png" />
      </div>
      <div>
        <img decoding="async" src={`${doConnectImagePath}image_13.png`} alt="image_13.png" />
      </div>
    </Slider>
  );
};

export default DoConnectSlider();