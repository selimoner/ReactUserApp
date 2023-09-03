import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Users from './components/Users';
import AddUser from './components/AddUser';

class App extends Component {

  render() {
    return (
      <div className='container'>
        <br />
        {/* Oluşturduğumuz 'User' Componentini kullanıyoruz */}
        <Navbar title="User App"></Navbar>

        <AddUser></AddUser>

        <Users></Users>
      </div>
    );
  }
}

export default App
