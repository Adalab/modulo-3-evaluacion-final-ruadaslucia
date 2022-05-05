function NameFilter(props) {
  function handleMovieInput(event) {
    props.handleInputUser(event.target.value);
  }
  return (
    <>
      <input
        className="inputMovie"
        type="text"
        name="movie"
        placeholder="Find a movie"
        onChange={handleMovieInput}
      />
    </>
  );
}
export default NameFilter;
