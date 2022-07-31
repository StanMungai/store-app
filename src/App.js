import React from 'react';
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Partners from './components/Partners';
import Contacts from './components/Contacts';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/partners" element={<Partners />}/>
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
