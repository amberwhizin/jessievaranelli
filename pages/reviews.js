import Link from 'next/link';

export default function Reviews() {
  return (
    <>
      <h1>are you blinded by my 5 star reviews?</h1>
      <button>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </button>
    </>
  );
}
