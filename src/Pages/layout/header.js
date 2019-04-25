import React from 'react'

export default class extends React.Component {
  render() {
    return (
    <header class={"navbar"}>
      <section class={"navbar-section"}>
        <a href="#" class={"btn btn-link"}>Docs</a>
        <a href="#" class={"btn btn-link"}>Examples</a>
      </section>
      <section class="navbar-center">
        <figure class="avatar avatar-x1" style={{backgroundColor: "#fff"}}>
          <img src={"https://data.whicdn.com/images/321539311/original.png?t=1540824503"} alt="..." />
        </figure>
      </section>
      <section class={"navbar-section"}>
        <a href="#setup" class={"btn btn-link"}>Configuração</a>
        <a href="#" class={"btn btn-link"}>GitHub</a>
      </section>
    </header>
    )
  }
}