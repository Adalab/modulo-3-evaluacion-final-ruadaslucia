import MovieSceneItem from './MovieSceneItem';
import '../styles/_movieContainer.scss';
function MovieSceneList(props) {
  const movieElements = props.movies.map((movie) => {
    return (
      <li className="card">
        <MovieSceneItem />
      </li>
    );
  });
  return (
    <section>
      <ul className="movieContainer">{movieElements}</ul>
    </section>
  );
}
export default MovieSceneList;
