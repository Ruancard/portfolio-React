import React, { Component } from 'react'
import Header from '../../components/header/header'

export default class habilidades extends Component {
  render() {
    return (
      <div>
        < Header />
        <main class="habilidades">
          <h1>O que eu consigo fazer?</h1>
          <div class="oq-faco">
               <div class="oq-faco-textos">
                    <h2><i class="fa-solid fa-up-right-and-down-left-from-center"></i><br/>Responsividade</h2>
                    <h3>desenvolver sites responsivos, garantindo uma experiência de usuário excelente em desktops, tablets e smartphones.</h3>
               </div>
               <div class="oq-faco-textos">
                    <h2><i class="fa-solid fa-glasses"></i><br/>Acessibilidade</h2>
                    <h3>criar sites acessíveis, assegurando que usuários com diferentes habilidades possam navegar e interagir sem barreiras.</h3>
               </div>
               <div class="oq-faco-textos">
                    <h2><i class="fa-solid fa-chart-line"></i><br/>Otimização</h2>
                    <h3>desenvolver sites de otimizados, melhorando a experiência do usuário e o ranking nos motores de busca.</h3>
               </div>
          </div>
          <h1>Tecnologias</h1>
          <div class="tecnologias">
               <img src="../img/tecnologias/react.svg" alt="reactjs"/>
               <img src="../img/tecnologias/postgresql.svg" alt="postsgresql"/>
               <img src="../img/tecnologias/nodejs.svg" alt="nodejs"/>
               <img src="../img/tecnologias/css.svg" alt="css"/>
               <img src="../img/tecnologias/python.svg" alt="python"/>
               <img src="../img/tecnologias/html.svg" alt="html"/>
               <img src="../img/tecnologias/mongodb.svg" alt="mongodb"/>
               <img src="../img/tecnologias/sass.svg" alt="sass"/>
               <img src="../img/tecnologias/docker.svg" alt="docker"/>
               <img src="../img/tecnologias/mysql.svg" alt="mysql"/>
               <img src="../img/tecnologias/javascript.svg" alt="javascript"/>
          </div>
     </main>
      </div>
    )
  }
}
