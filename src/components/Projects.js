import React, { useState } from 'react'
import {FcLike, FcDislike} from "react-icons/fc"

function Projects({project, onDeleteProject}) {
  const [countIncrement, setCountIncrement] = useState(0)
  const [countDecrement, setCountDecrement] = useState(0)

  function handleIncrement() {
    setCountIncrement(countIncrement + 1)
  }

  function handleDecrement() {
    setCountDecrement(countDecrement + 1)
  }

  function handleDelete(){
    fetch(`http://localhost:3000/projects/${project.id}`, {
      method: "DELETE"
    })
      .then((response) => response.json())
      .then(() => onDeleteProject(project.id))
  }

  return (
    <div className='card' >
      <img src={project.image} alt="projects" style={{width:"100%"}}/>    
      <div className='container'>
        <h3>{project.name}</h3>
        <h4>{project.location}</h4>
        <h5>Estimated Cost: {project.cost}</h5>
        <div className='plus-one' onClick={handleIncrement}>
          <button className='btn' ><FcLike/>Like</button>
          <button className='like-btn'>{countIncrement}</button>
        </div>
        <div className='plus-one' onClick={handleDecrement}>
          <button className='btn'><FcDislike/>Dislike</button>
          <button className='like-btn'>{countDecrement}</button>
        </div>
        <button className='btn' onClick={handleDelete}>Remove</button>
      </div>
    </div>

  )
}

export default Projects