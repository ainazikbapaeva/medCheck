import React from "react";
import styled from "styled-components";
import { txt } from "../../utilis/Data";
import doctorimg from "../../image/Mask group.png";

const FirstSections = () => {
  return (
    <ParentalControl>
      <Container>
        <ContainerTxt>
          <h1 className="welcom">
            Добро пожаловать в <br />
            клинику MedCheck
          </h1>
          <p className="title">{txt}</p>
          <button className="application-btn">оставьте заявку</button>
        </ContainerTxt>
        <div>
          <img src={doctorimg} alt="" />
        </div>
      </Container>
      <Why>
        <h1 className="txtwhy">
          Почему <span>нас выбирают?</span>
        </h1>
      </Why>
      <Maincontainer>
        <BoxDiv>
          <span className="figure">1</span>
          <h4 className="professionalism">
            Высокий профессионализм <br />
            сотрудников
          </h4>
          <p className="medinfo">
            Медицинская лицензия, большой опыт врачей и постоянное повышение
            квалификации.
          </p>
        </BoxDiv>
        <BoxDiv>
          <span className="figure">2</span>
          <h4 className="professionalism">
            Наши пациенты - наши <br /> лучшие друзья
          </h4>
          <p className="medinfo">
            Все аппараты и медицинские препараты сертифицированы и
            лицензированы.
          </p>
        </BoxDiv>
        <BoxDiv>
          <span className="figure">3</span>
          <h4 className="professionalism">Комфортные условия</h4>
          <p className="medinfo">
            Уютная обстановка и отзывчивый персонал сделают поход в клинику
            максимально приятным.
          </p>
        </BoxDiv>
      </Maincontainer>
    </ParentalControl>
  );
};
const ParentalControl = styled.div`
  width: 1440px;
  margin: 0 auto;
`;
const Container = styled.div`
  width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;
`;
const ContainerTxt = styled.div`
  .title {
    width: 585px;
    color: #222;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Manrope;
    font-size: 18px;
    font-weight: 400;
    line-height: 130%; /* 23.4px */
  }
  .application-btn {
    border-radius: 24px;
    border: 1px solid var(--Primary-green, #048741);
    background: var(--Primary-white, #fff);
    width: 177px;
    height: 43px;
    padding: 8px 24px;
    color: var(--Primary-green, #048741);
    font-family: Manrope;
    text-transform: uppercase;
  }
  .welcom {
    font-family: Poppins;
    font-size: 48px;
    font-style: normal;
    font-weight: 900;
    line-height: 140%;
    background: var(
      --Primary-title-gradient,
      linear-gradient(90deg, #30cfd0 0%, #330867 100%)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
const Why = styled.div`
  .txtwhy {
    color: var(--Primary-black, #222);
    font-family: Manrope;
    font-size: 36px;
    font-weight: 600;
    margin-left: 60px;
    margin-top: 50px;
  }
  .txtwhy span {
    color: var(--Primary-green, #048741);
    font-family: Manrope;
    font-size: 36px;
    font-weight: 600;
  }
`;
const BoxDiv = styled.div`
  width: 389px;
  height: 280px;
  border-radius: 4px;
  background: var(--Tertiary-the-lightest-blue, #dbebff);

  .figure {
    color: var(--Primary-green, #048741);
    font-family: Manrope;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 25px;
  }
  .professionalism {
    color: #222;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    margin-left: 25px;
  }
  .medinfo {
    color: var(--Primary-black, #222);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    margin-left: 25px;
  }
`;
const Maincontainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
`;

export default FirstSections;
