import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const LinkItem = styled.li`
  list-style: none;
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #fff;
  border-bottom: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
  font-family: 'helvetica';
  `;

const NavItem = ({ href, children }) => {
  const router = useRouter();
  const [active, setActive] = useState(router.pathname);

  const updateRoute = (url) => {
    setActive(url); };

  useEffect(() => {
    router.events.on('routeChangeStart', updateRoute);
    });
  
  return (
    <li >
      <Link href={href} passHref>
        <a className={active == href ? styles.active : ''} >{children}</a>
      </Link>
    </li>
  );
}

const Navbar = () => {
  return (
    <header className={styles.navcontainer}>
      <ul className={styles.navbar}>
          <NavItem href='/'>Home</NavItem>
          <NavItem href='/buy'>Buy</NavItem>
          <NavItem href='/sell'>Sell</NavItem>
          <NavItem href='/contact'>Contact</NavItem>
      </ul>
    </header>
  );
}

export default Navbar;
