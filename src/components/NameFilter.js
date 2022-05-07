import '../styles/_filterName.scss';
function NameFilter(props) {
  function handleMovieInput(event) {
    event.preventDefault();
    props.handleInputUser(event.target.value);
  }
  return (
    <form className="inputMovie">
      <p className="inputMovie__text">Find a movie</p>
      <input
        className="inputMovie__name"
        type="text"
        name="movie"
        placeholder="Find a movie"
        onChange={handleMovieInput}
      />
    </form>
  );
}
export default NameFilter;
