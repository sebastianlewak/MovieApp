import styled from "styled-components";
import { StarIcon } from "../assets/Icons/StarIcon";
import { Link as RouterLink, useParams } from "react-router-dom";
import { Text } from "../components/Text";

const Container = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 1440px;
  width: 100%;
  height: 800px;
  border-radius: 18px;
  display: grid;
  place-items: start;
  grid-template-rows: 1fr 1fr;
  padding: 10px 40px;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: ${(props) => (props.url ? `url(${props.url})` : "none")};
    background-size: cover;
    background-position: center;
    z-index: -1;
    filter: brightness(0.7);
  }
`;

const Information = styled.div`
  display: grid;
  grid-template-rows: min-content min-content min-content min-content;
  grid-row-start: 3;
  row-gap: 20px;
  margin-bottom: 50px;
`;

const Statistic = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Genres = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Genre = styled.div`
  border: solid 2px ${(props) => props.theme.colorpalette["primary-light"]};
  padding: 2px 6px;
  border-radius: 10px;
`;

const Navigation = styled.div`
  display: flex;
`;

const Link = styled(RouterLink)`
  text-decoration: none;
  max-width: 120px;
  width: 100%;
  margin-right: 15px;
`;

const Button = styled.div`
  background: ${(props) => props.theme.colorpalette["accent-dark"]};
  border-radius: 10px;
  padding: 5px 10px;
  display: grid;
  place-items: center;
  height: 35px;
`;
export const Details = ({ details, trailers }) => {
  const trailer = trailers.results.filter(
    (result) => result.type === "Trailer"
  );

  const timeFormat = (duration) => {
    const min = Math.floor(duration / 60);
    const sec = duration % 60;
    return `${min}h ${sec}m`;
  };

  return (
    <Container
      url={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`}
    >
      <Information>
        <Text variant="title">{details.title || details.name}</Text>
        <Statistic>
          <StarIcon size="28" />
          <Text variant="medium">
            {details.vote_average.toFixed(2)} |{" "}
            {details.runtime ? timeFormat(details.runtime) + " | " : ""}{" "}
            {details.release_date?.split("-")[0] ||
              details.first_air_date?.split("-")[0]}
          </Text>
        </Statistic>
        <Genres>
          {details.genres.map((genre) => {
            return (
              <Genre key={genre.name}>
                <Text>{genre.name}</Text>
              </Genre>
            );
          })}
        </Genres>
        <Navigation>
          {trailer[0]?.key && (
            <Link
              to={`https://www.youtube.com/watch?v=${trailer[0]?.key}`}
              target="_blank"
              rel="noreferrer"
            >
              <Button>
                <Text variant="medium" color="primary-dark">
                  TRAILER
                </Text>
              </Button>
            </Link>
          )}

          {details.imdb_id && (
            <Link
              to={`https://www.imdb.com/title/${details.imdb_id}`}
              target="_blank"
              rel="noreferrer"
            >
              <Button>
                <Text variant="medium" color="primary-dark">
                  IMDB
                </Text>
              </Button>
            </Link>
          )}
        </Navigation>
      </Information>
    </Container>
  );
};
