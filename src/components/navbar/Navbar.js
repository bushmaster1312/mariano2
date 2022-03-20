import React from 'react'
import logo from "../../assets/img/header-simpsons.gif"
import { Link } from 'react-router-dom'
import '../navbar/Navbar.css'

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid ">
      <img src={logo} alt="bart"/> 
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link fs-2 active" aria-current="page" to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fs-2" to="/blog">Blog</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fs-2" to="/contacto"> Contacto</Link>
          </li>
        
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  </div>
  )
}

export default Navbar