const API_KEY = "17effc3bce0e497819301bb3617efbd9";

export const getSearch = async (input) => {
  const url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${input}&include_adult=false`;
  const response = await fetch(url);
  const data = await response.json();

  const movies = data.results;

  return movies;
};

