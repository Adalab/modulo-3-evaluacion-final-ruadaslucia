import { Link } from 'react-router-dom';
import '../styles/_movieSceneItem.scss';
function MovieSceneItem(props) {
  return (
    <li className="movieContainer">
      <Link className="linksStyle" to="/detail" state={{ movie: props.movie }}>
        <img
          className="posterImage"
          src={props.movie.poster}
          alt={props.movie.movieName}
          title={props.movie.movieName}
        />
        <div className="textMovieItem">
          <h4>{props.movie.movieName}</h4>
          <p className="textLine">{props.movie.fullLine}</p>
          <p>{props.movie.year}</p>
        </div>
      </Link>
    </li>
  );
}
export default MovieSceneItem;
