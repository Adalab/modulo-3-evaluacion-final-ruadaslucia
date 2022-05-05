import { useState, useEffect } from 'react';
import './App.css';
import getApiData from './services/Fetch';
import Header from './components/Header';
import Footer from './components/Footer';
import Filters from './components/Filters';
import MovieSceneList from './components/MovieSceneList';

function App() {
  const [dataMovies, setDataMovies] = useState([]);
  const [filterByYear, setFilterByYear] = useState('');

  useEffect(() => {
    getApiData().then((dataFromApi) => {
      setDataMovies(dataFromApi);
    });
  }, []);
  //filting del valor del select
  const handleFilterByyear = (value) => {
    setFilterByYear(value);
  };
  //pasar los datos filtrados a MovieSceneList. Filtro de la var se estado del año
  const moviesFilteredByYear = dataMovies.filter((movie) => {
    return movie.year === filterByYear;
  });
  return (
    <div className="appBody">
      <Header />
      <Filters handleFilterByyear={handleFilterByyear} />
      <MovieSceneList movies={dataMovies} />
      <Footer />
    </div>
  );
}

export default App;
