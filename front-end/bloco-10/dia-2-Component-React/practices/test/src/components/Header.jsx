import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Galo Doido</a>
              <a href="#">Jogos</a>
              <a href="#">Ingressos</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
