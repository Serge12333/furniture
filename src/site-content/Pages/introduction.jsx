import React, { useState } from "react";
import styled from "styled-components";
import Sliderpic from "./../Content/introduction/main-slider.png";
import arrow from "./../Content/introduction/arrow.png";
import cup from "./../Content/introduction/cup.svg";
import tick from "./../Content/introduction/tick.svg";
import headphones from "./../Content/introduction/headphone.svg";
import box from "./../Content/introduction/box.svg";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./introduction.css";
import Modal from "./pop-up";
import AnimatedPage from "./AnimatedPage";

const Container = styled.div`
  width: 100%;
  background-image: linear-gradient(90deg, #f9f1e7 68%, #fcf8f3 60.5%);
  padding-top: 117px;
  margin-bottom: 104px;
  .slick-list {
    width: 92%;
  }
  .slidercontent {
    width: 62%;
    display: flex;
    justify-content: center;
  }
  .slider {
    background-repeat: no-repeat;
    padding: 335px 113px 46px 530px;
    margin-bottom: 150px;
    width: 80%;
    background-image: url(${Sliderpic});
    margin: 0 auto;
  }
  .innercontent {
    padding: 24px 105px 24px 24px;
    background: rgba(255, 255, 255, 0.72);
    backdrop-filter: blur(31px);
    display: inline-block;
    margin: 0px;
    margin-left: 80px;
    h5 {
      margin-top: 0px;
      font-size: 28px;
      line-height: 120%;
      color: #3a3a3a;
      margin-bottom: 4px;
    }
    p {
      font-size: 16px;
      line-height: 150%;
      display: inline-block;
      color: #616161;
    }
    h6 {
      font-size: 20px;
      line-height: 150%;
      color: #3A;
      margin: 0px;
      position: relative;
      &:after {
        position: absolute;
        top: 9px;
        left: 214px;
        cursor: pointer;
        content: "";
        height: 12px;
        width: 16px;
        background-image: url(${arrow});
        background-repeat: no-repeat;
      }
    }
  }
  .shop {
    position: absolute;
    top: 141px;
    left: 100px;
    z-index: 2;
    padding: 60px;
    background: rgba(255, 255, 255, 0.72);
    backdrop-filter: blur(31px);
    h2 {
      margin-top: 0px;
      font-weight: 700;
      font-size: 56px;
      line-height: 120%;
      color: #3a3a3a;
      margin-bottom: 16px;
      max-width: 374px;
    }
    p {
      font-weight: 500;
      font-size: 20px;
      line-height: 150%;
      color: #898989;
      max-width: 357px;
      margin-bottom: 48px;
    }
    a {
      background: #e89f71;
      display: block;
      text-align: center;
      width: 100%;
      padding: 24px 0;
      font-weight: 600;
      font-size: 20px;
      line-height: 150%;
      color: #ffffff;
      text-decoration: none;
      transition: 0.5s ease-in-out;
      &:hover {
        background: yellow;
        color: green;
      }
    }
  }
  .quality {
    padding-top: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Tags = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 0 auto;
  padding-bottom: 70px;
`;

const Badge = styled.div`
  display: flex;
  img {
    align-self: center;
    margin-right: 27px;
  }
  h4 {
    margin-bottom: 2px;
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    color: #3a3a3a;
    margin-top: 0px;
  }
  p {
    font-size: 16px;
    line-height: 150%;
    color: #898989;
    margin: 0px;
  }
`;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "-40px",
        left: "86%",
        background: "#E89F71",
        padding: "15px 17px 21px",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "-40px",
        left: "80%",
        background: "rgb(232, 159, 113, 0.3)",
        padding: "15px 17px 21px",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

const Intro = () => {
  const [modalActive, setModalActive] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    dotsClass: "dotscustom",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="grwrp">
      <AnimatedPage>
        <Container className="mainCont">
          <div className="quality">
            <div className="shop">
              <h2>High-Quality Furniture Just For You</h2>
              <p>
                Our furniture is made from selected and best quality materials
                that are suitable for your dream home
              </p>
              <a href="#" id="pickup" onClick={() => setModalActive(true)}>
                Shop Now
              </a>
            </div>
            <Slider {...settings} className="slidercontent">
              <div className="slider">
                <div className="innercontent">
                  <h5>Bohauss</h5>
                  <p>Luxury big sofa 2-seat</p>
                  <h6>Rp 17.000.000</h6>
                </div>
              </div>
              <div className="slider">
                <div className="innercontent">
                  <h5>Bohauss</h5>
                  <p>Luxury big sofa 2-seat</p>
                  <h6>Rp 17.000.000</h6>
                </div>
              </div>
              <div className="slider">
                <div className="innercontent">
                  <h5>Bohauss</h5>
                  <p>Luxury big sofa 2-seat</p>
                  <h6>Rp 17.000.000</h6>
                </div>
              </div>
            </Slider>
          </div>
        </Container>
        <Tags className="tags">
          <Badge>
            <img src={cup} />
            <div>
              <h4>High Quality</h4>
              <p>crafted from top materials</p>
            </div>
          </Badge>
          <Badge>
            <img src={tick} />
            <div>
              <h4>High Quality</h4>
              <p>crafted from top materials</p>
            </div>
          </Badge>
          <Badge>
            <img src={box} />
            <div>
              <h4>High Quality</h4>
              <p>crafted from top materials</p>
            </div>
          </Badge>
          <Badge>
            <img src={headphones} />
            <div>
              <h4>High Quality</h4>
              <p>crafted from top materials</p>
            </div>
          </Badge>
        </Tags>
        <Modal active={modalActive} setActive={setModalActive}></Modal>
      </AnimatedPage>
    </div>
  );
};

export default Intro;
