import Link from 'next/link';

export default function Buy() {
  return (
    <>
      <h1>Available Listings</h1>
      <ul>
        <li>house 1</li>
        <li>house2</li>
        <li>house3</li>
      </ul>
      <button>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </button>
    </>
  );
}
