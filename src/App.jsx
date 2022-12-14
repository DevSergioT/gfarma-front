import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { Input } from './componentes/input'
import db from '.'

const api = axios.create({
  baseURL: "http://localhost3001"
})


function App() {

  const getUsers = () => {
    useEffect(async () => {
      try {
        const users = api.get('/users');
        console.log(users);
      } catch (error) {
        console.log(error);
      };
    });
  };

  return (


    <div className="container">

      <div className='logo'>
        <img className='img' src='logo-gfarma.jpg' alt='logomarca' />
      </div>

      <div className='container-section cliente'>
        <h2>Clientes cadastrados</h2>

        <ul className='list'>
          {users.map((user) => (
            <li key={user.id}>
              Id: {user.id}<br /> E-mail: {user.email}<br />  Nome: {user.name}<br /> Idade: {user.age}</li>
          ))}

        </ul>
      </div>

      <div className='div1'></div>

      <div className='container-section'>
        <h2>Adicionar novo cliente</h2>
        <Input
          type='text'
          placeholder='Nome@email.com'
        />
        <input className='input' type='number' placeholder='posição' onChange={event => { setId(event.target.value) }} />

        <input className='input' type='e-mail' placeholder='nome@email.com' onChange={event => setEmail(event.target.value)} />

        <input className='input' type='text' placeholder='Nome' onChange={event => setName(event.target.value)} />

        <input className='input' type='number' placeholder='Idade' onChange={event => setAge(event.target.value)} />

        <button className='btn add' type='submit' onClick={newUsers}>Adicionar cliente</button>
      </div>

      <div className='div2'></div>

      <div className='container-section'>
        <h2>Atualizar cliente</h2>

        <input className='input' type='e-mail' placeholder='nome@email.com' />
        <input className='input' type='text' placeholder='Nome' />
        <input className='input' type='number' placeholder='Idade' />
        <button className='btn atualizar' type='subimit' >Atualizar cadastro</button>
      </div>

      <div className='div1'></div>

      <div className='container-section'>
        <h2>Deletar cliente</h2>

        <ul className=' delet'>
          {users.map((user) => (
            <li key={user.id}>
              Id: {user.id}<br /> Nome: {user.name}</li>
          ))}

        </ul>


        <input className='input' type='number' placeholder='Digite a posição' onChange={excluir => setId(excluir.target.value)} />

        <button className='btn delete' type='subimit' onClick={excluirName} >Deletar cadastro</button>
      </div>


    </div>
  )
}

export default App
