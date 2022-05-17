import '../styles/globals.css';
import { useState, useEffect } from 'react';
import Header from '../components/Header';

// site Joe Keohan for inline styles - https://itnext.io/3-ways-to-implement-responsive-design-in-your-react-app-bcb6ee7eb424 - THANK YOU, you saved my mind!
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
