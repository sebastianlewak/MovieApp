const API_KEY = "baf484c18bf1b9abd7fbe166552c591e";

export const getSearch = async (input) => {
  const url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${input}&include_adult=false`;
  const response = await fetch(url);
  const data = await response.json();

  const movies = data.results.slice(0, 5);

  console.log(movies)
  return movies;

};
