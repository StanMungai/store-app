import React,{ useState, useEffect } from 'react'
import {FaCaretDown} from "react-icons/fa"

function Partners() {
  const [partners, setPartners] = useState([])
  const [hidden, setHidden] = useState(true)

  function hideContent() {
    setHidden(!hidden)
  }

  useEffect(() => {
    fetch("https://ujenzico-ltd.herokuapp.com/partners")
      .then((response) => response.json())
      .then((partners) => setPartners(partners))
  }, [])
  
  return (
    <section className='partners'>

      <div className='desc'>
        {partners.map((partner) =>(
        <div key={partner.id} className='sub'>
          <h2 className='coname' >{partner.company}<FaCaretDown onClick={hideContent} className='caret'/> </h2>
          {hidden ? null :
          <div className='content'>
            {partner.description}
          </div> }
        </div>
        ))}
      </div>
    </section>
  )
}

export default Partners