import { useState, useEffect } from 'react';
import './App.css';
import getApiData from './services/Fetch';
import Header from './components/Header';
import Filters from './components/Filters';
import MovieSceneList from './components/MovieSceneList';

function App() {
  const [dataMovies, setDataMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filterByYear, setFilterByYear] = useState('');
  const [inputUser, setInputUser] = useState('');

  useEffect(() => {
    getApiData().then((dataFromApi) => {
      setDataMovies(dataFromApi);
      setFilteredMovies(dataFromApi);
    });
  }, []);

  useEffect(() => {
    let filteredMovies = dataMovies;

    if (isNaN(filterByYear) === false) {
      const filteredByYear = dataMovies.filter(
        (movie) => movie.year === filterByYear
      );
      filteredMovies = [...filteredByYear];
    }

    filteredMovies = filteredMovies.filter((movie) => {
      return movie.movieName.toLowerCase().includes(inputUser.toLowerCase());
    });

    setFilteredMovies([...filteredMovies]);
  }, [filterByYear, inputUser]);

  //filtro por año
  //filtro del valor del select
  const handleFilterByYear = (value) => {
    setFilterByYear(value);
  };

  //filtro por nombre
  const handleInputUser = (event) => {
    setInputUser(event);
  };

  return (
    <div className="appBody">
      <Header />
      <Filters
        handleFilterByYear={handleFilterByYear}
        handleInputUser={handleInputUser}
      />
      <div className="listContainer">
        <MovieSceneList movies={filteredMovies} />
      </div>
    </div>
  );
}

export default App;
