import Link from 'next/link';

const NavItem = ({ href, children }) => {
  return (
    <li>
      <Link href={href} passHref>
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
