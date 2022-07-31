import React, { useState, useEffect } from 'react'
// import {FcLike, FcDislike} from "react-icons/fc"
import Form from './Form'
import Projects from './Projects'

function Home() {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/materials")
      .then((response) => response.json())
      .then((projects) => setProjects(projects))}, [projects])

  function addProject(newProject) {
    setProjects([...projects, newProject])
  }    

  function deleteProject(project) {
    setProjects(projects.filter((project) => project.id !== project))
  }

  // function handleDelete(){
  //   fetch(`http://localhost:3000/materials/${projects.id}`, {
  //     method: "DELETE"
  //   })
  //     .then((response) => response.json())
  //     .then(() => console.log("projects"))
  // }


  return (
    <main className='main'>
      <div>
        {projects.map((project) => (
          // <div className='card' key={project.id}>
          //   <img src={project.image} alt="projects" style={{width:"100%"}}/>
          //   <div className='container'>
          //     <h3>{project.name}</h3>
          //     <h4>{project.location}</h4>
          //     <button className='btn' ><FcLike/>Like</button>
          //     {/* <button>{likes}</button> */}
          //     <button className='btn'><FcDislike/>Dislike</button>
          //     <button className='btn'>Remove</button>
          //   </div>
          // </div>
        <Projects project={project} key={project.id} onDeleteProject={deleteProject}/>
      ))}
      </div>
      <Form onAddProject={addProject}/>
    </main>
  )
}

export default Home