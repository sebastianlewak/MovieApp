import { Text } from "../components/Text";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  place-items: center;
  flex-direction: column;
  max-width: 800px;
  min-width: 400px;
  border-radius: 20px;
  margin: auto;
  margin-top: 200px;
  border: solid 2px ${(props) => props.theme.colorpalette["accent-dark"]};
  padding: 10px 10px;
`;

const Title = styled(Text)`
  margin-top: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 530px) {
    font-size: 30px;
  }
`;

const Information = styled(Text)`
  margin: 0 10px 10px 10px;
`;

export const About = () => {
  return (
    <Container>
      <Title variant="title" color="accent-dark">
        About
      </Title>
      <Information variant="medium">
        My application is a comprehensive tool for film and TV show enthusiasts,
        enabling them to discover new titles, browse information, search, and
        rate them. With our advanced system utilizing TheMovieDB API, you can
        access the most up-to-date and versatile database of movies and TV
        shows.
      </Information>
      <a
        href="https://github.com/sebastianlewak/MovieApp"
        target="_blank"
        style={{ textDecoration: "none" }}
        rel="noreferrer"
      >
        <Text variant="medium" color="accent-dark">
          Created by Owieczka
        </Text>
      </a>
    </Container>
  );
};
