import '../styles/_filters.scss';
import NameFilter from './NameFilter';
import YearFilter from './YearFilter';

function Filters(props) {
  return (
    <div className="filtersContainer">
      <NameFilter handleInputUser={props.handleInputUser} />
      <YearFilter handleFilterByYear={props.handleFilterByYear} />
    </div>
  );
}
export default Filters;
