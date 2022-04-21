import '../styles/globals.css'
import NavigationBar from '../src/components/navbar'

function MyApp({ Component, pageProps }) {
  return <>
  <NavigationBar />
  <Component {...pageProps} />
  </>
}

export default MyApp
