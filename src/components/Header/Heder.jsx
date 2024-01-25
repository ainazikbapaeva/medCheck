import React from "react";
import styled from "styled-components";
import imgHeader_1 from ".././../image/GeoPoint.png";
import imgHeader_2 from "./../../image/Vector (2).png";
import imgHeader_3 from ".//.././../image/System.png";
import imgHeader_4 from "./.././../image/Component 47 (2).png";
import imgHeader_5 from "./.././../image/Component 47 (1).png";
import imgHeader_6 from "./.././../image/Component 47.png";
import imgHeader_7 from "./../../image/Vector (3).png";
import imgHeader_8 from ".././../image/Profile.png";
import imgHeader_9 from "./../../image/Line 31.png";
import imgHeader_10 from "../././../image/Vector (4).png";
const Heder = () => {
  return (
    <>
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
        <div>
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
  
    </>
  );
};
const Header_start = styled.header`
#{
  max-width: 1400px;
}
  display: flex;
  justify-content: space-around;

  .search-from {
    border: 0px solid;
    display: inline-flex;
    padding: 0 20px;
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
    justify-content: space-around;
    gap: 20px;
    margin-top: 30px;
  .med {
    display: flex;
    margin-top: -20px;
    gap: 10px;
  }
  .med span {
    color: #009344;
  }
  a {
    text-decoration: none;
    color: #222222;
    margin: 0px 10px;
  }
  .button_med {
    width: 205px;
    height: 43px;
    padding: 8px, 20px, 8px, 20px;
    border-radius: 24px;
    border: 1px solid #009344;
    background: #ffffff;
    color: #009344;
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
  }
`;


export default Heder;
