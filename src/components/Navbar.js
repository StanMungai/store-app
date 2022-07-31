import React from 'react'
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <header className='nav'>
      <img className="logo" src="https://images.unsplash.com/photo-1567361808960-dec9cb578182?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=895&q=80" alt='logo'/>
      <div className='title'>
        <h1 id='title'>Ujenzi Constructors Limited</h1>
        <p id='slogan'>Let's build your future together</p>
      </div>
      <NavLink to="/" className="link">Home</NavLink>
      <NavLink to="/partners" className="link">Partners</NavLink>
      <NavLink to="/contacts" className="link">Contacts</NavLink>
    </header>
  )
}

export default Navbar