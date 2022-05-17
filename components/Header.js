import Link from 'next/link';

export default function Home(props) {
  const showNav= {
    display: props.mobileWidth ? 'none' : 'flex'
  }
  // for dropdown menu
  const showMenuIcon = {
    display: props.mobileWidth ? 'flex' : 'none',
  } 
  
  return (
    // nav for desktop
    <div style={showNav}>
      <h1 className="title">
       JV
      </h1>
      <p>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </p>
      <p>
        <Link href="/reviews">
          <a>Reviews</a>
        </Link>
      </p>
      <p>
        <Link href="/buy">
          <a>Buy</a>
        </Link>
      </p>
      <p>
        <Link href="/sell">
          <a>Sell</a>
        </Link>
      </p>
    </div>
  );
}
