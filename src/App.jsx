import React from 'react';

// styles
import './css/main.css';

// components
import Navbar from './components/Navbar';
import Home from './components/Home';
import BackgroundPage from './components/BackgroundPage';
import About_me from './components/About_me';
import Abilities from './components/Abilities';
import Project from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BackgroundPage/>
      <Navbar/>
      <Home/>
      <About_me/>
      <Abilities/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;