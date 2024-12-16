import React from 'react'
import Card from './Card'
import './cardList.css'

function CardList() {
  return (
    <>

    <div className='container-cardList'>
        <Card name='Direccion' descripcion='San Martin 1234' logo='maps.png'/>
        <Card name='Horario' descripcion='7 a 12 - 16 a 21' logo='reloj.png'/>
        <Card name='Telefono' descripcion='3794-123456' logo='phone.png'/>
    </div>
     
   </>
  )
}

export default CardList