import styled from "styled-components";
import { Text } from "../components/Text";

const Container = styled.div`
  display: flex;
`;
const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px 0 10px;
`;

const Actor = styled.div`
  display: flex;
  margin: 5px 0 5px 0;
`;
const Character = styled.div`
  display: flex;
`;
const Img = styled.img`
  width: 120px;
  height: auto;
  border-radius: 10px;
`;

const Name = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 120px;
  width: 100%;
`;

export const Cast = ({ actors }) => {
  return (
    <Container>
      {actors.slice(0, 6).map((actor) => (
        <Information key={actor.credit_id}>
          <Img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} />

          <Actor>
            <Text variant="small" color="accent-dark">
              Actor:
            </Text>
            <Name variant="small">{actor.name}</Name>
          </Actor>

          <Character>
            <Text variant="small" color="accent-dark">
              Character:
            </Text>
            <Name variant="small">{actor.character}</Name>
          </Character>
        </Information>
      ))}
    </Container>
  );
};
