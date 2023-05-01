import styled from "styled-components";
import { Text } from "../components/Text";

const Container = styled.div`
  display: grid;
  place-items: center;
`;

export const HomePage = () => {
  return (
    <Container>
      <Text variant="large" color="accent-dark">
        First
      </Text>
      <Text variant="medium" color="accent-light">
        Second
      </Text>
      <Text variant="small" color="primary-light">
        Third
      </Text>
    </Container>
  );
};
