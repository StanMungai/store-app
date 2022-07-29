import React from 'react'

function Form() {
  return (
    <form className='form'>
      <h2>Add your Project for vetting</h2>
      <label>Name</label>
      <div className='inputs'>
        
        <input type="text" placeholder='building structure name'/>
      </div>
      <div className='inputs'>
        <label>Location</label>
        <input type="text"/>
      </div>
      <div className='inputs'>
        <label>Image</label>
        <input type="text" placeholder="image url"/>
      </div>
      <input type="submit"/>
    </form>
  )
}

export default Form