import Link from 'next/link';
import { fakeData } from '../src/data/fakeData';
// images should use Image from next/image but for now it works with img tag
import React, { useState } from 'react';
import Filter from '../src/components/Filter';
import Form from '../src/components/Form';
import Listing from '../src/components/Listing';

export default function Buy() {
  // const available = fakeData.filter((item) => item.isAvailable === true);

  const [homes, setHomes] = useState(fakeData);
  const [filterBy, setFilterBy] = useState('all');
  const [search, setSearch] = useState('');

  function handleFilterChange(event) {
    setFilterBy(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSearchChange(searchValue);
  }

  const homesToDisplay = homes
  //   .filter(
  //     (home) => {
  //   if (filterBy === 'all') {
  //     return true;
  //   } else {
  //     return home.bedrooms === filterBy;
  //   }
  // })
  .filter(
    (home) => home.address.city.toLowerCase().includes(search.toLowerCase()) 
  );

  const homesList = 
    homesToDisplay.length === 0 ? 
      (<div className="no-results-message">There are no homes currently available that meet your criteria. Try expanding your search, or { <a style={{ color:'red'}} href="mailto: JESSIESEMAILHERE@EMAIL>COM">send me an email</a>}</div>)
    : 
    homesToDisplay.map((home) => <Listing home={home} key={home.id} />);
  
  return (
    <>
      <h1>Available Listings</h1>
      <div className="filter-container">
        <label>Filter by:</label>
        <Filter onFilterChange={handleFilterChange} />
        {/* <Filter onSubFilterChange={handleSubFilterChange} /> */}
        <Form onSearchChange={setSearch} search={search} onSubmit={handleSubmit}/>
        <div className="home-listings-container"></div>
        {homesList}
      </div>
      <button>
        <Link href="/sell">
          <a>see sold homes</a>
        </Link>
      </button>

      <button>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </button>
    </>
  );
}
