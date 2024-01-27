import React from "react";
import { styled } from "styled-components";
import photo from "../../image/image 26.png";
import photoEkaterina from "../../image/image 24.png";
import photoDmitry from "../../image/Exclude.png";
import photoEvgeniy from "../../image/image 16.png";
import photoElena from "../../image/image 15.png";

const Thebestdoctors = () => {
  return (
    <ContainerDoctors>
      <Titledoctors>
        <h1 className="best">
          Лучшие <span>врачи</span>
        </h1>
        <p className="doctors">
          Попасть в команду медицинской клиники «MedCheck» могут <br />
          только лучшие специалисты с многолетней практикой и доказанным опытом.
        </p>
      </Titledoctors>
      <TheDoctors>
        <div className="name">
          <div className="photoDoctors">
            <img src={photo} alt="photo" />
          </div>
          <div className="namedoctors">
            <span>Войнич Дарья</span>
            <p>Врач-терапевт</p>
          </div>
        </div>
        <div className="name">
          <div className="photoDoctors">
            <img src={photoEkaterina} alt="photo" />
          </div>
          <div className="namedoctors">
            <span>Мисько Екатерина</span>
            <p>Врач-Педиатр</p>
          </div>
        </div>
        <div className="name">
          <div className="photoDoctors">
            <img src={photoDmitry} alt="photo" />
          </div>
          <div className="namedoctors">
            <span>Дмитроченко Дмитрий</span>
            <p>Врач-уролог-андролог</p>
          </div>
        </div>
        <div className="name">
          <div className="photoDoctors">
            <img src={photoEvgeniy} alt="photo" />
          </div>
          <div className="namedoctors">
            <span>Антух Евгений</span>
            <p>Врач-невролог</p>
          </div>
        </div>
        <div className="name">
          <div className="photoDoctors">
            <img src={photoElena} alt="photo" />
          </div>
          <div className="namedoctors">
            <span>Мисник Елена</span>
            <p>Врач эндокринолог</p>
          </div>
        </div>
      </TheDoctors>
    </ContainerDoctors>
  );
};
const ContainerDoctors = styled.div`
  width: 1440px;
  margin: 0 auto;
`;
const Titledoctors = styled.div`
  .best {
    color: var(--Primary-black, #222);
    font-family: Manrope;
    font-size: 36px;
    margin-left: 55px;
  }
  .best span {
    color: var(--Primary-green, #048741);
    font-family: Manrope;
    font-size: 36px;
  }
  .doctors {
    color: var(--Primary-black, #222);
    font-family: Manrope;
    font-size: 18px;
    margin-left: 55px;
    font-weight: 400;
  }
`;
const TheDoctors = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  padding: 70px;

  .photoDoctors {
    background: var(
      --Secondary-Gradient,
      radial-gradient(56.73% 61.48% at 50.16% 55.3%, #fdfdfd 0%, #e4e7ee 100%)
    );
    width: 203px;
    height: 203px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .namedoctors {
    margin-left: 45px;
  }
  }
  .name div span {
    color: var(--Primary-black, #222);
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Manrope;
    font-weight: 500;
  }
  .name div p {
    color: var(--Secondary-icon, #959595);
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Manrope;
    font-size: 14px;
    font-weight: 500;
    text-aligin: center;
  }
`;
export default Thebestdoctors;
