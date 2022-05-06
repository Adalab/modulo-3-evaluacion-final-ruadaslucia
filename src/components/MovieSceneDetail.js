import '../styles/_movieSceneDetail.scss';
function MovieSceneDetail(props) {
  return (
    <div className="detailContainer">
      <a className="linksStyleDetail" href={props.movie.audio} target="blank">
        <img
          className="posterImageDetail"
          src={props.movie.poster}
          alt={props.movie.movieName}
          title={props.movie.movieName}
        />
        <div className="detailContent">
          <h4>{props.movie.movieName}</h4>
          <p className="textLineDetail">{props.movie.fullLine}</p>
          <p>Director: {props.movie.director}</p>
          <p className="audioText">Click para escuchar el audio</p>
        </div>
      </a>
    </div>
  );
}
export default MovieSceneDetail;
