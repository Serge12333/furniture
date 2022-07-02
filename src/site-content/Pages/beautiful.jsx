import React from "react";
import styled from "styled-components";
import Peace from "../Content/beautiful/pictures.png";
import Sliderpic from "../Content/beautiful/slider-main.png";
import Arrow from "../Content/beautiful/arrow.png";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./beautiful.css";
import AnimatedPage from "./AnimatedPage";

const Mainwrapper = styled.div`
  background-image: linear-gradient(90deg, #f9f1e7 68%, #fcf8f3 60.5%);
  padding: 44px 0 70px;
  margin-bottom: 50px;
`;

const Container = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
`;

const Content = styled.div`
  margin-right: 86px;
  h2 {
    max-width: 378px;
    font-weight: 700;
    font-size: 40px;
    line-height: 120%;
    color: #3a3a3a;
    margin: 0px;
    margin-bottom: 8px;
  }
  p {
    max-width: 368px;
    ont-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #616161;
    margin: 0px;
    margin-bottom: 24px;
  }
  a {
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: #ffffff;
    padding: 12px 40px;
    background: #e89f71;
    transition: 0.5s ease-in-out;
    &:hover {
      background: yellow;
      color: grey;
    }
  }
`;

const InnerPeace = styled.div`
  display: flex;
  align-items: flex-start;
  column-gap: 24px;
  width: 60%;
  position: relative;
  .sliderBeau {
    width: 40%;
  }
  a {
    padding: 18px 15px;
    background: #e89f71;
    alig-self: center;
    position: absolute;
    top: 504px;
    left: 240px;
    transition: 0.5s ease-in-out;
    &:hover {
      background: grey;
    }
  }
  .mainbox {
    position: absolute;
    top: 428px;
    left: 24px;
    background: rgba(255, 255, 255, 0.72);
    backdrop-filter: blur(3px);
    padding: 32px;
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      color: #616161;
      margin: 0;
      margin-bottom: 8px;
    }
    h4 {
      font-weight: 600;
      font-size: 28px;
      line-height: 120%;
      color: #3a3a3a;
      margin: 0px;
    }
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
        top: "220px",
        left: "92%",
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
        display: "none",
      }}
      onClick={onClick}
    />
  );
}

const Beau = () => {
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
        <Mainwrapper>
          <Container className="containerBeau">
            <Content className="mncotn">
              <h2>50+ Beautiful rooms inspiration</h2>
              <p>
                Our designer already made a lot of beautiful prototipe of rooms
                that inspire you
              </p>
              <a href="#">Explore More</a>
            </Content>
            <InnerPeace className="innerpeace">
              <div>
                <img src={Peace} alt="peace" />
                <div className="mainbox">
                  <div className="contentHolder">
                    <p>01 Bedroom</p>
                    <h4 href="#">Inner Peace</h4>
                  </div>
                </div>
                <a href="#" className="arrow">
                  <img src={Arrow} alt="arrow" />
                </a>
              </div>
              <Slider {...settings} className="sliderBeau">
                <img src={Sliderpic} alt="sl" className="sliderpic12" />
                <img src={Sliderpic} alt="sl" className="sliderpic12" />
                <img src={Sliderpic} alt="sl" className="sliderpic12" />
                <img src={Sliderpic} alt="sl" className="sliderpic12" />
              </Slider>
            </InnerPeace>
          </Container>
        </Mainwrapper>
      </AnimatedPage>
    </div>
  );
};
export default Beau;
