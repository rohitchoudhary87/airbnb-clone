import React, {useState} from 'react';
import {DateRangePicker} from 'react-date-range';
import PeopleIcon from "@material-ui/icons/People";
import {Button} from "@material-ui/core";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import '../css/Search.css';
import { useHistory } from 'react-router-dom';

const Search = () => {
  const history = useHistory();
  const [startDate , setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker onChange = {handleSelect} ranges={[selectionRange]} />
      <h2> Number of guests <PeopleIcon />  </h2>
      <input type="number" min={0} defaultValue={2} />
      <Button onClick={() => history.push('/search')}> Search Airbnb </Button>
    </div>
  );
};

export default Search;