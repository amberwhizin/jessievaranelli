import Link from 'next/link';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #9ba1ce;
  border: 2px solid navy;
  height: 40px;
  padding: 0px 20px;
  margin-left: 100px;
  margin-bottom: 10px;
`;

export default function Contact() {
  return (
    <>
      <h1 style={{margin: 10}}> <a href="mailto: JESSIESEMAIL@EMAIL>COM">jessieemail@email.com </a> </h1>
      <StyledButton>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </StyledButton>
    </>
  );
}
