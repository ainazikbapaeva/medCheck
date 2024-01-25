import React from "react";
import styled from "styled-components";
import Croupimg from "../../image/Group 337943.png";
import Croupimg2 from "../../image/GeoPoint.png";
import Croupimg3 from "../../image/ant-design_phone-outlined.png";
import Croupimg4 from "../../image/ant-design_phone-outlined (1).png";
import Croupimg5 from "../../image/ant-design_phone-outlined (2).png";
import Croupimg6 from "../../image/Component 5.png";
import Croupimg7 from "../../image/Component 3.png";
import Croupimg8 from "../../image/Component 4.png";

const Footer = () => {
  return (
    <Container>
      <div className="container-footer">
        <footer className="content-footer-center">
          <div>
            <img src={Croupimg} alt="" />
            <h3 className="Medical-footer">Медицинская клиника «MedCheck»</h3>
            <p className="International-footer">
              Международная Медицинская клиника <br /> «MedCheck» — это клиника,
              в которой применяются <br /> новейшие диагностические и лечебные
              технологии и <br /> ведут прием лучшие специалисты.
            </p>
          </div>
          <div>
            <p className="information-footer">Контактная информация</p>
            <div className="footer-divn-center">
              <div>
                <div className="container-center-div">
                  <img src={Croupimg2} alt="" />
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
    </Container>
  );
};

const Container = styled.div`
  width: 1440px;
  height: 494px;
  background: #212529;
  margin-top: 50px;
  margin-left: 210px;

  .Medical-footer {
    color: #fff;
    font-family: Manrope;
    font-size: 16px;
  }

  .International-footer {
    color: #ccc;
    font-family: Manrope;
    font-size: 16px;
    // width: 461px;
  }

  .information-footer {
    color: #fff;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Manrope;
    font-size: 16px;
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
    font-size: 16px;
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

export default Footer;
