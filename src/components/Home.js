import React, { useState, useEffect } from 'react'
import Form from './Form'
import Projects from './Projects'

function Home() {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch("https://ujenzi-constructors-limited.herokuapp.com/projects")
      .then((response) => response.json())
      .then((projects) => setProjects(projects))}, [])

  function addProject(newProject) {
    setProjects([...projects, newProject])
  }    

  function deleteProject(project) {
    setProjects(projects.filter((project) => project.id !== project))
  }

  return (
    <main className='main'>
      <h2 className='heading'>Recently Proposed Projects</h2>
      <div>
        {projects.map((project) => (
          <Projects project={project} key={project.id} onDeleteProject={deleteProject}/>
      ))}
      </div>
      <Form onAddProject={addProject}/>
    </main>
  )
}

export default Home