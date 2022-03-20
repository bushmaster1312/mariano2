import React from 'react'
import '../Contacto/Contacto.css'

const Contacto = () => {
  return (
    <div className='contacto'>
      <div className='container contactos '>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
        </div>
        <button className='buttom'>enviar</button>
      </div>
    </div>
  )
}

export default Contacto