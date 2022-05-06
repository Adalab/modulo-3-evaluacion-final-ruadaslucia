import '../styles/_filterName.scss';
function NameFilter(props) {
  function handleMovieInput(event) {
    props.handleInputUser(event.target.value);
  }
  return (
    <form className="inputMovie">
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
