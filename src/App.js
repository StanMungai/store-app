import React from 'react';
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Partners from './components/Partners';
import About from './components/About';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/partners" element={<Partners />}/>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
