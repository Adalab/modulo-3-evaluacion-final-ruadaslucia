import { NavLink } from 'react-router-dom';
import '../styles/_movieSceneItem.scss';
function MovieSceneItem(props) {
  return (
    <div>
      <NavLink className="linksStyle" to="/">
        <ul>
          <li>
            <img
              className="posterImage"
              src={props.movie.poster}
              alt={props.movie.movieName}
              title={props.movie.movieName}
            />
            <h4>{props.movie.movieName}</h4>
            <p>{props.movie.year}</p>
            <p className="textLine">{props.movie.fullLine}</p>
          </li>
        </ul>
      </NavLink>
    </div>
  );
}
export default MovieSceneItem;
