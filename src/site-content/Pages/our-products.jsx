import React from "react";
import styled from "styled-components";
import Products from "./../Content/our-products/products.json";
import Products_add from "./../Content/our-products/products_add.json";
import share from "./../Content/our-products/share.png";
import like from "./../Content/our-products/Vector.png";
import "./our-products.css";
import AnimatedPage from "./AnimatedPage";

const MainWrapper = styled.div`
  margin: 0 auto;
  width: 75%;
  h4 {
    font-weight: 700;
    font-size: 40px;
    line-height: 120%;
    color: #3a3a3a;
    margin-bottom: 32px;
    text-align: center;
  }
  padding-bottom: 44px;
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
  grid-template-columns: repeat(4, 25%);
  justify-items: center;
  row-gap: 32px;
  margin-bottom: 32px;
  .card {
    background: #f4f5f7;
    position: relative;
    .paddin-gap {
      padding: 16px 31px 30px 16px;
    }
    h6 {
      font-weight: 600;
      font-size: 24px;
      line-height: 120%;
      color: #3a3a3a;
      margin: 0px;
      margin: 16px 0 8px;
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
      display: block;
    }
  }
`;

const OurProducts = () => {
  const [show, setShow] = React.useState(false);
  return (
    <AnimatedPage>
      <MainWrapper>
        <h4>Our products</h4>
        <Gridwrapper className="gridWrapper">
          {Products.map((data) => {
            return (
              <div className="card" key={data.id}>
                <img src={process.env.PUBLIC_URL + "/" + data.image} />
                <div className="paddin-gap">
                  <h6>{data.title}</h6>
                  <p className="descrp">{data.descrp}</p>
                  <div className="priceHolder">
                    <p className="price">{data.price}</p>
                    <p className="discount">{data.discount}</p>
                  </div>

                  <img
                    className="tag"
                    src={process.env.PUBLIC_URL + "/" + data.tag}
                  />
                </div>
                <div className="hoverBoard">
                  <a href="#" className="mainBtn">
                    Add to Cart
                  </a>
                  <div className="tweaks">
                    <div className="flex-wrapper">
                      <img src={share} />
                      <a href="#">Share</a>
                    </div>
                    <div className="flex-wrapper">
                      <img src={like} />
                      <a href="#">Share</a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Gridwrapper>
        {show ? (
          <Gridwrapper className="gridWrapper">
            {Products_add &&
              Products_add.map((data) => {
                return (
                  <div className="card" key={data.id}>
                    <img src={process.env.PUBLIC_URL + "/" + data.image} />
                    <div className="paddin-gap">
                      <h6>{data.title}</h6>
                      <p className="descrp">{data.descrp}</p>
                      <div className="priceHolder">
                        <p className="price">{data.price}</p>
                        <p className="discount">{data.discount}</p>
                      </div>

                      <img className="tag" src={process.env.PUBLIC_URL + "/" + data.tag} />
                    </div>
                    <div className="hoverBoard">
                      <a href="#" className="mainBtn">
                        Add to Cart
                      </a>
                      <div className="tweaks">
                        <div className="flex-wrapper">
                          <img src={share} />
                          <a href="#">Share</a>
                        </div>
                        <div className="flex-wrapper">
                          <img src={like} />
                          <a href="#">Share</a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Gridwrapper>
        ) : null}
        <div className="btnContainer">
          <a className="showMore" onClick={() => setShow(!show)}>
            Show more/less
          </a>
        </div>
      </MainWrapper>
    </AnimatedPage>
  );
};
export default OurProducts;
