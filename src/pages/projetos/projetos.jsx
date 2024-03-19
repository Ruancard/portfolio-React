import React, { Component } from 'react'
import Header from '../../components/header/header'

export default class projetos extends Component {
  render() {
    return (
      <div className='projetos'>
        < Header />
        <main className="container-sobre">
        <div class="card">
               <div class="img-projeto">
                    <img src="../img/projetos/habitos.png" alt="imagem do projeto"/>
               </div>
               <h3>Website- Hábitos sustentaveis</h3>
               <div class="descricao">
                    <div class="card-tecnologias">
                         <img src="../img/tecnologias/html.svg" alt="HTML5"/>
                         <img src="../img/tecnologias/css.svg" alt="CSS3"/>
                    </div>
                    <div class="card-botoes">
                         <a href="https://github.com/Ruancard/website-habitos-sustentaveis"><h4>Repositorio</h4></a>
                         <a href="https://ruancard.github.io/website-habitos-sustentaveis/"><h4>deploy</h4></a>
                    </div>
               </div>
          </div>
          <div class="card">
               <div class="img-projeto">
               </div>
               <h3>em breve</h3>
               <div class="descricao">
               </div>
          </div>
          <div class="card">
               <div class="img-projeto">
               </div>
               <h3>em breve</h3>
               <div class="descricao">
               </div>
          </div>
          <div class="card">
               <div class="img-projeto">
               </div>
               <h3>em breve</h3>
               <div class="descricao">
               </div>
          </div>
          <div class="card">
               <div class="img-projeto">
               </div>
               <h3>em breve</h3>
               <div class="descricao">
               </div>
          </div>
          <div class="card">
               <div class="img-projeto">
               </div>
               <h3>em breve</h3>
               <div class="descricao">
               </div>
          </div>
        </main>
      </div>
    )
  }
}
