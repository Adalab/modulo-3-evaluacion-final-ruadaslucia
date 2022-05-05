import MovieSceneItem from './MovieSceneItem';
//import MovieSceneDetail from './MovieSceneDetail';
import '../styles/_movieSceneList.scss';

function MovieSceneList(props) {
  const movieElements = props.movies.map((movie, index) => {
    return (
      <li className="movieContainer" key={index}>
        <MovieSceneItem movie={movie} />
        {/* <MovieSceneDetail movie={movie} /> */}
      </li>
    );
  });

  return (
    <section>
      <ul>{movieElements}</ul>
    </section>
  );
}
export default MovieSceneList;
