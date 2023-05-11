import { useEffect, useState } from "react";
import { RankingList } from "../components/RankingList/RankingList";
import { Text } from "../components/Text";
import { getMoviesRanking } from "../services/getMoviesRanking";


export const MoviesRanking = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMoviesRanking();
        setMovies(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Text variant="large" color="accent-dark">
        Top 100 Movies
      </Text>
      <RankingList movies={movies} />
    </>
  );
};
