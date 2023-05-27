import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { getNowPlaying } from "../services/getNowPlaying";

import { NowPlaying } from "../components/Swiper/NowPlaying";
import { Text } from "../components/Text";
import { getPopularMovies } from "../services/getPopularMovies";
import { Popular } from "../components/Popular";
import { getPopularTvShows } from "../services/getPopularTvShows";

const Container = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  row-gap: 50px;
`;

export const HomePage = () => {
  const [nowPlaying, setNowPlaying] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [popularTvShows, setPopularTvShows] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const nowPlaying = await getNowPlaying();
      const popularMovies = await getPopularMovies();
      const popularTvShows = await getPopularTvShows();
      setNowPlaying(nowPlaying);
      setPopularMovies(popularMovies);
      setPopularTvShows(popularTvShows);
    };

    fetchData();
  }, []);

  if (!nowPlaying) {
    return "loading";
  }


  return (
    <Container>
      <Text variant="title" color="accent-dark">
        In Cinemas
      </Text>
      <NowPlaying nowPlaying={nowPlaying} />
      <Text variant="title" color="accent-dark">
        Popular Movies
      </Text>
      <Popular popularMovies={popularMovies} />
      <Text variant="title" color="accent-dark">
        Popular Tv Shows
      </Text>
      <Popular popularTvShows={popularTvShows} />
    </Container>
  );
};
