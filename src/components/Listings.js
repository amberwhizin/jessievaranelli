import React, { useState } from 'react';
import Filter from './Filter';
import Form from './Form';
import { fakeData } from '../data/fakeData';
// images should use Image from next/image but for now it works with img tag
import Listing from './Listing';
import styled from 'styled-components';

const Listings = () => {
  const [homes, setHomes] = useState(fakeData);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  };

  function handleSubCategoryChange(event) {
    setSubCategory(event.target.value);
  }

  function handleSearchTextChange(event) {
    setValue(event.target.value);
  };

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   // onSearchChange(search);
  //   // the submit isnt doing anything right now
  //   // because results are displaying as the user is typing
  // };

  const homesToDisplay = homes
    .filter((home) => home.isAvailable === true)
    .filter((home) =>
      home.address.city.toLowerCase().includes(search.toLowerCase()) || home.address.zip.includes(search)
    );

  const homesList =
    homesToDisplay.length === 0 ? (
      <div className="no-results-message">
        There are no homes currently available that meet your criteria. Try expanding your search, or{' '}
        {
          <a style={{ color: 'red' }} href="mailto: JESSIESEMAILHERE@EMAIL>COM">
            send me an email
          </a>
        }
      </div>
      ) 
      : 
      (
      homesToDisplay.map((home) => 
        <Listing home={home} key={home.id} />
        )
    )

  return (
    <div className="listings-container" style={{margin: 10}}>
      <div className="filter-container" style={{margin: 10}}>
        <Form
          onSearchChange={setSearch}
          search={search}
          // onSubmit={handleSubmit} 
        />
        {/* <label>Filter by:</label>
        <Filter onCategoryChange={handleCategoryChange} /> */}

        <div className="home-listings-container">{homesList}</div>
      </div>
    </div>
  );
};

export default Listings;