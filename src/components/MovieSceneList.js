import MovieSceneItem from './MovieSceneItem';
//import MovieSceneDetail from './MovieSceneDetail';
import '../styles/_movieSceneList.scss';

function MovieSceneList(props) {
  const movieElements = props.movies.map((movie, index) => {
    return (
      <section className="itemContainer">
        <li className="movieContainer" key={index}>
          <MovieSceneItem movie={movie} />
          {/* <MovieSceneDetail movie={movie} /> */}
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
