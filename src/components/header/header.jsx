import { Link } from 'react-router-dom';
import React, { Component } from 'react'

export default class header extends Component {
  render() {
    return (
     <header>
          <Link to={`/`}><h3>&lt;Ruancard /&gt;</h3></Link>
          <nav className="nav">

               <Link to={`/`}><h4>Home</h4></Link>
               <Link to={`/sobre`}><h4>Sobre</h4></Link>
               <Link to={`/projetos`}><h4>Projetos</h4></Link>
               <Link to={`/habilidades`}><h4>Habilidades</h4></Link>
               <Link to={`/contatos`}><h4>Contatos</h4></Link>
          </nav>
          <button className="menu-button">
               <i className="fa-solid fa-bars"></i>
          </button>
          <div className="contatos">
               <a href="https://www.linkedin.com/in/ruancard/"><i className="fa-brands fa-linkedin-in"></i></a>
               <a href="https://github.com/Ruancard"><i className="fa-brands fa-github"></i></a>
          </div>
     </header>
    )
  }
}
