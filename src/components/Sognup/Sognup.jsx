import React from "react";
import styled from "styled-components";
import framesognup from "../../image/Frame.png";
import culculsognupimg from "../../image/image 92.png";

const Sognup = () => {
  return (
    <Sognupstart>
      <img className="framesognup" src={framesognup} alt="" />
      <div className="songup-container">
        <span className="Registration-sognup">Регистрация</span>
        <div className="sognup-gap">
          <input className="text-sognup-number" type="text" placeholder="Имя" />
          <input
            className="text-sognup-number"
            type="text"
            placeholder="Фамилия"
          />
          <input
            className="text-sognup-number"
            type="number"
            placeholder="+996 (_ _ _) _ _  _ _  _ _ "
          />
          <input
            className="text-sognup-number"
            type="email"
            placeholder="Email"
          />
          <input
            className="text-sognup-number"
            type="password"
            placeholder="Введите пароль"
          />
          <input
            className="text-sognup-number"
            type="password"
            placeholder="Повторите пароль"
          />
        </div>
        <button className="sognup-btnm">создать аккаунт</button>
        <span className="or-sognup">или</span>
        <div className="backg-sognup">
          <img src={culculsognupimg} alt="" />
          Зарегистрироваться с Google
        </div>
        <p className="account-sognup-p">
          У вас уже есть аккаунт?
          <span className="account-sognup-span">Войти</span>
        </p>
      </div>
    </Sognupstart>
  );
};

const Sognupstart = styled.div`
  border-radius: 2px;
  background-color: aliceblue;
  width: 494px;
  height: 683px;
  margin-left: 690px;
  margin-top: 140px;

  .songup-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .framesognup {
    margin-left: 440px;
    margin-top: 20px;
  }

  .Registration-sognup {
    color: var(--Primary-black, #222);
    font-family: Manrope;
    font-size: 18px;
    text-transform: uppercase;
  }

  .text-sognup-number {
    border-radius: 8px;
    border: 1px solid var(--Secondary-disabled-btn, #d9d9d9);
    display: flex;
    width: 414px;
    padding: 10px 8px 10px 16px;
    align-items: center;
    gap: 10px;
    // border: none;
    outline: none;
    color: var(--Secondary-icon, #959595);
    font-family: Manrope;
    font-size: 16px;
    cursor: pointer;
  }

  .sognup-gap {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 30px;
  }

  .sognup-btnm {
    border-radius: 8px;
    background: var(
      --Primary-button-gradient,
      linear-gradient(181deg, #0cbb6b 0.45%, #027b44 99.39%)
    );
    display: flex;
    width: 414px;
    height: 47px;
    padding: 8px 20px;
    justify-content: center;
    align-items: center;
    gap: 529px;
    background-color: green;
    color: var(--Primary-white, #fff);
    font-family: Manrope;
    font-size: 14px;
    border: none;
    text-transform: uppercase;
    cursor: pointer;
    margin-top: 25px;
  }

  .or-sognup {
    color: var(--Primary-black, #222);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Manrope;
    font-size: 14px;
    line-height: 16px;
    margin-top: 20px;
  }

  .backg-sognup {
    border-radius: 8px;
    background: var(--Primary-background, #f5f5f5);
    width: 414px;
    height: 39px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 25px;
  }

  .account-sognup-p {
    color: var(--Primary-black, #222);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Manrope;
    font-size: 14px;
    margin-top: 40px;
    line-height: 16px;
  }

  .account-sognup-span {
    color: #346efb;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Manrope;
    font-size: 14px;
    margin-left: 5px;
    line-height: 16px;
  }
`;

export default Sognup;
