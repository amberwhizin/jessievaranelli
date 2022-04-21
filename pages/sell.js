import Link from 'next/link';
// import Image from 'next/image';
import { fakeData } from '../src/data/fakeData';


const sold = fakeData.filter(item => (item.isAvailable === false));

const soldListings = sold.map((item) => (
  <div className="sold-listing" key={item.id}>
    <img 
      src={item.mainImage}
      alt={item.address.street}
      width={300}
      height={200}
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

export default function Sell() {
  return (
    <>
      <h1>Sold Listings</h1>
      {soldListings}
      <button>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </button>
    </>
  );
}
// export default function Sell() {
//   return (
//     <>
//       <h1>
//         Fill out this form and find out if you can make MILLIONS on your home
//         with me!
//       </h1>
//       <soldListings data={fakeData} />
//       <button>
//         <Link href="/">
//           <a>Back to home</a>
//         </Link>
//       </button>
//     </>
//   );
// }
