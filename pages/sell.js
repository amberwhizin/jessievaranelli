import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import { fakeData } from '../src/data/fakeData';
import Listing from '../src/components/Listing';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #9ba1ce;
  border: 2px solid navy;
  height: 40px;
  padding: 0px 20px;
  margin-left: 10px;
  margin-bottom: 10px;
  &:hover {
    background-color: #192fd0;
    color: white;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

const StyledContainer = styled.div`
  margin: 10px;
`;

const ListingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* margin: 10px; */
`;

export default function Sell() {

  const soldHomesToDisplay = fakeData.filter(item => (item.isAvailable === false));
  const soldListings = soldHomesToDisplay.map((home) => (<Listing home={home} key={home.id}></Listing>));

  return (
    <StyledContainer>
      <h1>Sold Listings</h1>
      <h3><i>displaying all sold homes</i></h3> {/*make this a side effect? */}
      <ListingContainer>{soldListings}</ListingContainer>
      <ButtonContainer>
        <StyledButton>
          <Link href="/buy">
            <a>See Available Homes</a>
          </Link>
        </StyledButton>
        <StyledButton>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </StyledButton>
      </ButtonContainer>
   </StyledContainer>
   );
}
