import styled from "styled-components";

const Container = styled.div`
  padding: 0 20px;
  margin: 0 5%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Card = ({ data }) => {
  return (
    <>
      <Container className="card">
        <div className="card-body">
          <h5 className="card-title">Title</h5>
          <p className="card-text">Some quick example text</p>
        </div>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text</p>
        </div>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text</p>
        </div>
      </Container>
    </>
  );
};

export default Card;
