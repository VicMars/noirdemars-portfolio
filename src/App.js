import './App.css';
import { Helmet } from 'react-helmet';
import previewImage from 'Vicky_Andre_portfolio.png'

import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import AboutContent from './components/AboutContent';
import WebContent from './components/WebContent';
import TextileContent from './components/TextileContent';
import ContactContent from './components/ContactContent';
import Footer from './components/Footer';

function App() {

  return (

    <div className="App">
      <Helmet>
        <title>Vicky André • Portfolio</title>
        <meta name="description" content="The portfolio of Vicky André: a multi-disciplinary designer playing with shapes.
           From Textile to Web Design."/>
        <meta name="og:image" content="https://noir-de-mars.com/Vicky_Andre_portfolio.png"/>
      </Helmet>

      <div id="header">
        <Navbar/>
      </div>

      <main id="main-content">
        <MainContent/>
      </main>

      <div id="container-about">
        <AboutContent/>
      </div>

      <div id="container-web">
        <WebContent/>
      </div>

      <div id="container-textile">
        <TextileContent/>
      </div>

      <div id="container-contact">
        <ContactContent/>
      </div>

      <div id="footer">
        <Footer/>
      </div>

    </div>
  );

}



export default App;
