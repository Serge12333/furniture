import styled from "styled-components";
import Clock from "../Main/clock.png";
import Sched from "../Main/schd.png";

const Inquiries = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 93.7%;
  padding: 19px 40px;
  background: #ffffff;
  border: 1px solid #f3eeee;
  box-shadow: 0px 20px 100px rgba(18, 24, 32, 0.05);
  border-radius: 10px;
  h4 {
    font-size: 22px;
    line-height: 26px;
    color: #3c4852;
    margin-bottom: 6px;
  }
  p {
    font-size: 15px;
    line-height: 24px;
    color: #8e8d8d;
    max-width: 520px;
  }
  img {
    max-width: 100%;
    width: auto;
    height: auto;
  }
  .date {
    font-size: 14px;
    line-height: 24px;
    color: #8e8d8d;
    margin: 0px;
    text-align: center;
  }
`;

const Holder = styled.div`
  display: flex;
  column-gap: 12px;
  align-items: center h5 {
    font-size: 16px;
    line-height: 24px;
    margin: 0px;
    margin-bottom: 0px;
  }
  p {
    font-size: 16px;
    line-height: 24px;
    margin: 0px;
  }
  img {
    align-self: center;
  }
`;

const Inquiry = (props) => {
  return (
    <Inquiries>
      <div>
        <h4>Название тикета</h4>
        <p>
          Maecenas vestibulum libero turpis, eu efficitur eros vehicula a. Duis
          fermentum fermentum tortor semper vulputate. Sed arcu est, tincidunt
          vel mi
        </p>
      </div>
      <div>
        <Holder>
          <img src={Clock} />
          <h5>{props.status}</h5>
        </Holder>
        <Holder>
          <img src={Sched} />
          <p>Дата запроса</p>
        </Holder>
        <p className="date">{props.date}</p>
      </div>
    </Inquiries>
  );
};

export default Inquiry;
