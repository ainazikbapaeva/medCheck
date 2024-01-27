import React from "react";
import { styled } from "styled-components";
import { description } from "../../utilis/Data";
import { descriptiontxt } from "../../utilis/Data";
import { descriptiontxt3 } from "../../utilis/Data";
import clinics from "../../image/Rectangle 391.png";
import clinicimages from "../../image/Rectangle 388.png";
import clinicDoctors from "../../image/Rectangle 392.png";
import doctopsimage from "../../image/Rectangle 393.png";
import navigatorlogo from "../../image/Vector.png";

const AboutMedCheck = () => {
  return (
    <AboutMed>
      <h1 className="AboutMedCheck">
        О нашей клинике <span>“MedCheck”</span>
      </h1>
      <Aboutcontainer>
        <StoryClinic>
          <p>{description}</p>
          <p>{descriptiontxt}</p>
          <p>{descriptiontxt3}</p>
          <div className="more-details">
            <span>Читать подробнее о клинике</span>
            <img src={navigatorlogo} alt="" />
          </div>
        </StoryClinic>
        <ClinicImages>
          <img src={clinics} alt="" />
          <div className="doctorsfoto">
            <img src={clinicimages} alt="" />
            <img src={clinicDoctors} alt="" />
            <img src={doctopsimage} alt="" />
          </div>
        </ClinicImages>
      </Aboutcontainer>
    </AboutMed>
  );
};
const AboutMed = styled.div`
  width: 1440px;
  margin: 0 auto;

  .AboutMedCheck {
    margin-left: 65px;
    margin-top: 150px;
    color: var(--Primary-black, #222);
    font-family: Manrope;
    font-size: 36px;
    font-weight: 600;
  }
  .AboutMedCheck span {
    color: var(--Primary-green, #048741);
    font-family: Manrope;
    font-size: 36px;
    font-weight: 600;
  }
`;
const Aboutcontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px;
`;
const StoryClinic = styled.div`
  width: 513px;
  color: var(--Primary-black-gray, #4d4e51);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Manrope;
  font-weight: 400;
  line-height: 160%;

  .more-details {
    color: var(--Primary-green, #048741);
    font-family: Manrope;
    font-weight: 400;
    margin-top: 60px;
    display: flex;
    align-items: center;
  }
  .more-details img {
    margin-left: 15px;
  }
`;
const ClinicImages = styled.div`
  margin-top: 50px;

  .doctorsfoto {
    display: flex;
    gap: 27px;
    margin-top: 15px;
  }
`;
export default AboutMedCheck;
