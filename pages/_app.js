import '../styles/globals.css'
import 'rsuite/dist/rsuite.min.css';
import '../styles/globals.css';
import NavBar from "../Component/nav";
import {Container, Content, Footer, Header} from "rsuite";
import MyFooter from "../Component/footer";

function MyApp({ Component, pageProps }) {
  return (
      <div className='h-100'>
          <Container >
              <Header><NavBar /></Header>
              <Content> <Component  {...pageProps} /></Content>
              <Footer><MyFooter/></Footer>
          </Container>
      </div>
      )
}

export default MyApp
