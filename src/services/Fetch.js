// https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50

function getApiData() {
  return fetch(
    'https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50'
  )
    .then((response) => response.json())
    .then((dataMovies) => {
      const allMovies = dataMovies.map((movie) => {
        return {
          poster: movie.poster,
          movieName: movie.movie,
          fullLine: movie.full_line,
          year: movie.year,
        };
      });
      return allMovies;
    });
}

export default getApiData;
