import { useState, useEffect } from 'react';
import './App.css';
import getApiData from './services/Fetch';
import Header from './components/Header';
import Footer from './components/Footer';
import Filters from './components/Filters';
import MovieSceneList from './components/MovieSceneList';

function App() {
  const [dataMovies, setDataMovies] = useState([]);

  useEffect(() => {
    getApiData().then((dataFromApi) => {
      setDataMovies(dataFromApi);
    });
  }, []);

  return (
    <div className="appBody">
      <Header />
      <Filters />
      <MovieSceneList movies={dataMovies} />
      <Footer />
    </div>
  );
}

export default App;
