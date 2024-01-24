import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Article.css";
import { Pagination, Navigation } from "swiper/modules";
import { coments } from "../../utilis/Data";
import styled from "styled-components";
import png from "../../image/Ellipse 108.png";
import stars from "../../image/Звезды_ отзывы.png";
import png2 from "../../image/Ellipse 5 (1).png";
import png3 from "../../image/Ellipse 2 (1).png";
import png4 from "../../image/Ellipse 4 (1).png";
import groupPng from "../../image/Group 337776.png";
import Users from "../../image/Users.png";
import Phone from "../../image/phone.png";
import woman from "../../image/lithuanian-woman-dentist-holding-tools-isolated-making-phone-gesture-call-me-back-sign_1-removebg 1.png";

const Article = () => {
  return (
    <Container>
      <Text>
        <h1 className="Reviews">Отзывы наших</h1>
        <span className="patients">пациентов</span>
      </Text>
      <>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="SwiperSlide">
            <div>
              <Reviews>
                <img src={png} alt="" />
                <div>
                  <h1 className="name">Александр</h1>
                  <img className="starspng" src={stars} alt="" />
                </div>
              </Reviews>
              <Coments>{coments}</Coments>
            </div>
          </SwiperSlide>

          <SwiperSlide className="SwiperSlide2">
            <div>
              <Reviews>
                <img src={png2} alt="" />
                <div>
                  <h1 className="name">Елена</h1>
                  <img className="starspng" src={stars} alt="" />
                </div>
              </Reviews>
              <Coments>{coments}</Coments>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide3">
            <div>
              <Reviews>
                <img src={png3} alt="" />
                <div>
                  <h1 className="name">Альберт</h1>
                  <img className="starspng" src={stars} alt="" />
                </div>
              </Reviews>
              <Coments>{coments}</Coments>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide4">
            <div>
              <Reviews>
                <img src={png4} alt="" />
                <div>
                  <h1 className="name">Соффия</h1>
                  <img className="starspng" src={stars} alt="" />
                </div>
              </Reviews>
              <Coments>{coments}</Coments>
            </div>
          </SwiperSlide>
        </Swiper>
      </>

      <div className="contact">
        <div className="box">
          <h1 className="text">Оставьте заявку</h1>
          <p className="adres">
            Оставьте свой номер и наши специалисты свяжутся с Вами <br />{" "}
            в ближайшее время
          </p>

          <div className="boxInp">
            <div>
              <h3 className="how">Как к Вам обратиться?</h3>
              <div className="boxInpUser">
                <img src={Users} alt="" />
                <input type="text" placeholder="Введите имя" />
              </div>
            </div>

            <div>
              <h3 className="how2">Номер мобильного телефона</h3>
              <div className="boxInpNum">
                <img src={Phone} alt="" />
                <input type="number" placeholder="+996 (___) __-__-__" />
              </div>
            </div>
          </div>

          <div className="boxBtn">
            <button>ОТПРАВИТЬ ЗАЯВКУ</button>
            <img src={groupPng} alt="" />
          </div>
        </div>

        <div className="woman">
          <img src={woman} alt="" />
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  margin-top: 120px;
`;
const Text = styled.div`
  display: flex;
  align-items: center;
  .Reviews {
    color: var(--Primary-black, #222);
    font-family: Manrope;
    font-size: 36px;
    font-weight: 500;
    letter-spacing: 1px;
  }
  .patients {
    color: var(--Primary-green, #048741);
    font-family: Manrope;
    font-size: 36px;
    font-weight: 600;
  }
`;
const Reviews = styled.div`
  display: flex;
  align-items: center;
  .name {
    color: var(--Primary-black, #222);
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 600;
    margin-left: 14px;
  }
  .starspng {
    margin-left: 14px;
  }
`;

const Coments = styled.p`
  margin-top: 5px;
  color: var(--Primary-black, #222);
  font-family: Manrope;
  font-weight: 300;
  line-height: normal;
`;
export default Article;
