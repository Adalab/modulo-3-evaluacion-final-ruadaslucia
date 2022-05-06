import '../styles/_movieSceneItem.scss';
function MovieSceneItem(props) {
  return (
    <div>
      <a className="linksStyle" href="adalab.com">
        <img
          className="posterImage"
          src={props.movie.poster}
          alt={props.movie.movieName}
          title={props.movie.movieName}
        />
        <h4>{props.movie.movieName}</h4>
        <p>{props.movie.year}</p>
        <p className="textLine">{props.movie.fullLine}</p>
      </a>
    </div>
  );
}
export default MovieSceneItem;
