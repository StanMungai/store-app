import React, {useState, useEffect} from 'react';
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Partners from './components/Partners';
import Contacts from './components/Contacts';


function App() {
/*
  const [details, setDetails] = useState(true)
  function showDetails(){
   // console.log('clicked')
    setDetails(!details )
  }
*/
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/materials")
      .then((response) => response.json())
      .then((items) => setItems(items))}, [])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home items={items}/>}></Route>
        <Route path="/partners" element={<Partners />}/>
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
