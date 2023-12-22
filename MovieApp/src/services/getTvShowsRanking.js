const API_KEY = "baf484c18bf1b9abd7fbe166552c591e";

export const getTvShowsRanking = async () => {
  const result = [];

  for (let page = 1; page <= 5; page++) {
    const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&page=${page}`;
    result.push(fetch(url).then((respone) => respone.json()));
  }
  const tvShows = await Promise.all(result);
  return tvShows;
};


