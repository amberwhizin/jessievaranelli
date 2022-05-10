// maybe a drop down for location first? then add search
// also read about controlled forms

import React from 'react';

function Form ({ onSearchChange, search }) {

  function handleSearchChange(event) {
    onSearchChange(event.target.value);
  }

  return (
    <form style={{margin:10}}>
      <input
        type="text"
        name="search"
        placeholder= "city / zip code"
        value={search}
        onChange={handleSearchChange}
      />
      <button type="submit" >find home</button>
    </form>
  );
}

export default Form;