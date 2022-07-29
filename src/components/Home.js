import React from 'react'
import {FcLike, FcDislike} from "react-icons/fc"
import Form from './Form'

function Home({items}) {
  return (
    <main className='main'>
      {items.map((item) => (
        <div className='card'>
          <img src={item.image} alt="items" style={{width:"100%"}}/>
          <div className='container'>
            <h3>{item.name}</h3>
            <h4>{item.location}</h4>
            <button className='btn'><FcLike/>Like</button>
            <button className='btn'><FcDislike/>Dislike</button>
          </div>
        </div>
      ))}
      <Form />
    </main>
  )
}

export default Home