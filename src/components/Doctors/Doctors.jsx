import React from "react";
import Heder from "../Header/Heder";
import styled from "styled-components";
import Buttonclick from "./Button";
import imgDoctors1 from ".././../image/Group 337663.png";
import imgDoctors2 from ".././../image/Group 337660.png";
import imgDoctors3 from ".././../image/Group 337668.png";
// footer
import Croupimg from "../../image/Group 337943.png";
import Croupimg3 from "../../image/ant-design_phone-outlined.png";
import Croupimg4 from "../../image/ant-design_phone-outlined (1).png";
import Croupimg5 from "../../image/ant-design_phone-outlined (2).png";
import Croupimg6 from "../../image/Component 5.png";
import Croupimg7 from "../../image/Component 3.png";
import Croupimg8 from "../../image/Component 4.png";

const Doctors = () => {
  return (
    <>
      <Heder />
      <Div className="div"></Div>
      <section className="container">
        <Div_text className="div_text">
          <p className="p_1">
            Главная <span className="span_1"> Врачи</span>
          </p>
          <h2>
            Наши<span className="span_2"> врачи</span>
          </h2>
          <p>
            Попасть в команду медицинской клиники «Medical Clinic» могут <br />
            только лучшие специалисты с многолетней практикой и доказанным
            опытом.
          </p>
          <p>
            Мы развиваемся, учимся и оттачиваем мастерство, стажируемся в
            ведущих университетах <br />
            Европы, чтобы еще на шаг стать ближе к совершенству.
          </p>
        </Div_text>
        <h3 style={{ marginLeft: "60px", color: "#4D4E51" }}>Хирургия</h3>
        <section className="section">
          <div
            className="section_box"
            style={{
              display: "flex",
              gap: "50px",
              margin: "0 auto",
              marginLeft: "5%",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img src={imgDoctors1} alt="" />
              <b>Гаталуский Артур</b>
              <p
                style={{
                  fontFamily: " Manrope",
                  fontSize: "14px",
                  color: "#959595",
                }}
              >
                Врач-хирург
              </p>
              <Buttonclick label="Записаться на прием" />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img src={imgDoctors2} alt="" />
              <b>Манак Елена</b>
              <p
                style={{
                  fontFamily: " Manrope",
                  fontSize: "14px",
                  color: "#959595",
                }}
              >
                Врач-хирург
              </p>
              <Buttonclick label="Записаться на прием" />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img src={imgDoctors3} alt="" />
              <b>Мисник Елена</b>
              <p
                style={{
                  fontFamily: " Manrope",
                  fontSize: "14px",
                  color: "#959595",
                }}
              >
                Врач-хирург
              </p>
              <Buttonclick label="Записаться на прием" />
            </div>
          </div>
          s<h2 style={{ marginLeft: "5%", marginTop: "50px" }}>Кардиологи</h2>
          <div
            style={{
              display: "flex",
              gap: "50px",
              margin: "0 auto",
              marginLeft: "5%",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img src={imgDoctors1} alt="" />
              <b>Гаталуский Артур</b>
              <p
                style={{
                  fontFamily: " Manrope",
                  fontSize: "14px",
                  color: "#959595",
                }}
              >
                Врач-хирург
              </p>
              <Buttonclick label="Записаться на прием" />
            </div><div style={{ display: "flex", flexDirection: "column" }}>
              <img src={imgDoctors2} alt="" />
              <b>Манак Елена</b>
              <p>Врач-хирург</p>
              <Buttonclick label="Записаться на прием" />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img src={imgDoctors3} alt="" />
              <b>Мисник Елена</b>
              <p
                style={{
                  fontFamily: " Manrope",
                  fontSize: "14px",
                  color: "#959595",
                }}
              >
                Врач-хирург
                <Buttonclick label="Записаться на прием" />
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "50px",
              margin: "0 auto",
              marginLeft: "5%",
              marginTop: "50px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img src={imgDoctors2} alt="" />
              <b>Манак Елена</b>
              <p
                style={{
                  fontFamily: " Manrope",
                  fontSize: "14px",
                  color: "#959595",
                }}
              >
                Врач-хирург
              </p>
              <Buttonclick label="Записаться на прием" />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img src={imgDoctors3} alt="" />
              <b>Мисник Елена</b>
              <p>Врач-хирург</p>
              <Buttonclick label="Записаться на прием" />
            </div>
          </div>
          <h2 style={{ marginLeft: "5%", marginTop: "50px" }}>Онкология</h2>
          <div
            style={{
              display: "flex",
              gap: "50px",
              margin: "0 auto",
              marginLeft: "5%",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img src={imgDoctors1} alt="" />
              <b>Гаталуский Артур</b>
              <p
                style={{
                  fontFamily: " Manrope",
                  fontSize: "14px",
                  color: "#959595",
                }}
              >
                Врач-хирург
              </p>
              <Buttonclick label="Записаться на прием" />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img src={imgDoctors2} alt="" />
              <b>Манак Елена</b>
              <p
                style={{
                  fontFamily: " Manrope",
                  fontSize: "14px",
                  color: "#959595",
                }}
              >
                Врач-хирург
              </p>
              <Buttonclick label="Записаться на прием" />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img src={imgDoctors3} alt="" />
              <b>Мисник Елена</b>
              <p
                style={{
                  fontFamily: " Manrope",
                  fontSize: "14px",
                  color: "#959595",
                }}
              >
                Врач-хирург
              </p>
              <Buttonclick label="Записаться на прием" />
            </div>
          </div>
        </section>
        <p style={{ marginLeft: "30%", marginTop: "50px" }}>
          В нашей клинике работают: <b> более 30 специалистов</b>{" "}
          <a style={{ color: "#048741" }} href="">
            Показать больше
          </a>
        </p>
      </section>
      {/* footer */}
      <Container>
        <div className="container-footer">
          <footer className="content-footer-center">
            <div>
              <img src={Croupimg} alt="" />
              <h3 className="Medical-footer">Медицинская клиника «MedCheck»</h3>
              <p className="International-footer">
                Международная Медицинская клиника <br /> «MedCheck» — этоклиника, в которой применяются <br /> новейшие диагностические
                и лечебные технологии и <br /> ведут прием лучшие специалисты.
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
      </Container>
    </>
  );
};
const Div = styled.div`
  width: 1440px;
  height: 10px;
  background: #cce9da;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 40px;
`;
const Div_text = styled.div`
  margin-left: 60px;
  .p_1 {
    font-family: "Manrope";
    font-size: 15px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
    color: #959595;
  }
  .span_1 {
    font-family: "Manrope";
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
    color: #048741;
  }
  .span_2 {
    font-family: "Manrope";
    font-size: 29px;
    font-weight: 600;
    line-height: 49px;
    letter-spacing: 0em;
    color: #048741;
  }
`;
const Container = styled.div`
  width: 1440px;
  height: 494px;
  background: #212529;
  margin-top: 150px;.Medical-footer {
    color: #fff;
    font-family: Manrope;
    font-size: 16px;
  }
  .International-footer {
    color: #ccc;
    font-family: Manrope;
    font-size: 16px;
    width: 461px;
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

export default Doctors;