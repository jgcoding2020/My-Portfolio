import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * Component produces react-slick slider carousel  
 * @returns <Slider/> with ShoppingCart project images
 */
const ShoppingCartSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500
  };

  const shoppingCartImagePath = "images/myProjectsImages/shoppingCartImages/";

  return (
    <Slider {...settings}>
      <div>
        <img decoding="async" src={`${shoppingCartImagePath}image_1.jpg`} alt="image_1.jpg" />
      </div>
      <div>
        <img decoding="async" src={`${shoppingCartImagePath}image_2.jpg`} alt="image_2.jpg" />
      </div>
      <div>
        <img decoding="async" src={`${shoppingCartImagePath}image_3.jpg`} alt="image_3.jpg" />
      </div>
      <div>
        <img decoding="async" src={`${shoppingCartImagePath}image_4.jpg`} alt="image_4.jpg" />
      </div>
      <div>
        <img decoding="async" src={`${shoppingCartImagePath}image_6.jpg`} alt="image_5.jpg" />
      </div>
      <div>
        <img decoding="async" src={`${shoppingCartImagePath}image_7.jpg`} alt="image_7.jpg" />
      </div>
      <div>
        <img decoding="async" src={`${shoppingCartImagePath}image_8.jpg`} alt="image_8.jpg" />
      </div>
      <div>
        <img decoding="async" src={`${shoppingCartImagePath}image_9.jpg`} alt="image_9.jpg" />
      </div>
      <div>
        <img decoding="async" src={`${shoppingCartImagePath}image_10.jpg`} alt="image_10.jpg" />
      </div>
      <div>
        <img decoding="async" src={`${shoppingCartImagePath}image_11.jpg`} alt="image_11.jpg" />
      </div>
      <div>
        <img decoding="async" src={`${shoppingCartImagePath}image_12.jpg`} alt="image_12.jpg" />
      </div>
      <div>
        <img decoding="async" src={`${shoppingCartImagePath}image_13.jpg`} alt="image_13.jpg" />
      </div>
      <div>
        <img decoding="async" src={`${shoppingCartImagePath}image_14.jpg`} alt="image_14.jpg" />
      </div>
      <div>
        <img decoding="async" src={`${shoppingCartImagePath}image_15.jpg`} alt="image_15.jpg" />
      </div>
      <div>
        <img decoding="async" src={`${shoppingCartImagePath}image_16.jpg`} alt="image_16.jpg" />
      </div>
      <div>
        <img decoding="async" src={`${shoppingCartImagePath}image_17.jpg`} alt="image_17.jpg" />
      </div>
    </Slider>
  );
};

export default ShoppingCartSlider();