import React from 'react';
import Container from '@material-ui/core/Container';
// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.js';
// import LoginForm from './components/LoginForm.js';
import LandingPage from './components/LandingPage.js';
//import MapPage from './components/MapPage.js';

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
