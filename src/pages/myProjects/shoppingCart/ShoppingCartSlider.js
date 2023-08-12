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
        <a href={`${shoppingCartImagePath}image_1.jpg`} target="_blank"><img decoding="async" src={`${shoppingCartImagePath}image_1.jpg`} alt="image_1.jpg" /></a>
      </div>
      <div>
        <a href={`${shoppingCartImagePath}image_2.jpg`} target="_blank"><img decoding="async" src={`${shoppingCartImagePath}image_2.jpg`} alt="image_2.jpg" /></a>
      </div>
      <div>
        <a href={`${shoppingCartImagePath}image_3.jpg`} target="_blank"><img decoding="async" src={`${shoppingCartImagePath}image_3.jpg`} alt="image_3.jpg" /></a>
      </div>
      <div>
        <a href={`${shoppingCartImagePath}image_4.jpg`} target="_blank"><img decoding="async" src={`${shoppingCartImagePath}image_4.jpg`} alt="image_4.jpg" /></a>
      </div>
      <div>
        <a href={`${shoppingCartImagePath}image_5.jpg`} target="_blank"><img decoding="async" src={`${shoppingCartImagePath}image_5.jpg`} alt="image_5.jpg" /></a>
      </div>
      <div>
        <a href={`${shoppingCartImagePath}image_6.jpg`} target="_blank"><img decoding="async" src={`${shoppingCartImagePath}image_6.jpg`} alt="image_6.jpg" /></a>
      </div>
      <div>
        <a href={`${shoppingCartImagePath}image_7.jpg`} target="_blank"><img decoding="async" src={`${shoppingCartImagePath}image_7.jpg`} alt="image_7.jpg" /></a>
      </div>
      <div>
        <a href={`${shoppingCartImagePath}image_8.jpg`} target="_blank"><img decoding="async" src={`${shoppingCartImagePath}image_8.jpg`} alt="image_9.jpg" /></a>
      </div>
      <div>
        <a href={`${shoppingCartImagePath}image_9.jpg`} target="_blank"><img decoding="async" src={`${shoppingCartImagePath}image_9.jpg`} alt="image_9.jpg" /></a>
      </div>
      <div>
        <a href={`${shoppingCartImagePath}image_10.jpg`} target="_blank"><img decoding="async" src={`${shoppingCartImagePath}image_10.jpg`} alt="image_10.jpg" /></a>
      </div>
      <div>
        <a href={`${shoppingCartImagePath}image_11.jpg`} target="_blank"><img decoding="async" src={`${shoppingCartImagePath}image_11.jpg`} alt="image_11.jpg" /></a>
      </div>
      <div>
        <a href={`${shoppingCartImagePath}image_12.jpg`} target="_blank"><img decoding="async" src={`${shoppingCartImagePath}image_12.jpg`} alt="image_12.jpg" /></a>
      </div>
      <div>
        <a href={`${shoppingCartImagePath}image_13.jpg`} target="_blank"><img decoding="async" src={`${shoppingCartImagePath}image_13.jpg`} alt="image_13.jpg" /></a>
      </div>
      <div>
        <a href={`${shoppingCartImagePath}image_14.jpg`} target="_blank"><img decoding="async" src={`${shoppingCartImagePath}image_14.jpg`} alt="image_14.jpg" /></a>
      </div>
      <div>
        <a href={`${shoppingCartImagePath}image_15.jpg`} target="_blank"><img decoding="async" src={`${shoppingCartImagePath}image_15.jpg`} alt="image_15.jpg" /></a>
      </div>
      <div>
        <a href={`${shoppingCartImagePath}image_16.jpg`} target="_blank"><img decoding="async" src={`${shoppingCartImagePath}image_16.jpg`} alt="image_17.jpg" /></a>
      </div>
      <div>
        <a href={`${shoppingCartImagePath}image_17.jpg`} target="_blank"><img decoding="async" src={`${shoppingCartImagePath}image_17.jpg`} alt="image_17.jpg" /></a>
      </div>
    </Slider>
  );
};

export default ShoppingCartSlider();