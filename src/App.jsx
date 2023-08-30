import React from 'react';

// styles
import './css/main.css';

// components
import Navbar from './components/Navbar';
import Home from './components/Home';
import BackgroundPage from './components/BackgroundPage';
import About_me from './components/About_me';

function App() {
  return (
    <div className="App">
      <BackgroundPage/>
      <Navbar/>
      <Home/>
      <About_me/>
    </div>
  )
}

export default App;