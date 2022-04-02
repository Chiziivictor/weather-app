import styled from "styled-components";
import { SearchOutlined } from "@material-ui/icons";
import { useState } from "react";

const SearchContainer = styled.form`
  display: flex;
  padding: 10px;
  width: 20rem;
  border-radius: 5px;
`;
const Search = styled.input`
  flex: 3;
  border: 0px;
  outline: none;
  background-color: inherit;
`;

const Form = ({ submitSearch }) => {
  const [location, setLocation] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!location || location === "") return;
    submitSearch(location);
  };

  return (
    <SearchContainer className="border border-primary" onSubmit={onSubmit}>
      <Search
        type="text"
        name="search"
        placeholder="Input Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />
      <button type="submit" className="btn btn-primary" onClick={onSubmit}>
        <SearchOutlined />
      </button>
    </SearchContainer>
  );
};

export default Form;
