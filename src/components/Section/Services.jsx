import React from "react";
import { styled } from "styled-components";
import Vaccinationimg from "../../image/Gematologicheskoe_testirovanie 1.png";
import Cardiologyimg from "../../image/Kardiologiya 1.png";
import Neurologyimg from "../../image/Nevrologiya 1.png";
import Dermatologyimg from "../../image/Dermatologiya 1.png";
import Ophthalmologyimg from "../../image/Oftalmologiya 1.png";
import Therapyimg from "../../image/Terapiya 2.png";
import Physiotherapyimg from "../../image/Fizioterapiya 2.png";
import Oncologyimg from "../../image/Onkologiya 2.png";
import Urologyimg from "../../image/Urologiya 1.png";

const Services = () => {
  return (
    <Servic>
      <h1 className="txtwe">
        Наши<span> услуги</span>
      </h1>
      <p className="description">
        За все время работы клиника приняла более 1 млн. пациентов.
      </p>
      <Imgcontent>
        <div className="Vaccination">
          <div>
            <img src={Vaccinationimg} alt="" />
          </div>
          <span>Вакцинация</span>
        </div>

        <div className="Cardiology">
          <div>
            <img src={Cardiologyimg} alt="" />
          </div>
          <span>Кардиология</span>
        </div>

        <div className="Cardiology">
          <div>
            <img src={Neurologyimg} alt="" />
          </div>
          <span>Неврология</span>
        </div>
        <div className="Cardiology">
          <div>
            <img src={Dermatologyimg} alt="" />
          </div>
          <span>Дерматология</span>
        </div>
        <div className="Cardiology">
          <div>
            <img src={Ophthalmologyimg} alt="" />
          </div>
          <span>Офтальмология</span>
        </div>
        <div className="Cardiology">
          <div>
            <img src={Therapyimg} alt="" />
          </div>
          <span>Терапия</span>
        </div>
        <div className="Cardiology">
          <div>
            <img src={Physiotherapyimg} alt="" />
          </div>
          <span>Физиотерапия</span>
        </div>
        <div className="Cardiology">
          <div>
            <img src={Oncologyimg} alt="" />
          </div>
          <span>Онкология</span>
        </div>
        <div className="Cardiology">
          <div>
            <img src={Urologyimg} alt="" />
          </div>
          <span>Урология</span>
        </div>
      </Imgcontent>
      <MedSeeBtn className="serbtn">Смотреть все</MedSeeBtn>
    </Servic>
  );
};
const Servic = styled.div`
  width: 1440px;
  margin: 0 auto;

  .txtwe {
    color: var(--Primary-black, #222);
    font-family: Manrope;
    font-size: 36px;
    font-weight: 600;
    margin-left: 25px;
    margin-top: 150px;
  }
  .txtwe span {
    color: var(--Primary-green, #048741);
    font-family: Manrope;
    font-size: 36px;
    font-weight: 600;
  }
  .description {
    color: var(--Primary-black, #222);
    font-family: Manrope;
    font-size: 18px;
    font-weight: 400;
    margin-left: 25px;
  }
`;
const Imgcontent = styled.div`
  width: 1440px;
  height: 306px;
  margin: 0 auto;
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
  text-align: center;

  .Vaccination div {
    width: 102px;
    height: 106px;
    border-radius: 18px;
    background: var(
      --Primary-button-gradient,
      linear-gradient(181deg, #0cbb6b 0.45%, #027b44 99.39%)
    );
  }
  .Vaccination div img {
    margin-top: 20px;
    margin-left: 15px;
  }
  .Vaccination span {
    color: #000;
    font-family: Manrope;
    font-size: 16px;
    font-weight: 300;
  }
  .Cardiology div {
    width: 102px;
    height: 106px;
    border-radius: 18px;
    border: 1px solid #dedede;
    background: #fff;
  }
  .Cardiology div img {
    margin-top: 20px;
    margin-left: 15px;
  }
  .Cardiology span {
    color: #000;
    font-family: Manrope;
    font-size: 16px;
    font-weight: 300;
  }
`;
const MedSeeBtn = styled.button`
  padding: 10px 20px;
  margin-left: 645px;
  border-radius: 10px;
  border: 1px solid var(--Primary-green, #048741);
  color: var(--Primary-green, #048741);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Manrope;
  font-weight: 500;
`;
export default Services;
