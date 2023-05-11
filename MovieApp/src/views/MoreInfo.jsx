import { useEffect, useState } from "react";
import { getMoviesDetails } from "../services/getMoviesDetails";
import { getMovieTrailers } from "../services/getMovieTrailers";
import { getTvShowsDetails } from "../services/getTvShowsDetails";
import { getTvShowsTrailers } from "../services/getTvShowsTrailers";
import { Details } from "../components/Details";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../services/getMovieCast";
import { Cast } from "../components/Cast";
import { getTvShowsCast } from "../services/getTvShowsCast";
import { Text } from "../components/Text";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  place-items: center;
  max-width: 1440px;
  width: 100%;

  row-gap: 20px;
  margin-bottom: 50px;
`;

export const MoreInfo = () => {
  const { id, type } = useParams();
  const [details, setDetails] = useState();
  const [trailers, setTrailers] = useState();
  const [actors, setActors] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await (type === "movie"
          ? getMoviesDetails({ id })
          : getTvShowsDetails({ id }));
        const videos = await (type === "movie"
          ? getMovieTrailers({ id })
          : getTvShowsTrailers({ id }));

        const actors = await (type === "movie"
          ? getMovieCast({ id })
          : getTvShowsCast({ id }));

        setActors(actors);
        setDetails(data);
        setTrailers(videos);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id, type]);

  if (!details && !trailers) {
    return <>loading</>;
  }

  console.log(details);
  return (
    <Container>
      <Details details={details} trailers={trailers} />

      <Text variant="title" color="accent-dark">
        Overview
      </Text>

      <Text variant="medium">
        {details.overview}
      </Text>

      <Text variant="title" color="accent-dark">
        Cast
      </Text>
      <Cast actors={actors} />
    </Container>
  );
};
