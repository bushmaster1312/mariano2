import React from 'react'
import "./Inicio.css"
import Carrousel from "../../components/carrousel"
import Cards from "../../components/cards"

const Inicio = () => {
  return (
    <div className='container'>
      <div className='carrousel'>
        <Carrousel />
      </div>
      <div>
        <Cards/>
      </div>






    </div>
  )
}

export default Inicio