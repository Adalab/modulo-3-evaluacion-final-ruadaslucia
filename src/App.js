import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import getApiData from './services/Fetch';
import Header from './components/Header';
import Filters from './components/Filters';
import MovieSceneList from './components/MovieSceneList';
import MovieSceneDetail from './components/MovieSceneDetail';

function App() {
  const [dataMovies, setDataMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filterByYear, setFilterByYear] = useState('all');
  const [inputUser, setInputUser] = useState('');

  useEffect(() => {
    getApiData().then((dataFromApi) => {
      setDataMovies(dataFromApi);
      setFilteredMovies(dataFromApi);
    });
  }, []);

  useEffect(() => {
    let filteredMovies = [...dataMovies];

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

  const handleFilterByYear = (value) => {
    setFilterByYear(value);
  };
  const handleInputUser = (event) => {
    setInputUser(event);
  };

  return (
    <div className="appBody">
      <Header />
      <main className="main">
        <section>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Filters
                    handleFilterByYear={handleFilterByYear}
                    handleInputUser={handleInputUser}
                  />
                  <MovieSceneList movies={filteredMovies} />
                </>
              }
            />
            <Route path="/detail" element={<MovieSceneDetail />}></Route>
          </Routes>
        </section>
      </main>
    </div>
  );
}

export default App;
