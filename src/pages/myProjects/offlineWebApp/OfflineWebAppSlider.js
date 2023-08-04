import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * Component produces react-slick slider carousel  
 * @returns <Slider/> with Offline Web App project images
 */
const OfflineWebAppSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500
  };

  const offlineWebAppImagePath = process.env.PUBLIC_URL + "images/myProjectsImages/offlineWebAppImages/";

  return (
    <Slider {...settings}>
      <div>
        <img decoding="async" src={`${offlineWebAppImagePath}image_1.png`} alt="image_1.png" />
      </div>
      <div>
        <img decoding="async" src={`${offlineWebAppImagePath}image_2.png`} alt="image_2.png" />
      </div>
      <div>
        <img decoding="async" src={`${offlineWebAppImagePath}image_3.png`} alt="image_3.png" />
      </div>
      <div>
        <img decoding="async" src={`${offlineWebAppImagePath}image_4.png`} alt="image_4.png" />
      </div>
      <div>
        <img decoding="async" src={`${offlineWebAppImagePath}image_5.png`} alt="image_5.png" />
      </div>
      <div>
        <img decoding="async" src={`${offlineWebAppImagePath}image_6.png`} alt="image_6.png" />
      </div>
      <div>
        <img decoding="async" src={`${offlineWebAppImagePath}image_7.png`} alt="image_7.png" />
      </div>
      <div>
        <img decoding="async" src={`${offlineWebAppImagePath}image_8.png`} alt="image_8.png" />
      </div>
      <div>
        <img decoding="async" src={`${offlineWebAppImagePath}image_9.png`} alt="image_9.png" />
      </div>
      <div>
        <img decoding="async" src={`${offlineWebAppImagePath}image_10.png`} alt="image_10.png" />
      </div>
      <div>
        <img decoding="async" src={`${offlineWebAppImagePath}image_11.jpg`} alt="image_11.jpg" />
      </div>
      <div>
        <img decoding="async" src={`${offlineWebAppImagePath}image_12.png`} alt="image_12.png" />
      </div>
      <div>
        <img decoding="async" src={`${offlineWebAppImagePath}image_13.png`} alt="image_13.png" />
      </div>
    </Slider>
  );
};

export default OfflineWebAppSlider();