import { useEffect, useState } from "react";
import { RankingList } from "../components/RankingList/RankingList";
import { Text } from "../components/Text";
import { getTvShowsRanking } from "../services/getTvShowsRanking";

export const TvShowsRanking = () => {
  const [tvShows, setTvShows] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTvShowsRanking();
        setTvShows(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Text variant="large" color="accent-dark">
        Top 100 Tv Shows
      </Text>
      <RankingList tvShows={tvShows} />
    </>
  );
};
