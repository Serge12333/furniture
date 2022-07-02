import React from "react";
import styled from "styled-components";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./styles.css";

const MyOwlCarousel324r = () => {
  const options = {
    loop: true,
    margin: 10,
    items: 1,
    autoplay: true,
  };
  return (
    <OwlCarousel className="owl-theme" {...options}>
      <div class="item">
        asd
      </div>
      <div class="item">
        asd
      </div>
      <div class="item">
        asd
      </div>
      <div class="item">
       gs
      </div>
      <div class="item">
        gsr
      </div>
    </OwlCarousel>
  );
};
export default MyOwlCarousel324r;
