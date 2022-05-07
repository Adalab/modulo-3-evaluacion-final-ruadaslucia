import { useLocation } from 'react-router-dom';
import '../styles/_movieSceneDetail.scss';
function MovieSceneDetail(props) {
  const location = useLocation();
  const movie = location.state.movie;
  return (
    <div className="containerPage">
      <nav className="detailContainer" to="/detail">
        <a className="linksStyleDetail" href={movie.audio} target="blank">
          <img
            className="posterImageDetail"
            src={movie.poster}
            alt={movie.movieName}
            title={movie.movieName}
          />
          <div className="detailContent">
            <h4>Movie: {movie.movieName}</h4>
            <p className="textLineDetail">Line: {movie.fullLine}</p>
            <p>Director: {movie.director}</p>
            <p className="audioText">Click and listen to the audio</p>
          </div>
        </a>
      </nav>
    </div>
  );
}
export default MovieSceneDetail;
