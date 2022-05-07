import Link from 'next/link';
import React from 'react';
import Listings from  '../src/components/Listings';
import Form from '../src/components/Form';
import Filter from '../src/components/Filter';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #9BA1CE;
  border: 2px solid navy;
  height: 40px;
  padding: 0px 20px;
  margin-left: 10px;
  margin-bottom: 10px;
  `;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1 auto;
`;

export default function Buy() {

  return (
    <>
      <h1>Available Listings</h1>
      {/*  <h2>form from Buy.js</h2>
      <Form />
      <Filter />
      <h3>form from Listings component</h3>
  */}

      <Listings />
      <ButtonContainer>
        <StyledButton>
          <Link href="/sell">
            <a>See Sold Homes</a>
          </Link>
        </StyledButton>
        <StyledButton>
          <Link href="/contact">
            <a>List your home with me</a>
          </Link>
        </StyledButton>
      </ButtonContainer>
    </>
  );
}
