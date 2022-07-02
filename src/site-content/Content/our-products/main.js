import React from "react";
import styled from "styled-components";
import Inquiry from "./inq";
import Arrow from "../Main/arrow.png";

const Mained = styled.div`
  background-color: rgb(178, 213, 207);
  padding: 72px 0 82px;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 63%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 14px;
`;

const Support = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 39px;
  h5 {
    font-size: 30px;
    line-height: 36px;
    color: #3c4852;
    margin: 0px;
  }
  a {
    font-size: 18px;
    line-height: 22px;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: #3c4852;
    position: relative;
    text-decoration: none;
    padding: 18px 57px 18px 26px;
    border: 1px solid #fff;
    border-radius: 10px;
    &:after {
      content: "";
      width: 17px;
      height: 17px;
      position: absolute;
      top: 41%;
      left: 170px;
      background-image: url(${Arrow});
      background-repeat: no-repeat;
    }
  }
`;

const Main = () => {
  return (
    <Mained>
      <Container>
        <Support>
          <h5>Поддержка</h5>
          <a href="#">Создать тикет</a>
        </Support>
        <Inquiry status="Olga" date="11.06.2022" />
        <Inquiry status="Serhii" date="12.06.2022" />
        <Inquiry status="Oleg" date="13.06.2022" />
        <Inquiry status="Oksana" date="14.06.2022" />
        <Inquiry status="Petr" date="15.06.2022" />
      </Container>
    </Mained>
  );
};

export default Main;
