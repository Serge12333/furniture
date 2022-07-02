import React from "react";
import styled from "styled-components";
import Funiro from "../Footer/Funiro.png";
import Map from "../Footer/map.png";
import Call from "../Footer/call.png";
import Envelop from "../Footer/envelope.png";
import "./footer.css";


const MainWrapper = styled.div`
  padding-bottom: 50px;
`;

const Container = styled.div`
  padding-top: 80px;
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
    max-width: 249px;
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
            <a href="#">
              <img src={Funiro} />
            </a>
            <p>
              Worldwide furniture store since 2020. We sell over 1000+ branded
              products on our website
            </p>
            <ContentSub>
              <img src={Map} />
              <p>Sawojajar Malang, Indonesia</p>
            </ContentSub>
            <ContentSub>
              <img src={Call} />
              <a href="tel: +6289 456 3455">+6289 456 3455</a>
            </ContentSub>
            <a href="https://www.funiro.com/">www.funiro.com</a>
          </Column>
          <Column>
            <h4>Menu</h4>
            <a href="#">Products</a>
            <a href="#">Rooms</a>
            <a href="#">Inspirations</a>
            <a href="#">About us</a>
            <a href="#">Terms and policy</a>
          </Column>
          <Column>
            <h4>Account</h4>
            <a href="#">My account</a>
            <a href="#">Checkout</a>
            <a href="#">My Cart</a>
            <a href="#">My catalog</a>
          </Column>
          <Column>
            <h4>Stay Connected</h4>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </Column>
          <Column>
            <h4>Stay Updated</h4>
            <form>
              <input type="text" placeholder="Enter your email"></input>
              <button>
                <img src={Envelop} />
              </button>
            </form>
          </Column>
        </ContentHolder>
      </Container>
    </MainWrapper>
  );
};

export default Footer;
