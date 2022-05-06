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