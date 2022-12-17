import React from "react";
import styled from "styled-components";
import share from "./../Content/our-products/share.png";
import like from "./../Content/our-products/Vector.png";
import "./our-products.css";
import AnimatedPage from "./AnimatedPage";
import acc100 from "../Content/our-products/acc100.jpg";
import acc110 from "../Content/our-products/acc110.jpg";
import acc140 from "../Content/our-products/acc140.jpg";
import inv3 from "../Content/our-products/3.jpg";
import inv5 from "../Content/our-products/55.jpg";
import eas from "../Content/our-products/easun.jpg";

const MainWrapper = styled.div`
  margin: 0 auto;
  padding-top: 40px;
  width: 85%;
  h3 {
    font-weight: 700;
    font-size: 30px;
    line-height: 120%;
    color: orange;
    margin-bottom: 0px;
    text-align: center;
    margin-bottom: 20px;
  }
  h4 {
    font-weight: 700;
    font-size: 40px;
    line-height: 120%;
    color: #3a3a3a;
    margin-bottom: 0px;
    text-align: center;
  }
  padding-bottom: 0px;
  .btnContainer {
    text-align: center;
    a {
      align-self: center;
      padding: 12px 82px;
      background: #ffffff;
      border: 1px solid #e89f71;
      font-weight: 600;
      font-size: 16px;
      line-height: 150%;
      color: #e89f71;
      text-decoration: none;
      transition: 0.5s ease-in-out;
      cursor: pointer;
      &:hover {
        background: orange;
        color: white;
      }
    }
  }
`;

const Gridwrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33.3%);
  justify-items: center;
  gap: 32px;
  margin-bottom: 32px;
  .biginv {
    width: 87%;
    margin-bottom: 40px;
  }
  .eass {
    width: 87%;
    margin-bottom: 31px;
  }
  .card {
    .paddin-gap {
      padding: 0px 31px 30px 16px;
    }
    h6 {
      font-weight: 600;
      font-size: 24px;
      line-height: 120%;
      color: #3a3a3a;
      margin: 0px;
      margin: -15px 0 8px;
    }
    .descrp {
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      color: #898989;
      margin: 8px 0;
    }
    .priceHolder {
      display: flex;
      column-gap: 16px;
      align-items: center;
      .price {
        font-weight: 600;
        font-size: 20px;
        line-height: 150%;
        color: #3a3a3a;
      }
      .discount {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        text-decoration-line: line-through;
        color: #b0b0b0;
      }
    }
    .tag {
      position: absolute;
      left: 213px;
      top: 24px;
    }
    .hoverBoard {
      display: none;
      width: 100%;
      position: absolute;
      top: 0px;
      left: 0px;
      text-align: center;
      padding: 165px 0px 316px;
      background: rgba(58, 58, 58, 0.72);
      cursor: pointer;
      .mainBtn {
        padding: 12px 58px;
        align-self: center;
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
        color: #e89f71;
        background: #ffffff;
        margin-bottom: 24px;
        text-decoration: none;
        z-index: 1;
        transition: 0.5s ease-in-out;
        &:hover {
          background: orange;
          color: white;
        }
      }
      .tweaks {
        display: flex;
        justify-content: center;
        column-gap: 50px;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        top: 215px;
        .flex-wrapper {
          display: flex;
          align-tems: center;
          column-gap: 11px;
          a {
            font-weight: 600;
            font-size: 16px;
            line-height: 150%;
            color: #ffff;
            text-decoration: none;
          }
          img {
            align-self: center;
          }
        }
      }
    }
    &:hover .hoverBoard {
      display: none;
    }
  }
`;

const OurProducts = () => {
  return (
    <AnimatedPage>
      <MainWrapper>
        <h4>Товари</h4>
        <Gridwrapper className="gridWrapper">
          <div className="card">
            <img src={acc100} />
            <div className="paddin-gap">
              <h6>Аккумулятор Electronix 100 aH</h6>
              <p className="descrp">Ємність (Ah) 100</p>
              <p className="descrp">Струм 750A(EN)</p>
              <p className="descrp">Напруга 12 вольт</p>
              <p className="descrp">(ДxШxВ) 275 мм x 175 мм x 190 мм</p>
              <p className="descrp">Технологія Гелева</p>
              <p className="descrp">Плюс Справа</p>
              <p className="descrp">Клеми Круглі</p>
              <p className="descrp">Вага 21,5 кг</p>
              <p className="descrp">Макс напруга заряджання : 14,40 В</p>
              <p className="descrp">Мін напруга заряджання : 12,30 В</p>
              <div className="priceHolder">
                <p className="price">11 000 грн</p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={acc110} />
            <div className="paddin-gap">
              <h6>Аккумулятор Electronix 110 aH</h6>
              <p className="descrp">Ємність (Ah) 110</p>
              <p className="descrp">Струм 750A(EN)</p>
              <p className="descrp">Напруга 12 вольт</p>
              <p className="descrp">(ДxШxВ) 315 × 175 × 190 мм</p>
              <p className="descrp">Технологія Гелева</p>
              <p className="descrp">Плюс Справа</p>
              <p className="descrp">Клеми Круглі</p>
              <p className="descrp">Вага 24,3 кг</p>
              <p className="descrp">Макс напруга заряджання : 14,40 В</p>
              <p className="descrp">Мін напруга заряджання : 12,30 В</p>
              <div className="priceHolder">
                <p className="price">11 900 грн</p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={acc140} />
            <div className="paddin-gap">
              <h6>Аккумулятор Electronix 140 aH</h6>
              <p className="descrp">Ємність (Ah) 140</p>
              <p className="descrp">Струм 750A(EN)</p>
              <p className="descrp">Напруга 12 вольт</p>
              <p className="descrp">(ДxШxВ) 393 мм x 175 мм x 190 мм</p>
              <p className="descrp">Технологія Гелева</p>
              <p className="descrp">Плюс Справа</p>
              <p className="descrp">Клеми Круглі</p>
              <p className="descrp">Вага 31,0 кг</p>
              <p className="descrp">Макс напруга заряджання : 14,40 В</p>
              <p className="descrp">Мін напруга заряджання : 12,30 В</p>
              <div className="priceHolder">
                <p className="price">14 500 грн</p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={eas} className="eass" />
            <div className="paddin-gap">
              <h6>Інвертор EASUN 3000W DC 24V AC 220V</h6>
              <p className="descrp">Назва бренду EASUN</p>
              <p className="descrp">Режими роботи Перетворювачі DC/AC</p>
              <p className="descrp">Розмір 363X297X107</p>
              <p className="descrp">Частота на виході 50/60HZ</p>
              <p className="descrp">Вага 8 KG</p>
              <p className="descrp">Сертифікація RoHS</p>
              <p className="descrp">Потужність 3000W</p>
              <p className="descrp">Сила току зарядки 60A</p>
              <p className="descrp">Вольтаж 24V</p>
              <div className="priceHolder">
                <p className="price">28 000 грн</p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={inv3} />
            <div className="paddin-gap">
              <h6>Інвертор PowMr 3200W DC 24V AC 220V</h6>
              <p className="descrp">Назва бренду POWMR</p>
              <p className="descrp">Режими роботи Перетворювачі DC/AC</p>
              <p className="descrp">Розмір 348X270X95</p>
              <p className="descrp">Частота на виході 50/60HZ</p>
              <p className="descrp">Вага 5.4 KG</p>
              <p className="descrp">Сертифікація RoHS</p>
              <p className="descrp">Потужність 3200W</p>
              <p className="descrp">Сила току зарядки 80A</p>
              <p className="descrp">Вольтаж 24V</p>
              <div className="priceHolder">
                <p className="price">30 000 грн</p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={inv5} className="biginv" />
            <div className="paddin-gap">
              <h6>Інвертор PowMr 5500W DC 24V AC 220V</h6>
              <p className="descrp">Назва бренду POWMR</p>
              <p className="descrp">Режими роботи Перетворювачі DC/AC</p>
              <p className="descrp">Розмір 448x295x105</p>
              <p className="descrp">Частота на виході 50/60HZ</p>
              <p className="descrp">Вага 5.4 KG</p>
              <p className="descrp">Сертифікація RoHS</p>
              <p className="descrp">Потужність 5500W</p>
              <p className="descrp">Сила току зарядки 80A</p>
              <p className="descrp">Вольтаж 48V</p>
              <div className="priceHolder">
                <p className="price">39 000 грн</p>
              </div>
            </div>
          </div>
        </Gridwrapper>
        <h3>Замовлення за телефоном: 095 494 10 10</h3>
      </MainWrapper>
    </AnimatedPage>
  );
};
export default OurProducts;
