import NameFilter from './NameFilter';
import YearFilter from './YearFilter';

function Filters(props) {
  return (
    <section>
      <form action="">
        <NameFilter handleInputUser={props.handleInputUser} />
        <YearFilter handleFilterByYear={props.handleFilterByYear} />
      </form>
    </section>
  );
}
export default Filters;
