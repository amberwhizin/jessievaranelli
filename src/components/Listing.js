import React from 'react';

const Listing = ({ home }) => {
  return (
    <div key={home.id}>
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
  );
}

export default Listing