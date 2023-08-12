import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * Component produces react-slick slider carousel  
 * @returns <Slider/> with WebProjectPortal project images
 */
const WebProjectPortalSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500
  };

  const WebProjectPortalImagePath = "images/myProjectsImages/webProjectPortalImages/";

  return (
    <Slider {...settings}>
      <div>
        <a href={`${WebProjectPortalImagePath}image_1.png`} target="_blank"><img decoding="async" src={`${WebProjectPortalImagePath}image_1.png`} alt="image_1.png" /></a>
      </div>
      <div>
        <a href={`${WebProjectPortalImagePath}image_2.png`} target="_blank"><img decoding="async" src={`${WebProjectPortalImagePath}image_2.png`} alt="image_2.png" /></a>
      </div>
      <div>
      <a href={`${WebProjectPortalImagePath}image_3.png`} target="_blank"><img decoding="async" src={`${WebProjectPortalImagePath}image_3.png`} alt="image_3.png" /></a>
      </div>
      <div>
      <a href={`${WebProjectPortalImagePath}image_4.png`} target="_blank"><img decoding="async" src={`${WebProjectPortalImagePath}image_4.png`} alt="image_4.png" /></a>
      </div>
      <div>
      <a href={`${WebProjectPortalImagePath}image_5.png`} target="_blank"><img decoding="async" src={`${WebProjectPortalImagePath}image_5.png`} alt="image_5.png" /></a>
      </div>
      <div>
      <a href={`${WebProjectPortalImagePath}image_6.png`} target="_blank"><img decoding="async" src={`${WebProjectPortalImagePath}image_6.png`} alt="image_6.png" /></a>
      </div>
      <div>
      <a href={`${WebProjectPortalImagePath}image_7.png`} target="_blank"><img decoding="async" src={`${WebProjectPortalImagePath}image_7.png`} alt="image_7.png" /></a>
      </div>
      <div>
      <a href={`${WebProjectPortalImagePath}image_8.png`} target="_blank"><img decoding="async" src={`${WebProjectPortalImagePath}image_8.png`} alt="image_8.png" /></a>
      </div>
      <div>
      <a href={`${WebProjectPortalImagePath}image_9.png`} target="_blank"><img decoding="async" src={`${WebProjectPortalImagePath}image_9.png`} alt="image_9.png" /></a>
      </div>
      <div>
      <a href={`${WebProjectPortalImagePath}image_10.png`} target="_blank"><img decoding="async" src={`${WebProjectPortalImagePath}image_10.png`} alt="image_11.png" /></a>
      </div>
      <div>
      <a href={`${WebProjectPortalImagePath}image_11.png`} target="_blank"><img decoding="async" src={`${WebProjectPortalImagePath}image_11.png`} alt="image_11.png" /></a>
      </div>
      <div>
      <a href={`${WebProjectPortalImagePath}image_12.png`} target="_blank"><img decoding="async" src={`${WebProjectPortalImagePath}image_12.png`} alt="image_13.png" /></a>
      </div>
      <div>
      <a href={`${WebProjectPortalImagePath}image_13.png`} target="_blank"><img decoding="async" src={`${WebProjectPortalImagePath}image_13.png`} alt="image_13.png" /></a>
      </div>
      <div>
      <a href={`${WebProjectPortalImagePath}image_14.png`} target="_blank"><img decoding="async" src={`${WebProjectPortalImagePath}image_14.png`} alt="image_14.png" /></a>
      </div>
      <div>
      <a href={`${WebProjectPortalImagePath}image_15.png`} target="_blank"><img decoding="async" src={`${WebProjectPortalImagePath}image_15.png`} alt="image_15.png" /></a>
      </div>
      <div>
      <a href={`${WebProjectPortalImagePath}image_16.png`} target="_blank"><img decoding="async" src={`${WebProjectPortalImagePath}image_16.png`} alt="image_16.png" /></a>
      </div>
      <div>
      <a href={`${WebProjectPortalImagePath}image_17.png`} target="_blank"><img decoding="async" src={`${WebProjectPortalImagePath}image_17.png`} alt="image_17.png" /></a>
      </div>
      <div>
      <a href={`${WebProjectPortalImagePath}image_18.png`} target="_blank"><img decoding="async" src={`${WebProjectPortalImagePath}image_18.png`} alt="image_18.png" /></a>
      </div>
      <div>
      <a href={`${WebProjectPortalImagePath}image_19.png`} target="_blank"><img decoding="async" src={`${WebProjectPortalImagePath}image_19.png`} alt="image_19.png" /></a>
      </div>
      <div>
      <a href={`${WebProjectPortalImagePath}image_20.png`} target="_blank"><img decoding="async" src={`${WebProjectPortalImagePath}image_20.png`} alt="image_20.png" /></a>
      </div>
      <div>
      <a href={`${WebProjectPortalImagePath}image_21.png`} target="_blank"><img decoding="async" src={`${WebProjectPortalImagePath}image_21.png`} alt="image_21.png" /></a>
      </div>
      <div>
      <a href={`${WebProjectPortalImagePath}image_22.png`} target="_blank"><img decoding="async" src={`${WebProjectPortalImagePath}image_22.png`} alt="image_22.png" /></a>
      </div>
      <div>
      <a href={`${WebProjectPortalImagePath}image_23.png`} target="_blank"><img decoding="async" src={`${WebProjectPortalImagePath}image_23.png`} alt="image_23.png" /></a>
      </div>
      <div>
      <a href={`${WebProjectPortalImagePath}image_24.png`} target="_blank"><img decoding="async" src={`${WebProjectPortalImagePath}image_24.png`} alt="image_0.png" /></a>
      </div>
      <div>
      <a href={`${WebProjectPortalImagePath}image_25.png`} target="_blank"><img decoding="async" src={`${WebProjectPortalImagePath}image_25.png`} alt="image_0.png" /></a>
      </div>
    </Slider>
  );
};

export default WebProjectPortalSlider();