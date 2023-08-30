import React from 'react';

// styles
import './css/main.css';

// components
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App;