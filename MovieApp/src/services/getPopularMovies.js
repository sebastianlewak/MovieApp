const API_KEY = "baf484c18bf1b9abd7fbe166552c591e";

export const getPopularMovies = async () => {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`;
  const response = await fetch(url);
  const data = await response.json();

  const results = data.results

  return results;
};