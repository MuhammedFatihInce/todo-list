import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import TodoForm from './components/TodoForm'
import Todos from './components/Todos'


function App() {

  return (
    <div >
      <Header/>
      <TodoForm/>
      <Todos/>
    </div>
    
  )
}

export default App
