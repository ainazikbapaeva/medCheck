import React from "react";
import styled from "styled-components";
import imagesn from "../../image/Frame.png";
import culcul from "../../image/image 90.png";

const Sognin = () => {
  return (
    <>
      <SogninVoiti>
        <img className="src-img-center" src={imagesn} alt="" />
        <div className="container-soghin-div">
          <div className="container-sogn-top">
            <span className="Tocomein-span">Войти</span>
            <input
              className="plecholder-input-sogn"
              type="text"
              placeholder="Логин"
            />
            <input
              className="plecholder-input-sogn"
              type="text"
              placeholder="Пароль"
            />
          </div>
          <div>
            <button className="btn-ccontainer-btn">Войти</button>
            <button className="paroli-sogn">Забыли пароль?</button>
          </div>
          <hr className="hrs-center" />
          <span className="or-span">или</span>
          <div className="culkul-img">
            <img src={culcul} alt="" />
            Продолжить с Google
          </div>
          <p className="account-p">
            Нет аккаунта?{" "}
            <span className="account-span">Зарегистрироваться</span>
          </p>
        </div>
      </SogninVoiti>
    </>
  );
};

const SogninVoiti = styled.div`
  background-color: aliceblue;
  width: 494px;
  height: 511px;

  .src-img-center {
    margin-left: 410px;
    margin-top: 30px;
  }

  .Tocomein-span {
    color: var(--Primary-black, #222);
    font-family: Manrope;
    font-size: 18px;
    margin-left: 180px;
    text-transform: uppercase;
  }

  .plecholder-input-sogn {
    display: flex;
    width: 414px;
    padding: 10px 8px 10px 16px;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    border: 1px solid var(--Secondary-disabled-btn, #d9d9d9);
    outline: none;
    color: var(--Secondary-icon, #959595);
    font-family: Manrope;
    font-size: 16px;
    margin-top: 20px;
  }

  .container-soghin-div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
  }

  .btn-ccontainer-btn {
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
    border: none;
    color: var(--Primary-white, #fff);
    font-family: Manrope;
    font-size: 14px;
    text-transform: uppercase;
  }

  a {
    text-decoration: none;
  }

  .paroli-sogn {
    display: inline-flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: none;
    margin-left: 150px;
    color: var(--Tertiary-blue, #346efb);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Manrope;
    font-size: 16px;
    margin-top: 20px;
    line-height: 16px;
  }

  .hrs-center {
    width: 344px;
    height: 1px;
    background: #f3f1f1;
    border: none;
  }

  .or-span {
    position: relative;
    bottom: 49px;
  }

  .culkul-img {
    border-radius: 8px;
    background: var(--Primary-background, #f5f5f5);
    width: 414px;
    height: 39px;
    color: var(--Primary-black, #222);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Manrope;
    font-size: 16px;
    line-height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    position: relative;
    bottom: 50px;
  }

  .account-p {
    color: var(--Primary-black, #222);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Manrope;
    font-size: 14px;
    line-height: 16px;
    position: relative;
    bottom: 70px;
  }

  .account-span {
    color: var(--Tertiary-blue, #346efb);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Manrope;
    font-size: 14px;
    line-height: 16px;
  }
`;

export default Sognin;
