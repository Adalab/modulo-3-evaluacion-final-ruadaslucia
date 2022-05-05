import '../styles/_filterYear.scss';
import { useEffect, useState } from 'react';

function YearFilter(props) {
  const [optionYears, setOptionYears] = useState([]);

  useEffect(() => {
    generateOptions(1995, 2022);
  }, []);

  const handleChangeYear = (event) => {
    props.handleFilterByYear(parseInt(event.target.value));
  };

  function generateOptions(startYear, endYear) {
    let options = [];
    for (let i = startYear; i <= endYear; i++) {
      options.push(
        <option value={`${i}`} key={i}>
          {i}
        </option>
      );
    }
    setOptionYears([...options]);
  }

  return (
    <div className="filterYearContainer">
      <label className="filterYearContainer__label" htmlFor="">
        Año{' '}
      </label>
      <select
        className="filterYearContainer__selectYear"
        name=""
        id=""
        onChange={handleChangeYear}
      >
        <option value="">All years</option>
        {optionYears}
      </select>
    </div>
  );
}
export default YearFilter;
