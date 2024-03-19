import React, { Component } from 'react'
import Header from '../../components/header/header'

export default class home extends Component {
  render() {
    return (
      <div className='home'>
      < Header />
      <main>
          <div className="textos">
               <h3>Olá mundo, eu sou</h3>
               <h1>Ruan Cardoso</h1>
               <h3>Desenvolvedor Full-stack</h3>
               <div className="botoes">
                    <a href="https://www.linkedin.com/in/ruancard/"><h2>Linkedin</h2></a>
                    <a href="https://github.com/Ruancard"><h2>GitHub</h2></a>
               </div>
          </div>    
     </main>
     </div>
    )
  }
}
