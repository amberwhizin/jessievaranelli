// maybe a drop down for location first? then add search
// also read about controlled forms

import React from 'react';

function Form ({ onSearchChange, search, onSubmit }) {
  // const [searchValue, setSearchValue] = useState();

  function handleSearchChange(event) {
    onSearchChange(event.target.value);
  }

  return (
    <form>
      <input
        type="text"
        name="search"
        placeholder="city"
        value={search}
        onChange={handleSearchChange}
      />
      <button type="submit" onSubmit={onSubmit}>find home</button>
    </form>
  );
}

export default Form;