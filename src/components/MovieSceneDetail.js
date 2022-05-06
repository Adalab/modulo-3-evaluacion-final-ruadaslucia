import '../styles/_movieSceneDetail.scss';
function MovieSceneDetail(props) {
  return (
    <div>
      <nav className="detailContainer" to="/detail">
        <a className="linksStyleDetail" href={props.movie.audio} target="blank">
          <img
            className="posterImageDetail"
            src={props.movie.poster}
            alt={props.movie.movieName}
            title={props.movie.movieName}
          />
          <div className="detailContent">
            <h4>Movie: {props.movie.movieName}</h4>
            <p className="textLineDetail">Line: {props.movie.fullLine}</p>
            <p>Director: {props.movie.director}</p>
            <p className="audioText">Click and listen to the audio</p>
          </div>
        </a>
      </nav>
    </div>
  );
}
export default MovieSceneDetail;
