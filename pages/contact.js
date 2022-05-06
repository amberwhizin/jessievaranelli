import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <h1> <a href="mailto: JESSIESEMAIL@EMAIL>COM">jessieemail@email.com </a> </h1>
      <button>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </button>
    </>
  );
}
