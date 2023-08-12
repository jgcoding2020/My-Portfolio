import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * Component produces react-slick slider carousel  
 * @returns <Slider/> with SocialMediaWebApp project images
 */
const SocialMediaWebAppSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500
  };

  const socialMediaWebAppImagePath = "images/myProjectsImages/socialMediaWebAppImages/";

  return (
    <Slider {...settings}>
      <div>
        <a href={`${socialMediaWebAppImagePath}image_1.jpg`} target="_blank"><img decoding="async" src={`${socialMediaWebAppImagePath}image_1.jpg`} alt="image_1.jpg" /></a>
      </div>
      <div>
        <a href={`${socialMediaWebAppImagePath}image_2.jpg`} target="_blank"><img decoding="async" src={`${socialMediaWebAppImagePath}image_2.jpg`} alt="image_2.jpg" /></a>
      </div>
      <div>
        <a href={`${socialMediaWebAppImagePath}image_3.jpg`} target="_blank"><img decoding="async" src={`${socialMediaWebAppImagePath}image_3.jpg`} alt="image_3.jpg" /></a>
      </div>
      <div>
        <a href={`${socialMediaWebAppImagePath}image_4.jpg`} target="_blank"><img decoding="async" src={`${socialMediaWebAppImagePath}image_4.jpg`} alt="image_4.jpg" /></a>
      </div>
      <div>
        <a href={`${socialMediaWebAppImagePath}image_5.jpg`} target="_blank"><img decoding="async" src={`${socialMediaWebAppImagePath}image_5.jpg`} alt="image_5.jpg" /></a>
      </div>
      <div>
        <a href={`${socialMediaWebAppImagePath}image_6.jpg`} target="_blank"><img decoding="async" src={`${socialMediaWebAppImagePath}image_6.jpg`} alt="image_6.jpg" /></a>
      </div>
      <div>
        <a href={`${socialMediaWebAppImagePath}image_7.jpg`} target="_blank"><img decoding="async" src={`${socialMediaWebAppImagePath}image_7.jpg`} alt="image_7.jpg" /></a>
      </div>
      <div>
        <a href={`${socialMediaWebAppImagePath}image_8.jpg`} target="_blank"><img decoding="async" src={`${socialMediaWebAppImagePath}image_8.jpg`} alt="image_8.jpg" /></a>
      </div>
      <div>
        <a href={`${socialMediaWebAppImagePath}image_9.jpg`} target="_blank"><img decoding="async" src={`${socialMediaWebAppImagePath}image_9.jpg`} alt="image_9.jpg" /></a>
      </div>
      <div>
        <a href={`${socialMediaWebAppImagePath}image_10.jpg`} target="_blank"><img decoding="async" src={`${socialMediaWebAppImagePath}image_10.jpg`} alt="image_10.jpg" /></a>
      </div>
      <div>
        <a href={`${socialMediaWebAppImagePath}image_11.jpg`} target="_blank"><img decoding="async" src={`${socialMediaWebAppImagePath}image_11.jpg`} alt="image_11.jpg" /></a>
      </div>
      <div>
        <a href={`${socialMediaWebAppImagePath}image_12.jpg`} target="_blank"><img decoding="async" src={`${socialMediaWebAppImagePath}image_12.jpg`} alt="image_12.jpg" /></a>
      </div>
      <div>
        <a href={`${socialMediaWebAppImagePath}image_13.jpg`} target="_blank"><img decoding="async" src={`${socialMediaWebAppImagePath}image_13.jpg`} alt="image_13.jpg" /></a>
      </div>
      <div>
        <a href={`${socialMediaWebAppImagePath}image_14.jpg`} target="_blank"><img decoding="async" src={`${socialMediaWebAppImagePath}image_14.jpg`} alt="image_14.jpg" /></a>
      </div>
      <div>
        <a href={`${socialMediaWebAppImagePath}image_15.jpg`} target="_blank"><img decoding="async" src={`${socialMediaWebAppImagePath}image_15.jpg`} alt="image_15.jpg" /></a>
      </div>
      <div>
        <a href={`${socialMediaWebAppImagePath}image_16.jpg`} target="_blank"><img decoding="async" src={`${socialMediaWebAppImagePath}image_16.jpg`} alt="image_16.jpg" /></a>
      </div>
      <div>
        <a href={`${socialMediaWebAppImagePath}image_17.jpg`} target="_blank"><img decoding="async" src={`${socialMediaWebAppImagePath}image_17.jpg`} alt="image_17.jpg" /></a>
      </div>
      <div>
        <a href={`${socialMediaWebAppImagePath}image_18.jpg`} target="_blank"><img decoding="async" src={`${socialMediaWebAppImagePath}image_18.jpg`} alt="image_18.jpg" /></a>
      </div>
    </Slider>
  );
};

export default SocialMediaWebAppSlider();