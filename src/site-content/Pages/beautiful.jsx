import React from "react";
import styled from "styled-components";
import share from "./../Content/our-products/share.png";
import like from "./../Content/our-products/Vector.png";
import "./our-products.css";
import AnimatedPage from "./AnimatedPage";
import basic from "../Content/our-products/basic.jpg";
import pro from "../Content/our-products/pro.jpg";
import blackout from "../Content/our-products/blackout.jpg";

const MainWrapper = styled.div`
  padding-top: 40px;
  margin: 0 auto;
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
    margin-bottom: 50px;
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
  margin: 0 auto
  margin-bottom: 32px;
  .biginv {
    width: 87%;
    margin-bottom: 40px;
  }
  .eass {
    width: 87%;
    margin-bottom: 31px;
  }
  .blackoutt{
    width:87%;
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
      margin: 40px 0 8px;
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
        <h4>Набори</h4>
        <Gridwrapper className="gridWrapper">
          <div className="card">
            <img src={basic} />
            <div className="paddin-gap">
              <h6 className="marg">Набір Basic</h6>
              <p className="descrp">
                Час роботи при нагрузці 100 ватт: 23.5 год.
              </p>
              <p className="descrp">Ємність аккумулятора (Ah) 100</p>
              <p className="descrp">Тип аккумулятора Гель</p>
              <p className="descrp">Підключення аккумуляторів послідовне</p>
              <p className="descrp">Кількість аккумуляторів 2 шт</p>
              <p className="descrp">Вольтаж 24V</p>
              <p className="descrp">Потужність акумуляторів 2400 Ватт</p>
              <p className="descrp">Інвертор EASUN 3000W</p>
              <p className="descrp">Потужність інвертора 3kw</p>
              <div className="priceHolder">
                <p className="price">48 500 грн</p>
                <p className="discount">50 000 грн</p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={pro} />
            <div className="paddin-gap">
              <h6 className="marg">Набір Pro</h6>
              <p className="descrp">
                Час роботи при нагрузці 100 ватт: 26 год.
              </p>
              <p className="descrp">Ємність аккумулятора (Ah) 110</p>
              <p className="descrp">Тип аккумулятора Гель</p>
              <p className="descrp">Підключення аккумуляторів послідовне</p>
              <p className="descrp">Кількість аккумуляторів 2 шт</p>
              <p className="descrp">Вольтаж 24V</p>
              <p className="descrp">Потужність акумуляторів 2640 Ватт</p>
              <p className="descrp">Інвертор PowMr 3200W</p>
              <p className="descrp">Потужність інвертора 3kw</p>
              <div className="priceHolder">
                <p className="price">51 110 грн</p>
                <p className="discount">53 800 грн</p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={blackout} className="blackoutt" />
            <div className="paddin-gap">
              <h6 className="marg">Набір Blackout</h6>
              <p className="descrp">
                Час роботи при нагрузці 100 ватт: 67 год.
              </p>
              <p className="descrp">Ємність аккумулятора (Ah) 140</p>
              <p className="descrp">Тип аккумулятора Гель</p>
              <p className="descrp">Підключення аккумуляторів послідовне</p>
              <p className="descrp">Кількість аккумуляторів 4 шт</p>
              <p className="descrp">Вольтаж 48V</p>
              <p className="descrp">Потужність акумуляторів 6720 Ватт</p>
              <p className="descrp">Інвертор EASUN 3000W</p>
              <p className="descrp">Потужність інвертора 3kw</p>
              <div className="priceHolder">
                <p className="price">92 150 грн</p>
                <p className="discount">97 000 грн</p>
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
