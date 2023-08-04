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

  const shoppingCartImagePath = process.env.PUBLIC_URL + "images/myProjectsImages/shoppingCartImages/";

  return (
    <Slider {...settings}>
      <div>
        <img decoding="async" src={`${shoppingCartImagePath}create_account.png`} alt="create_account.png" />
      </div>
      <div>
        <img decoding="async" src={`${shoppingCartImagePath}account_created.png`} alt="account_created.png" />
      </div>
      <div>
        <img decoding="async" src={`${shoppingCartImagePath}login_1.png`} alt="login_1.png" />
      </div>
      <div>
        <img decoding="async" src={`${shoppingCartImagePath}no_access.png`} alt="no_access.png" />
      </div>
      <div>
        <img decoding="async" src={`${shoppingCartImagePath}login_2.png`} alt="login_2.png" />
      </div>
      <div>
        <img decoding="async" src={`${shoppingCartImagePath}form_creation_1.png`} alt="form_creation_1.png" />
      </div>
      <div>
        <img decoding="async" src={`${shoppingCartImagePath}admin_page.png`} alt="admin_page.png" />
      </div>
      <div>
        <img decoding="async" src={`${shoppingCartImagePath}access_changed.png`} alt="access_changed.png" />
      </div>
      <div>
        <img decoding="async" src={`${shoppingCartImagePath}form_creation_2.png`} alt="form_creation_2.png" />
      </div>
      <div>
        <img decoding="async" src={`${shoppingCartImagePath}form_creation_3.png`} alt="form_creation_3.png" />
      </div>
      <div>
        <img decoding="async" src={`${shoppingCartImagePath}form_published.jpg`} alt="form_published.jpg" />
      </div>
      <div>
        <img decoding="async" src={`${shoppingCartImagePath}created_form.png`} alt="created_form.png" />
      </div>
      <div>
        <img decoding="async" src={`${shoppingCartImagePath}data_analysis.png`} alt="data_analysis.png" />
      </div>
    </Slider>
  );
};

export default ShoppingCartSlider();