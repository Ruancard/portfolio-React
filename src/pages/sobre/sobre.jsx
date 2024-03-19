import React, { Component } from 'react'
import Header from '../../components/header/header'

export default class sobre extends Component {
  render() {
    return (
      <div>
        < Header />
        <main className="container-sobre">
            <div className="textos-sobre">
               <h1>Quem sou eu?</h1>
               <h3>Olá, meu nome é Ruan, e sou um desenvolvedor Full-Stack. Tenho experiência em criar experiências de usuário ricas e intuitivas usando HTML, CSS e JavaScript. Possuo habilidades de design, além de técnicas de codificação.</h3>
               <h1>Por que eu escolhi o Full-Stack?</h1>
               <h3>Eu escolhi o Full-Stack pois é uma área que me permite desenvolver todo tipo de aplicação com base nos meus conhecimentos, trabalhando sempre com inovações e novas tecnologias.</h3>
            </div>
            <div className="imagem-sobre">
               <img src="../img/banners/pesonagem.png" alt="ilustração do criador do Portfolio"/>
            </div>
        </main>
      </div>
    )
  }
}
