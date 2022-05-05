// import NameFilter from './NameFilter';
import YearFilter from './YearFilter';
function Filters(props) {
  return (
    <section>
      <form action="">
        {/* <NameFilter /> */}
        <YearFilter handleFilterByyear={props.handleFilterByyear} />
      </form>
    </section>
  );
}
export default Filters;
