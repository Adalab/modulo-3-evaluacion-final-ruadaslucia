import MovieSceneItem from './MovieSceneItem';
import '../styles/_movieSceneList.scss';

function MovieSceneList(props) {
  const movieElements = props.movies.map((movie, index) => {
    return <MovieSceneItem movie={movie} key={index} />;
  });

  return (
    <section>
      <ul>{movieElements}</ul>
    </section>
  );
}
export default MovieSceneList;
