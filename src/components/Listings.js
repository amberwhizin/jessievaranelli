import React, { useState } from 'react';
import Filter from '../src/components/Filter';
import Form from '../src/components/Form';
import { fakeData } from '../data/fakeData';
import Listing from '../src/components/Listing';
import Link from 'next/link';

const Listings = () => {

  const [homes, setHomes] = useState(fakeData);
  const [category, setCategory] = useState('');
  const [value, setValue] = useState('');

  const homesToShow = homes
    .filter(
      (home) => home.isAvailable === true)
    .filter(
      (home) => home.address.city.toLowerCase().includes(search.toLowerCase())
    );

  const homesList = 
    homesToDisplay.length === 0 ? 
      (<div className="no-results-message">There are no homes currently available that meet your criteria. Try expanding your search, or { <a style={{ color:'red'}} href="mailto: JESSIESEMAILHERE@EMAIL>COM">send me an email</a>}</div>)
    : 
    homesToDisplay.map((home) => <Listing home={home} key={home.id} />);
  


  return (
    <div className="listings-container">
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
    </div>
  )


}

export default Listings;