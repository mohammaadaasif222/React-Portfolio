import NavBar from './components/NavBar';
import About from './components/About';
import Education from './components/Education';
import Footer from './components/Footer';
import Contact from './components/Contact/Index';
import React from 'react';
import './App.css';


function App() {

  return (
   <React.StrictMode>
    <NavBar/>
    <About/>
    <Education/>
    <Contact/>
    <Footer/>
   </React.StrictMode> 
  );
}

export default App;
