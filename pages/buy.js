import Link from 'next/link';
import { fakeData } from '../src/data/fakeData';
// images should use Image from next/image but for now it works with img tag
import React, { useState } from 'react';
import Filter from '../src/components/Filter';
import Form from '../src/components/Form';


export default function Buy() {
  const available = fakeData.filter((item) => item.isAvailable === true);

  const [homes, setHomes] = useState(available);
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

  const homesList = homesToDisplay.length === 0 ? (<div className="no-results-message">There are no homes currently available that meet your criteria. Try expanding your search, or { <a className="email-link" style={{ color:'red'}} href="mailto: JESSIESEMAILHERE@EMAIL>COM">send me an email</a>}</div>) : homesToDisplay.map((home) => (
    <div key={home.id} className="available-listing">
      <img
        src={home.mainImage}
        alt={home.address.street}
        width={400}
        height={300}
      />
      <p>{home.price}</p>
      <p>
        {home.address.street} {home.address.city}, {home.address.state}
      </p>
      <p>
        {home.bedrooms} Bed | {home.bathrooms} Bath | {home.sqft} sqft
      </p>
    </div>
  ));

  return (
    <>
      <h1>Available Listings</h1>
      <h3>all listings in data changed to avail for more test data- delete when fixed</h3>
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
