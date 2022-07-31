import React, { useState } from 'react'

function Form({onAddProject}) {
  const [inputs, setInputs] = useState({
    name: "",
    location: "",
    cost: "",
    image: ""
  })

  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:3000/materials", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: inputs.name,
        location: inputs.location,
        cost: inputs.cost,
        image: inputs.image
      })
    })
      .then((response) => response.json())
      .then((projects) => onAddProject(projects))
  }


  return (
    <form className='form' onSubmit={handleSubmit}>
      <h2>Propose a Project for vetting</h2>

      <label>Name</label>
        <input 
          type="text" 
          placeholder='Building Structure Name'
          name='name' 
          value={inputs.name}
          onChange={(e) => setInputs({...inputs, name: e.target.value})}/><br/>
    
      <label>Location</label>
        <input 
          type="text" 
          name='location'
          value={inputs.location}
          onChange={(e) => setInputs({...inputs, location: e.target.value})}/><br/>
    
    <label>Est. Cost</label>
        <input 
          type="text" 
          name='cost'
          placeholder='KES'
          value={inputs.cost}
          onChange={(e) => setInputs({...inputs, cost: e.target.value})}/><br/>
        
         
      <label>Image</label>
        <input 
          type="text" 
          placeholder="Image URL" 
          name='image'
          value={inputs.image}
          onChange={(e) => setInputs({...inputs, image: e.target.value})}/><br/>
      

      
      <input type="submit"/>
    </form>
  )
}
export default Form