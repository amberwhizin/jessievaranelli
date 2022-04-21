import Link from 'next/link';
import { fakeData } from '../src/data/fakeData';
// images should use Image from next/image but for now it works with img tag

const available = fakeData.filter((item) => item.isAvailable === true);

const availListings = available.map((item) => (
  <div className="available-listing" key={item.id}>
    <img
      src={item.mainImage}
      alt={item.address.street}
      width={400}
      height={300}
    />
    <p>{item.price}</p>
    <p>
      {item.address.street} {item.address.city}, {item.address.state}
    </p>
    <p>
      {item.bedrooms} Bed | {item.bathrooms} Bath | {item.sqft} sqft
    </p>
  </div>
));

export default function Buy() {
  return (
    <>
      <h1>Available Listings</h1>
      {availListings}
      <button>
        <Link href="/sell">
          <a>see sold homes</a>
        </Link>
      </button>
      <button>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </button>
    </>
  );
}
