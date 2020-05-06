import React from 'react';
import Container from '@material-ui/core/Container';
// import logo from './logo.svg';
import './App.css';
//import GoogleApiWrapper from './Map.js';
import Nav from './components/Nav.js';
import LandingPage from './components/LandingPage.js';
import MapPage from './components/MapPage.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <Container className='PageContainer' maxWidth="lg">
      	<LandingPage />
      </Container>

      <Nav />
      <Container className='PageContainer' maxWidth="lg">
      	<MapPage />
      </Container>
    </div>
  );
}

export default App;
