import MovieSceneItem from './MovieSceneItem';
import '../styles/_movieSceneList.scss';

function MovieSceneList(props) {
  const movieElements = props.movies.map((movie, index) => {
    return (
      <section className="itemContainer">
        <li className="movieContainer" key={index}>
          <MovieSceneItem movie={movie} />
        </li>
      </section>
    );
  });

  return (
    <section>
      <ul>{movieElements}</ul>
    </section>
  );
}
export default MovieSceneList;
{
  /* <li className="footer__menu-item">
            <NavLink className="footer__menu-link" to="/instructions">
              ¿Cómo se juega?
            </NavLink>
          </li> */
}
