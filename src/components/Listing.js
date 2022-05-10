import React from 'react';
import styled from 'styled-components';

const StyledListing = styled.div`
background-color: #DFE3F7;
border: 3px solid #6E8BDC;
padding: 10px;
width: 426px;
display: flex-row;
`;


const Listing = ({ home }) => {
  const handleClick = () => {
    console.log('one day this will open a module');
  }
  return (
    <StyledListing key={home.id}>
      <img
        src={home.mainImage}
        alt={home.address.street}
        width={400}
        height={300}
      />
      <p>
        <b>
          {home.address.street} {home.address.city}, {home.address.state}{' '}
        </b>
      </p>
      <p>
        {home.bedrooms} Bed | {home.bathrooms} Bath | {home.sqft} sqft
      </p>
      <p>{home.price}</p>
      <a href="" onClick={handleClick} >explore this listing</a>
    </StyledListing>
  );
}

export default Listing