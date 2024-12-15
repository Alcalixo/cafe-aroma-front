import React from 'react'
import './card.css'
import logo from "../../../assets/img/logo-cafe-aroma.png"

function Card(data) {
  return (
    <div className='card-contacto'>
      <div className='card_logo'>
          <img src={`${logo}`} alt=''/>
      </div>
      <div className='card_data'>
           <h2>{data.name}</h2>
           <p>{data.descripcion}</p>
     
      </div>
    </div>
  )
}

export default Card