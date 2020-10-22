import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import "./Search_Date.css";
const Search_Date = () => {
  const [startDate,setStartDate]=useState(new Date());
  const [endDate,setEndDate]=useState(new Date());
  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  }
  const handleSelect=(ranges)=>{
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }
  return (
    <div className="search_date">
        <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
      />
    </div>
  );
};

export default Search_Date;