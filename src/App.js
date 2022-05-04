import { useState, useEffect } from 'react';
import './App.css';
import getApiData from './services/Fetch';
import Header from './components/Header';

function App() {
  const [dataMovies, setDataMovies] = useState('');

  useEffect(() => {
    getApiData().then((dataFromApi) => {
      console.log(dataFromApi);
      setDataMovies(dataFromApi);
    });
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
