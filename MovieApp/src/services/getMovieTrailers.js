const API_KEY = "baf484c18bf1b9abd7fbe166552c591e";

export const getMovieTrailers = async ({ id }) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
};
