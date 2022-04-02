import styled from "styled-components";
import ForcastDays from "./ForcastDays";

const Container = styled.div`
  width: 100%;
  max-width: 30rem;
  margin: 0 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Forecast = ({ forecast }) => {
  const days = forecast.weatherForecast;

  console.log({ days });

  return (
    <>
      <Container className="card">
        {days.map((day) => (
          <ForcastDays {...day} key={day.weekday} />
        ))}
      </Container>
    </>
  );
};

export default Forecast;
