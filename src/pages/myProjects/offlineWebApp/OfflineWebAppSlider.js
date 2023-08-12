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

  const offlineWebAppImagePath = "images/myProjectsImages/offlineWebAppImages/";

  return (
    <Slider {...settings}>
      <div>
        <a href={`${offlineWebAppImagePath}image_1.png`} target="_blank"><img decoding="async" src={`${offlineWebAppImagePath}image_1.png`} alt="image_1.png" /></a>
      </div>
      <div>
        <a href={`${offlineWebAppImagePath}image_2.png`} target="_blank"><img decoding="async" src={`${offlineWebAppImagePath}image_2.png`} alt="image_2.png" /></a>
      </div>
      <div>
        <a href={`${offlineWebAppImagePath}image_3.png`} target="_blank"><img decoding="async" src={`${offlineWebAppImagePath}image_3.png`} alt="image_3.png" /></a>
      </div>
      <div>
        <a href={`${offlineWebAppImagePath}image_4.png`} target="_blank"><img decoding="async" src={`${offlineWebAppImagePath}image_4.png`} alt="image_4.png" /></a>
      </div>
      <div>
        <a href={`${offlineWebAppImagePath}image_5.png`} target="_blank"><img decoding="async" src={`${offlineWebAppImagePath}image_5.png`} alt="image_5.png" /></a>
      </div>
      <div>
        <a href={`${offlineWebAppImagePath}image_6.png`} target="_blank"><img decoding="async" src={`${offlineWebAppImagePath}image_6.png`} alt="image_6.png" /></a>
      </div>
      <div>
        <a href={`${offlineWebAppImagePath}image_7.png`} target="_blank"><img decoding="async" src={`${offlineWebAppImagePath}image_7.png`} alt="image_7.png" /></a>
      </div>
      <div>
        <a href={`${offlineWebAppImagePath}image_8.png`} target="_blank"><img decoding="async" src={`${offlineWebAppImagePath}image_8.png`} alt="image_9.png" /></a>
      </div>
      <div>
        <a href={`${offlineWebAppImagePath}image_9.png`} target="_blank"><img decoding="async" src={`${offlineWebAppImagePath}image_9.png`} alt="image_9.png" /></a>
      </div>
      <div>
        <a href={`${offlineWebAppImagePath}image_10.png`} target="_blank"><img decoding="async" src={`${offlineWebAppImagePath}image_10.png`} alt="image_0.png" /></a>
      </div>
      <div>
        <a href={`${offlineWebAppImagePath}image_11.png`} target="_blank"><img decoding="async" src={`${offlineWebAppImagePath}image_12.png`} alt="image_0.png" /></a>
      </div>
      <div>
        <a href={`${offlineWebAppImagePath}image_12.png`} target="_blank"><img decoding="async" src={`${offlineWebAppImagePath}image_12.png`} alt="image_0.png" /></a>
      </div>
      <div>
        <a href={`${offlineWebAppImagePath}image_13.png`} target="_blank"><img decoding="async" src={`${offlineWebAppImagePath}image_13.png`} alt="image_0.png" /></a>
      </div>
    </Slider>
  );
};

export default OfflineWebAppSlider();