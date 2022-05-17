import '../styles/globals.css';
import { useState, useEffect } from 'react';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const responsive = {
    mobileWidth: width < 1024,
  };

  return (
    <>
      <Header mobileWidth={responsive.mobileWidth} />
      <Component {...pageProps} mobileWidth={responsive.mobileWidth} />
    </>
  );
}

export default MyApp;
