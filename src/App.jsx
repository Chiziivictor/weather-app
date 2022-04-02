import React from "react";
import styled from "styled-components";
import Form from "./components/Form";
import useForecast from "./useForecast";
import Loading from "./components/Loading";
import { Cached, Error } from "@material-ui/icons";
import Forecast from "./components/Forecast";

const Container = styled.div`
  padding: 20px;
  margin: 25px 10%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: inherit;
`;
const Title = styled.h2`
  align-self: center;
  margin-bottom: 5%;
`;
const Footer = styled.footer`
  padding: 14px;
`;

const App = () => {
  const { isError, isLoading, forecast, submitRequest } = useForecast();

  const onSubmit = (value) => {
    submitRequest(value);
  };

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <>
      <Container>
        <Title>Weather Forecast</Title>
        {!forecast && (
          <Wrapper>
            {!isLoading && <Form submitSearch={onSubmit} />}
            {isError && <Error />}
            {isLoading && <Loading />}
          </Wrapper>
        )}
        {forecast && (
          <>
            <button
              className="btn btn-primary"
              style={{ marginBottom: "5%" }}
              onClick={reloadPage}
            >
              <Cached />
            </button>
            <Forecast forecast={forecast} />
          </>
        )}
      </Container>
      <Footer className="text-center text-muted">
        {" "}
        © {new Date().getFullYear()} Chizi Victor
      </Footer>
    </>
  );
};

export default App;

// const [search, setSearch] = useState("lagos");
// const [data, setData] = useState("");
// let componentMounted = true;

// useEffect(() => {
//   const getWeather = async (id) => {
//     if (componentMounted) {
//       const base = "http://dataservice.accuweather.com/currentconditions/v1/";
//       const query = `${id}?apikey=xYKKVGvZriPHd03UdTSnlAtrYy5HgrqC`;

//       const response = await fetch(base + query);
//       setData(await response.json());
//     }

//     return data[0];
//   };

//   const getCity = async () => {
//     if (componentMounted) {
//       const base =
//         "http://dataservice.accuweather.com/locations/v1/cities/search";
//       const query = `?apikey=xYKKVGvZriPHd03UdTSnlAtrYy5HgrqC&q=${search}`;

//       const response = await fetch(base + query);
//       setData(await response.json());
//     }

//     console.log(data[0]);
//     return data[0];
//   };

//   if (componentMounted) {
//     getCity()
//       .then((data) => {
//         console.log(data);
//       })
//       .then((data) => {
//         getWeather(data.Key);
//       })
//       .catch((err) => console.log(err));
//   }

//   componentMounted = false;
// }, []);

// useEffect(() => console.log({ data: data[0] }), [data]);
