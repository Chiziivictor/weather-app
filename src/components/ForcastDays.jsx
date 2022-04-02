import React from "react";
import styled from "styled-components";

const List = styled.li`
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;
  width: inherit;
`;
const Day = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Desc = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ForcastDays = ({ weekday, date, temp, desc }) => (
  <List className="card-body border border-secondary">
    <Day>
      <h5 className="card-title">{weekday}</h5>
      <p className="card-text">{date}</p>
    </Day>
    <Desc>
      <p className="card-text">{temp} °F</p>
      <p className="card-text" style={{ fontSize: "12px" }}>
        {desc}
      </p>
    </Desc>
  </List>
);
export default ForcastDays;
