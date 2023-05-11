import styled from "styled-components";
import { StarIcon } from "../../assets/Icons/StarIcon";
import { Text } from "../Text";
import { Link, generatePath } from "react-router-dom";
import { routes } from "../../config/routes";

const Container = styled(Link)`
  display: grid;
  grid-template-columns: 40px min-content 1fr min-content;
  place-items: center;
  max-width: 1000px;
  width: 100%;
  border: solid 1px ${(props) => props.theme.colorpalette["primary-light"]};
  border-radius: 20px;
  margin: 10px 0 10px 0;
  padding: 10px 30px;
  column-gap: 10px;
  text-decoration: none;
`;

const Title = styled.div`
  display: grid;
  justify-self: start;
  row-gap: 10px;
  margin-left: 10px;
`;

const Ranking = styled.div`
  display: grid;
  place-items: center;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
`;

const Img = styled.img`
  height: 140px;
  width: auto;
  margin: 0 20px 0 20px;
  border-radius: 10px;
`;

export const RankingList = ({ movies, tvShows }) => {
  const media = movies ?? tvShows;

  if (!media) {
    return <>loading</>;
  }

  const mediaList = media.flatMap((data) => data.results);

  return (
    <>
      {mediaList.map((media, index) => (
        <Container
          to={generatePath(routes.moreinfo, {
            type: media.media_type === "movie" ? "movie" : "tv",
            id: media.id,
          })}
          key={media.id}
        >
          <Text variant="large">{index + 1}</Text>
          <Img src={`https://image.tmdb.org/t/p/w500/${media.poster_path}`} />
          <Title>
            <Text
              variant="subtitle"
              style={{ overflow: "hidden", textOverflow: "ellipsis" }}
            >
              {media.title || media.name}
            </Text>
          </Title>

          <Ranking>
            <Rating>
              <StarIcon size="48" />
              <Text variant="large">{media.vote_average}</Text>
            </Rating>
            <Text variant="small">Votes: {media.vote_count}</Text>
          </Ranking>
        </Container>
      ))}
    </>
  );
};
