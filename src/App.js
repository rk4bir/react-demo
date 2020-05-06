import React from 'react';
import Container from '@material-ui/core/Container';
// import logo from './logo.svg';
import './App.css';
//import GoogleApiWrapper from './Map.js';
import Nav from './components/Nav.js';
import LandingPage from './components/LandingPage.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <Container className='PageContainer' maxWidth="lg">
      	<LandingPage />
      </Container>
    </div>
  );
}

export default App;
