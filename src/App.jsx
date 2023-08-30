import React from 'react';

// styles
import './css/main.css';

// components
import Navbar from './components/Navbar';
import Home from './components/Home';
import BackgroundPage from './components/BackgroundPage';

function App() {
  return (
    <div className="App">
      <BackgroundPage/>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App;