import Link from 'next/link';
import { fakeData } from '../src/data/fakeData';
// images should use Image from next/image but for now it works with img tag
import React, { useState } from 'react';


export default function Buy() {
  const available = fakeData.filter((item) => item.isAvailable === true);

  const [homes, setHomes] = useState(available);
  const [filterBy, setFilterBy] = useState('all');

  function handleFilterChange(event) {
    setFilterBy(event.target.value);
  }

  const homesToDisplay = homes.filter((home) => {
    if (filterBy === 'all') {
      return true;
    } else {
      return home.bedrooms === filterBy;
    }
  });

  const homesList = homesToDisplay.map((home) => (
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
      <select name-="filter" onChange={handleFilterChange}>
        <option value="all">See All Available Homes</option>
        <option value="1">See 1 Bedroom Homes</option>
        <option value="2">See 2 Bedroom Homes</option>
        <option value="3">See 3 Bedroom Homes</option>
        <option value="4">See 4 Bedroom Homes</option>
      </select>
      {homesList}
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
