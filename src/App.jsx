import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'


const api = axios.create({
  baseURL: 'http://localhost:3000'
})

function App() {

  const [users, setUsers] = useState([])
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  useEffect(() => {
    api.get("/cliente").then((response) => {

      console.log(response.data)
      setUsers(response.data)
    })
  }, [])


  function newUsers() {
    api.post('/cliente', {
      email, name, age,
    }).then((response) => {
      alert("cadastrado com sucesso")
    })
  }

  return (
    <div className="container">
      <div className='logo'>
        <img className='img' src='logo-gfarma.jpg' alt='logomarca' />
      </div>
      <div className='list-client'>
        <h2>Clientes</h2>
        <ul className='list'>
          {users.map((user) => (
            <li key={user.name}>
              E-mail: {user.email}<br />  Nome: {user.name}<br /> Idade: {user.age}</li>
          ))}

        </ul>
      </div>
      <div className='container-add'>

        <h2>Adicionar novo cliente</h2>

        <input className='input' type='e-mail' placeholder='nome@email.com' onChange={event => setEmail(event.target.value)} />
        <input className='input' type='text' placeholder='Nome' onChange={event => setName(event.target.value)} />
        <input className='input' type='number' placeholder='Idade' onChange={event => setAge(event.target.value)} />

        <button className='button' type='subimit' onClick={newUsers}>Adicionar cliente</button>
      </div>

    </div>
  )
}

export default App
