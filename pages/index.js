import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="title">Hi, I am Jessie the Realest Real Estate Agent on the Planet.</h1>
      <p>
        <Link href="/contact">
          <a>need to get in touch?</a>
        </Link>
      </p>
      <p>
        <Link href="/reviews">
          <a>see what they say about me</a>
        </Link>
      </p>
      <p>
        <Link href="/buy">
          <a>buy a house from me, you know you want to!</a>
        </Link>
      </p>
      <p>
        <Link href="/sell">
          <a>make millions on your home with ME!</a>
        </Link>
      </p>
    </div>
  );
}

// this is basically the navbar but displayed as home page text. need to change that obvi