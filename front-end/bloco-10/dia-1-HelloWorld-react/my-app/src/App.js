import React from 'react'
import './App.css'

const Task = value => {
  return <li>{value}</li>
}
const toDo = ['Acordar', 'Tomar café', 'Ler sobre o galo', 'Ir trabalhar']

class App extends React.Component {
  render() {
    return <ul>{toDo.map(task => Task(task))}</ul>
  }
}

export default App
