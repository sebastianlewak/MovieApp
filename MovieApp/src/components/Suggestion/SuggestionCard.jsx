import styled from "styled-components";
import { BookMarkIcon } from "../../assets/Icons/BookmarkIcon";
import interstellar from "../../assets/interstellar.jpg";
import { Text } from "../Text";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: grid;
  place-items: center;
  margin: 0 20px 0 20px;
`;

const Card = styled.div`
  max-width: 200px;
  max-height: 300px;
  width: 100%;
  height: 100%;
  border: solid 2px ${(props) => props.theme.colorpalette["accent-light"]};
  position: relative;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`;

export const SuggestionCard = () => {
  return (
    <Container>
      <Link to="/moreinfo">
        <Card>
          <BookMarkIcon />
          <Img src={interstellar} />
        </Card>
      </Link>
      <Text variant="medium" style={{ marginTop: "10px" }}>
        Interstellar
      </Text>
    </Container>
  );
};
