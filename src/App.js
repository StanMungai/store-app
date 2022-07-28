import React from 'react';
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Partners from './components/Partners';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/'></Route>
        <Route path="/partners" element={<Partners />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
