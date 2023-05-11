const API_KEY = "17effc3bce0e497819301bb3617efbd9";

export const getMovieCast = async ({ id }) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
  const response = await fetch(url);
  const data = await response.json();

  const cast = data.cast

  return cast;
};
