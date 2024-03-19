import React, { Component } from 'react'
import Header from '../../components/header/header'

export default class contatos extends Component {
  render() {
    return (
      <div>
        < Header />
        <main class="main-contatos">
          <div class="contatos-email">
          <h2><i class="fa-solid fa-envelope"></i><br/>Email:</h2>
          <h3>ruan.cm47@gmail.com</h3>
          </div>
          <div class="contatos-celular">
          <h2><i class="fa-solid fa-phone"></i><br/>Celular:</h2>
          <h3>(11) 94031-1434</h3>
          </div>
          <div class="contatos-linkedin">
          <h1><i class="fa-brands fa-linkedin"></i><br/>Linkedin:</h1>
          <h3><a href="https://www.linkedin.com/in/ruancard/">https://www.linkedin.com/in/ruancard/</a></h3>
          </div>
          <div class="contatos-github">
          <h1><i class="fa-brands fa-github"></i><br/>GitHub:</h1>
          <h3><a href="https://github.com/Ruancard">https://github.com/Ruancard</a></h3>
          </div>
     </main>
      </div>
    )
  }
}
