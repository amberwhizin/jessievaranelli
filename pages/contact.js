import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <h1>jessieemail@email.com</h1>
      <button>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </button>
    </>
  );
}

/*
Import Link to link BACK to main page ('/')
return the email and the backlink

contact page loads fine! but backlink shows error:
Error: The default export is not a React Component in page: "/"
*/