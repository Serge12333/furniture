import React from "react";
import Tips from "../Content/tips/tips.json";
import styled from "styled-components";
import "./tips.css";
import AnimatedPage from "./AnimatedPage";

const MainWrapper = styled.div`
  padding: 44px 0;
`;

const Container = styled.div`
  width: 90%;
  position: relative;
  text-align: center;
  margin: 0 auto;
  h2 {
    font-weight: 700;
    font-size: 40px;
    line-height: 120%;
    color: #3a3a3a;
    margin: 0;
    margin-bottom: 32px;
  }
  .slider {
    display: flex;
    justify-content: center;
    column-gap: 42px;
    cursor: pointer;
    .card {
      text-align: left;
      transition: 0.5s ease-in-out;
      .contentHolder {
        padding: 16px 0px 16px 16px;
        h4 {
          font-weight: 600;
          font-size: 24px;
          line-height: 120%;
          color: #3a3a3a;
          margin: 0px;
          margin-bottom: 8px;
          max-width: 340px;
        }
        p {
          font-weight: 400;
          font-size: 14px;
          line-height: 150%;
          color: #898989;
          margin: 0px;
        }
      }
      &:hover {
        -webkit-box-shadow: 5px 19px 15px -7px rgba(0, 0, 0, 0.66);
        box-shadow: 5px 19px 15px -7px rgba(0, 0, 0, 0.66);
      }
      &:first-child h4 {
        max-width: 247px;
      }
    }
  }
`;

const Tipsinf = () => {
  return (
    <AnimatedPage>
      <MainWrapper className="mainwrptps">
        <Container>
          <h2>Tips and Tricks</h2>
          <div className="slider slider_resp">
            {Tips.map((data) => {
              return (
                <div className="card" key={data.id}>
                  <img src={process.env.PUBLIC_URL + "/" + data.image} />
                  <div className="contentHolder">
                    <h4>{data.title}</h4>
                    <p>{data.descrp}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </MainWrapper>
    </AnimatedPage>
  );
};
export default Tipsinf;
