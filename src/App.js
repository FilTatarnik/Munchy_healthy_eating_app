import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content-wrapper">
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;