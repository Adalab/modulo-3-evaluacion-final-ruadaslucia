function NameFilter() {
  function handleMovieinput() {}
  return (
    <>
      <input
        className="inputMovie"
        type="text"
        name="movie"
        placeholder="Find a movie"
        onChange={handleMovieinput}
      />
    </>
  );
}
export default NameFilter;
