import React from 'react';
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
  //const [likes, setLikes] = useState(0)
  // const [projects, setProjects] = useState([])

  // useEffect(() => {
  //   fetch("http://localhost:3000/materials")
  //     .then((response) => response.json())
  //     .then((projects) => setProjects(projects))}, [])

  // function addProject(newProject) {
  //   setProjects([...projects, newProject])
  // }    

  // function deleteProject(project) {
  //   console.log(project)
  // }

  // function incrementLikes(){
  //   setLikes((likes) => likes + 1)
  // }

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
