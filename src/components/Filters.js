import '../styles/_filters.scss';
import NameFilter from './NameFilter';
import YearFilter from './YearFilter';

function Filters(props) {
  return (
    <div>
      <form className="filtersContainer" action="">
        <NameFilter handleInputUser={props.handleInputUser} />
        <YearFilter handleFilterByYear={props.handleFilterByYear} />
      </form>
    </div>
  );
}
export default Filters;
