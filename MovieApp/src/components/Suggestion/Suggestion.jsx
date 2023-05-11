import styled from "styled-components";
import { SuggestionCard } from "./SuggestionCard";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  margin-top: 50px;
`;

export const Suggestion = () => {
  const array = [...Array(6)];

  return (
    <Container>
      {array.map((_, index) => (
          <SuggestionCard key={index} />
      ))}
    </Container>
  );
};
