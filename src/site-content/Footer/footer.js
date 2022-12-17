import React from "react";
import styled from "styled-components";
import Funiro from "../Footer/logo.png";
import Map from "../Footer/map.png";
import Call from "../Footer/call.png";
import Envelop from "../Footer/envelope.png";
import "./footer.css";


const MainWrapper = styled.div`
  padding-bottom: 50px;
`;

const Container = styled.div`
  padding-top: 40px;
  width: 90%;
  border-top: 1px solid #d8d8d8;
  margin: 0 auto;
`;

const ContentHolder = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 80px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #616161;
    max-width: 100%;
    margin: 0;
  }
  a {
    text-decoration: none;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #616161;
    margin: 0;
    &:hover {
      text-decoration: underline;
    }
  }
  h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    margin: 0;
  }
  form {
    dipslay: flex;
    align-items: center;
    input {
      background: #f4f5f7;
      padding: 12px 12px;
      width: 242px;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: #828282;
      border: none;
      outline: none;
      margin-right: 4px;
      & ::placeholder {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #828282;
      }
    }
    button {
      border: none;
      outline: none;
      padding: 12px 15px 15px;
      background: #e89f71;
      cursor: pointer;
    }
  }
`;

const ContentSub = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10.08px;
`;

const Footer = () => {
  return (
    <MainWrapper className="mainwrp">
      <Container className="contfott">
        <ContentHolder className="contentHolder">
          <Column>
            <p>
             Продаємо інвертори та аккумулятори
            </p>
            <ContentSub>
              <img src={Map} />
              <p>Україна, м. Запоріжжя, вул. Східна 5а</p>
            </ContentSub>
            <ContentSub>
              <img src={Call} />
              <a href="tel: +380954941010">+38 (095) 494-10-10</a>
            </ContentSub>
            <a href="https://kozack-enegrgy.com.ua/">www.kozack-energy.com.ua</a>
          </Column>
        </ContentHolder>
      </Container>
    </MainWrapper>
  );
};

export default Footer;
