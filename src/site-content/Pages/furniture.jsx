import React from "react";
import styled from "styled-components";
import first from "../Content/furniture/first.png";
import second from "../Content/furniture/second.png";
import third from "../Content/furniture/third.png";
import forth from "../Content/furniture/forth.png";
import fifth from "../Content/furniture/fifth.png";
import sixth from "../Content/furniture/sixth.png";
import eight from "../Content/furniture/eight.png";
import ninth from "../Content/furniture/ninth.png";
import tenth from "../Content/furniture/tent.png";
import { Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox.css";
import { useEffect } from "react";
import "./furniture.css";
import AnimatedPage from "./AnimatedPage";


function Fancybox(props) {
  const delegate = props.delegate || "[data-fancybox]";

  useEffect(() => {
    const opts = props.options || {};

    NativeFancybox.bind(delegate, opts);

    return () => {
      NativeFancybox.destroy();
    };
  }, []);

  return <>{props.children}</>;
}

const MainWrapper = styled.div`
  padding-bottom: 87px;
`;

const Container = styled.div`
  padding-top: 60px;
  width: 100%;
  text-align: center;
  h4 {
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    color: #616161;
    margin: 0;
    margin-bottom: 8px;
  }
  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 120%;
    color: #3a3a3a;
    margin: 0;
  }
`;

const Imageholder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-beetween;
  & :nth-child(3) {
    margin-right: 2.8%;
  }
`;

const Grid = styled.div`
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  & :nth-child(3) {
    margin-top: 30px;
  }
  & :nth-child(odd) {
    margin-right: 30px;
  }
  & :nth-child(even) {
    margin-right: -30px;
  }
  .last-first {
    margin-bottom: 80px;
  }
  .last-second {
    margin-bottom: 46px;
  }
`;

const Central = styled.div`
  img {
    width: 600px;
    height: 480px;
  }
`;

const Photos = () => {
  return (
    <AnimatedPage>
      <MainWrapper className="mainwrpfr">
        <Container>
          <h4>Share your setup with</h4>
          <h3 className="titlefnr">#FuniroFurniture</h3>
          <Imageholder className="imgholder">
            <Grid className="imggrid">
              <a data-fancybox="gallery" data-src={first}>
                <img src={first} alt="first" />
              </a>
              <a data-fancybox="gallery" data-src={second}>
                <img src={second} alt="first" className="resize" />
              </a>
              <a data-fancybox="gallery" data-src={sixth}>
                <img src={sixth} alt="first" />
              </a>
              <a data-fancybox="gallery" data-src={eight}>
                <img src={eight} alt="first" className="last-first resize" />
              </a>
            </Grid>
            <Central>
              <a data-fancybox="gallery" data-src={third}>
                <img src={third} alt="third" className="resize bg-resize" />
              </a>
            </Central>
            <Grid className="imggrid">
              <a data-fancybox="gallery" data-src={forth}>
                <img src={forth} alt="first" />
              </a>
              <a data-fancybox="gallery" data-src={fifth}>
                <img src={fifth} alt="first" />
              </a>
              <a data-fancybox="gallery" data-src={ninth}>
                <img src={ninth} alt="first" />
              </a>
              <a data-fancybox="gallery" data-src={tenth}>
                <img src={tenth} alt="first" className="last-second" />
              </a>
            </Grid>
          </Imageholder>
        </Container>
      </MainWrapper>
    </AnimatedPage>
  );
};
export default Photos;
