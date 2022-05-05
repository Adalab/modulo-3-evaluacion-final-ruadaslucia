import '../styles/_movieSceneItem.scss';
function MovieSceneItem() {
  return (
    <div className="itemContainer">
      <a href="">
        <img className="" alt="Poster Pelicula" title="Poster Pelicula" />
        <h4>Nombre pelicula</h4>
        <p>Año de estreno</p>
        <p>Linea del guión</p>
      </a>
    </div>
  );
}
export default MovieSceneItem;
