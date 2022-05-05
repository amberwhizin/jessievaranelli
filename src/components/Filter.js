import React from 'react';

function Filter({ onFilterChange }) {

  return (
    <div className="filter-container">
      <select name="categoryFilter" onChange={onFilterChange}>
        <option value="all">See All Available Homes</option>
        <option value="bedrooms">Bedrooms</option>
        <option value="bathrooms">Bathrooms</option>
        <option value="other"> Other </option>
      </select>
    </div>
  );

}

export default Filter;

  // const homesList = {homesToDisplay.length === 0 ? (<div>{`There are no homes currently available that meet your criteria. Try expanding your search, or ${ <a href="mailto: JESSIESEMAILHERE@EMAIL>COM">send me an email</a>}`}</div>) : homesToDisplay.map((home) => ) }