import Link from 'next/link';
// import styled from 'styled-components';
import { useRouter } from 'next/router';

const NavItem = ({ href, children }) => {
  // const router = useRouter();
  // const isActive = router.asPath === href;
  return (
    <li>
      <Link href={href} passHref>
        {/* <a isActive={isActive}>{children}</a> */}
        <a>{children}</a>
      </Link>
    </li>
  );
}

const NavigationBar = () => {
  return (
    <header>
      <ul>
        <>
          <NavItem href='/'>Home</NavItem>
          <NavItem href='/buy'>Buy</NavItem>
          <NavItem href='/sell'>Sell</NavItem>
          <NavItem href='/contact'>Contact</NavItem>
        </>
      </ul>
    </header>
  );
}

export default NavigationBar;
