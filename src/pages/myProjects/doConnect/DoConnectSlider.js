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

  const doConnectImagePath = process.env.PUBLIC_URL + "images/myProjectsImages/doConnectImages/";

  return (
    <Slider {...settings}>
        <img decoding="async" src={`${doConnectImagePath}user_login_page.png`} alt="user_login.png" />
        <img decoding="async" src={`${doConnectImagePath}user_home.png`} alt="user_home.png" />
        <img decoding="async" src={`${doConnectImagePath}create_question.png`} alt="create_question.png" />
        <img decoding="async" src={`${doConnectImagePath}search_question.png`} alt="search_question.png" />
        <img decoding="async" src={`${doConnectImagePath}chat_1.png`} alt="chat_1.png" />
        <img decoding="async" src={`${doConnectImagePath}chat_2.png`} alt="chat_2.png" />
        <img decoding="async" src={`${doConnectImagePath}chat_3.png`} alt="chat_3.png" />
        <img decoding="async" src={`${doConnectImagePath}admin_login_page.png`} alt="admin_login_page.png" />
        <img decoding="async" src={`${doConnectImagePath}admin_home.png`} alt="admin_home.png.png" />
        <img decoding="async" src={`${doConnectImagePath}pending_answer.png`} alt="pending_answer.png" />
        <img decoding="async" src={`${doConnectImagePath}approve_answer.png`} alt="approve_answer.png" />
        <img decoding="async" src={`${doConnectImagePath}pending_questions.png`} alt="pending_questions.png" />
        <img decoding="async" src={`${doConnectImagePath}remove_question.png`} alt="remove_question.png" />
    </Slider>
  );
};

export default DoConnectSlider();