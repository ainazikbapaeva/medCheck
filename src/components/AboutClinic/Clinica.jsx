import React from "react";
import styled from "styled-components";
import imgHeader_1 from "../../image/ant-design_phone-outlined (6).png"
import imgHeader_2 from "../../image/ant-design_phone-outlined.png";
import imgHeader_3 from "../../image/System.png";
import imgHeader_4 from "../../image//Component 47 (2).png";
import imgHeader_5 from "../../image/Component 47 (1).png";
import imgHeader_6 from "../../image/Component 47.png";
import imgHeader_7 from "../../image/ant-design_phone-outlined.png";
import imgHeader_8 from "../../image/Profile.png";
import imgHeader_9 from "../../image/Line 31.png";
import imgHeader_10 from "../../image/Group (1).png";
import linic from "../../image/Rectangle 1356.png";
import { lorem } from "../../utilis/Data";
import signature from "../../image/image 12.png";
import woman2 from "../../image/изображение 1.png";
import { ClinicData } from "../../utilis/Data";
import { ClinicData2 } from "../../utilis/Data";
import { ClinicData3 } from "../../utilis/Data";
import domClinic from "../../image/Rectangle 387.png";
import doctor from "../../image/Rectangle 388.png";
import doctor2 from "../../image/Rectangle 389.png";
import doctor3 from "../../image/Rectangle 390.png";
import Croupimg from "../../image/Group (1).png";
import Croupimg3 from "../../image/ant-design_phone-outlined.png";
import Croupimg4 from "../../image/ant-design_phone-outlined (1).png";
import Croupimg5 from "../../image/ant-design_phone-outlined (2).png";
import Croupimg6 from "../../image/Component 5.png";
import Croupimg7 from "../../image/Component 3.png";
import Croupimg8 from "../../image/Component 3 (1).png";

const Clinica = () => {
  return (
    <Container>
      <Header_start>
        <div className="div">
          <p>
            <img src={imgHeader_1} alt="" /> 106452, г. Бишкек, Гражданская 119
          </p>
          <p>
            <img src={imgHeader_2} alt="" />
            <span>пн-сб </span> 08:00 до 18:00
          </p>
        </div>
        <div className="search-from">
          <input
            className="search-from-txt"
            type="text"
            placeholder="Поиск по сайту "
          />
          <button className="search-from-btn">
            <img className="search-from-image" src={imgHeader_3} alt="" />
          </button>
        </div>
        <div className="header_img">
          <img src={imgHeader_4} alt="" />
          <img src={imgHeader_5} alt="" />
          <img src={imgHeader_6} alt="" />
        </div>
        <div className="header_contact">
          <p>
            <img src={imgHeader_7} alt="" /> +996(800) 000 000
          </p>
          <p>+996(505) 000 000</p>
        </div>
        <img className="img" src={imgHeader_8} alt="" />
      </Header_start>
      <img style={{ marginLeft: "100px" }} src={imgHeader_9} alt="" />
      <Header_middle>
        <div className="med">
          <img src={imgHeader_10} alt="" />
          <h1>
            <span>Med</span> Check
          </h1>
        </div>
        <div className="menu">
          <a href=""> О клинике</a>
          <a href=""> Услуги</a>
          <a href="">Врачи</a>
          <a href="">Прайс</a>
          <a href=""> Контакты</a>
        </div>
        <div>
          <button className="button_med">ПОЛУЧУИТЬ РЕЗУЛЬТАТ</button>
          <button className="button_med_2">ЗАПИСЬ ОНЛАЙН</button>
        </div>
      </Header_middle>
      <Nav>
        <img src={linic} alt="" />
      </Nav>

      <Section>
        <div className="contacts">
          <h1>Главная</h1>
          <span>О клинике</span>
        </div>

        <div className="boxText">
          <h1>Здоровье — самое </h1>
          <span>ценное в жизни</span>
        </div>

        <div className="boxContainer">
          <div>
            <p>{lorem}</p>
            <p>{lorem}</p>
            <img className="pngSignature" src={signature} alt="" />
          </div>

          <div className="boxPng">
            <div>
              <img src={woman2} alt="" />
            </div>
            <div>
              <h1>Руководитель клиники Medical Clinic</h1>
              <h2>Аниса Михаилова</h2>
            </div>
          </div>
        </div>
      </Section>

      <Article>
        <div className="oneBox">
          <div className="clinicText">
            <h1>О нашей клинике</h1>
            <span>“MedCheck”</span>
          </div>

          <p>{ClinicData}</p>
          <p>{ClinicData2}</p>
          <p>{ClinicData3}</p>
          <p></p>

          <div>
            <button>Записаться на консультацию</button>
          </div>
        </div>

        <div>
          <img src={domClinic} alt="" />
          <div className="Docpng">
            <img src={doctor} alt="" />
            <img src={doctor2} alt="" />
            <img src={doctor3} alt="" />
          </div>
        </div>
      </Article>

      <ContainerFooter>
        <div className="container-footer">
          <footer className="content-footer-center">
            <div>
              <img src={Croupimg} alt="" />
              <h3 className="Medical-footer">Медицинская клиника «MedCheck»</h3>
              <p className="International-footer">
                Международная Медицинская клиника <br /> «MedCheck» — это
                клиника, в которой применяются <br /> новейшие диагностические и
                лечебные технологии и <br /> ведут прием лучшие специалисты.
              </p>
            </div>
            <div>
              <p className="information-footer">Контактная информация</p>
              <div className="footer-divn-center">
                <div>
                  <div className="container-center-div">
                    <span className="medchek-gmail-com">
                      106452, г. Бишкек, Гражданская 119
                    </span>
                  </div>
                  <div className="container-center-div">
                    <img src={Croupimg3} alt="" />
                    <span className="medchek-gmail-com">
                      пн-сб 08:00 до 18:00{" "}
                    </span>
                  </div>
                </div>
                <div className="container-center-div">
                  <img src={Croupimg4} alt="" />
                  <span className="medchek-gmail-com">
                    +996(800) 000 000 <br /> +996(505) 000 000
                  </span>
                </div>
                <div className="container-center-div">
                  <img src={Croupimg5} alt="" />
                  <span className="medchek-gmail-com">medchek.@gmail.com</span>
                </div>
              </div>
            </div>
            <div>
              <p className="social-footer">Мы в социальных сетях:</p>
              <div className="img-footer-gap">
                <a href="https://www.instagram.com/">
                  <img src={Croupimg6} alt="" />
                </a>
                <a href="https://web.telegram.org/k/">
                  <img src={Croupimg7} alt="" />
                </a>
                <a href="https://www.whatsapp.com/?lang=ru_RU">
                  <img src={Croupimg8} alt="" />
                </a>
              </div>
            </div>
          </footer>
          <div className="container-a-top">
            <a className="clinic-a" href="">
              О клинике{" "}
            </a>
            <a className="clinic-a" href="">
              Услуги
            </a>
            <a className="clinic-a" href="">
              Врачи
            </a>
            <a className="clinic-a" href="">
              Прайс
            </a>
            <a className="clinic-a" href="">
              Прайс
            </a>
            <a className="clinic-a" href="">
              Контакты
            </a>
          </div>
          <div>
            <hr className="hrs-footer" />
            <p className="Peaksoft-footer">
              © Peaksoft House 2023 | MedCheck | Все права защищены
            </p>
          </div>
        </div>
      </ContainerFooter>
    </Container>
  );
};
const Container = styled.div`
  width: 1440px;
  margin: 0 auto;
`;

const Nav = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

const Header_start = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;

  .search-from {
    border: 0px solid;
    display: inline-flex;
    width: 367px;
    height: 40px;
    border-radius: 24px;
    background-color: #f3f1f1;
    justify-content: space-between;
    align-items: center;
  }
  .search-from-txt {
    border: none;
    outline: none;
    background-color: #f3f1f1;
    font-size: 20px;
  }
  .search-from-btn {
    border: none;
  }
  .search-from-image {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .header_img img {
    margin-left: 10px;
  }
  .header_contact p {
    margin-top: -6px;
  }
  .div p {
    margin-left: 10px;
    margin-top: -3px;
  }
  .div span {
    color: #009344;
    margin-left: 10px;
  }
  .img {
    width: 30px;
    height: 31px;
  }
`;
const Header_middle = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 30px;
  .med {
    display: flex;
    margin-top: -20px;
    gap: 10px;
  } // padding: 0 20px;

  .med span {
    color: #009344;
  }
  a {
    text-decoration: none;
    color: #222222;
    margin: 0px 10px;
    margin-right: 40px;
    color: var(--Primary-black, #222);
    font-family: Manrope;
    font-weight: 500;
  }
  .button_med {
    width: 205px;
    height: 43px;
    padding: 8px, 20px, 8px, 20px;
    border-radius: 24px;
    border: 1px solid #009344;
    background: #ffffff;
    color: #009344;
    cursor: pointer;
  }
  .button_med_2 {
    width: 158px;
    height: 43px;
    padding: 8px, 20px, 8px, 20px;
    border-radius: 24px;
    background: linear-gradient(180.61deg, #0cbb6b 0.45%, #027b44 99.39%);
    border: none;
    color: #ffffff;
    margin-top: -20px;
    margin-left: 20px;
    cursor: pointer;
  }
`;
const Section = styled.div`
  margin-top: 30px;
  .contacts {
    display: flex;
    align-items: center;
  }
  .contacts h1 {
    color: var(--Secondary-icon, #959595);
    font-family: Manrope;
    font-size: 14px;
    font-weight: 400;
  }
  .contacts span {
    margin-left: 5px;
    color: var(--Primary-green, #048741);
    font-family: Manrope;
    font-size: 14px;
    font-weight: 400;
  }
  .boxText {
    display: flex;
    align-items: center;
  }
  .boxText h1 {
    color: var(--Primary-black, #222);
    font-family: Manrope;
    font-size: 36px;
    font-weight: 600;
  }
  .boxText span {
    color: var(--Primary-green, #048741);
    font-family: Manrope;
    font-size: 36px;
    font-weight: 600;
    margin-left: 5px;
  }
  .boxContainer {
    display: flex;
    align-items: center;
    gap: 140px;
  }
  .boxContainer p {
    color: var(--Primary-black-gray, #4d4e51);
    font-family: Manrope;
    font-weight: 400;
    line-height: 160.018%;
    width: 600px;
  }
  .pngSignature {
    position: relative;
    right: -520px;
  }
  .boxPng {
    width: 596px;
    height: 385.839px;
    border: 0.852px solid #ffcacb;
  }
  .boxPng img {
    margin-left: 30px;
    margin-top: -25px;
  }
  .boxPng h1 {
    color: var(--Primary-green, #048741);
    font-family: Manrope;
    font-size: 18px;
    font-weight: 400;
    margin-left: 70px;
  }
  .boxPng h2 {
    color: var(--Primary-black, #222);
    font-family: Manrope;
    font-size: 22px;
    font-weight: 400;
    margin-left: 135px;
  }
`;
const Article = styled.div`
  margin-top: 200px;
  display: flex;
  align-items: center;

  .clinicText {
    display: flex;
    align-items: center;
  }
  .clinicText h1 {
    color: var(--Primary-black, #222);
    font-family: Manrope;
    font-size: 36px;
    font-weight: 600;
  }
  .clinicText span {
    color: var(--Primary-green, #048741);
    font-family: Manrope;
    font-size: 36px;
    font-weight: 600;
    margin-left: 5px;
  }
  .oneBox p {
    color: var(--Primary-black-gray, #4d4e51);
    font-family: Manrope;
    font-weight: 400;
    line-height: 160%;
    width: 650px;
  }
  .oneBox button {
    width: 263px;
    height: 42px;
    border-radius: 10px;
    border: 1px solid var(--Primary-green, #048741);
    color: #029847;
    text-align: center;
    font-family: Manrope;
    font-weight: 400;
    background: none;
    cursor: pointer;
    margin-top: 40px;
  }
  .Docpng {
    margin-top: 16px;
  }
  .Docpng img {
    margin-left: 15px;
  }
`;

const ContainerFooter = styled.div`
  width: 1440px;
  height: 494px;
  background: #212529;
  margin-top: 120px;
  margin-left: -80px;

  .Medical-footer {
    color: #fff;
    font-family: Manrope;
    font-size: 16px;
  }

  .International-footer {
    color: #ccc;
    font-family: Manrope;
    font-size: 16px;
  }

  .information-footer {
    color: #fff;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Manrope;
  }

  .footer-divn-center {
    display: flex;
    flex-direction: column;
    aligin-items: center;
    gap: 10px;
  }

  .container-center-div {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
  }

  .medchek-gmail-com {
    color: #ccc;
    font-family: Manrope;
    line-height: 16px;
  }

  .social-footer {
    color: #fff;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Manrope;
    font-size: 16px;
  }

  .img-footer-gap {
    display: flex;
    gap: 20px;
    margin-top: 20px;
  }

  .content-footer-center {
    display: flex;
    justify-content: center;
    gap: 150px;
    position: relative;
    top: 50px;
  }

  a {
    text-decoration: none;
  }

  .container-a-top {
    margin-top: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 36px;
  }

  .clinic-a {
    color: #ccc;
    font-family: Manrope;
    font-size: 16px;
  }

  .hrs-footer {
    background: #6f7074;
    width: 1200px;
    height: 1px;
    border: none;
    margin-top: 40px;
  }

  .Peaksoft-footer {
    text-align: center;
    margin-top: 40px;
    color: var(--Secondary-icon, #959595);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Manrope;
    font-size: 14px;
  }
`;
export default Clinica;
