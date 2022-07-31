import React from 'react'
import {FcLike, FcDislike} from "react-icons/fc"

function Projects({project, onDeleteProject}) {

  function handleDelete(){
    fetch(`http://localhost:3000/materials/${project.id}`, {
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
        <button className='btn' ><FcLike/>Like</button>
        {/* <button>{likes}</button> */}
        <button className='btn'><FcDislike/>Dislike</button>
        <button className='btn' onClick={handleDelete}>Remove</button>
      </div>
    </div>
  )
}

export default Projects