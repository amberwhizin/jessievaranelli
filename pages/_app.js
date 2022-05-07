import '../styles/globals.css'
import Navbar from '../src/components/containers/Navbar/Navbar'

function MyApp({ Component, pageProps }) {
  return <>
  <Navbar />
  <Component {...pageProps} />
  </>
}

export default MyApp
