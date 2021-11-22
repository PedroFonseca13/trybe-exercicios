import React, { Component } from 'react';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const atividades = ['Acordar', 'Agradecer', 'Ir ao banheiro', 'Fumar unzinho', 'Ler sobe o Galo' ]

class App extends Component {
  render() {
    return (
      <ul>
        { atividades.map((atividade) => Task(atividade))}
      </ul>
    );
  }
}

export default App;
