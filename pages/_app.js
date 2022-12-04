import '../styles/globals.css'
import 'rsuite/dist/rsuite.min.css';
import '../styles/globals.css';
import NavBar from "../Component/nav";

function MyApp({ Component, pageProps }) {
  return (
      <div>
        <NavBar/>
        <Component {...pageProps} />
      </div>
      )
}

export default MyApp
