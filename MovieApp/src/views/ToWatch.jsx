import styled from "styled-components";
import { Suggestion } from "../components/Suggestion/Suggestion";
import { Text } from "../components/Text";


const Container = styled.div`
  display: grid;
`;

export const ToWatch = () => {

  return (
    <Container>
      <Text variant="large" color="accent-dark">
        To Watch
      </Text>
        <Suggestion />
    </Container>
  );
};
