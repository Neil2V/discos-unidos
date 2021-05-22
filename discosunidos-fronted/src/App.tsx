import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Home from './Components/Home'
import Login from './Components/User/Login'
import Signup from './Components/User/Signup';
import Perfil from './Components/User/Perfil';
import DiscosList from './Components/Discos/DiscosList'

import './App.css';
import Navbar from './Components/Navbar/Navbar'
function App(){
  return (
    <BrowserRouter>
      <Navbar/>
      <switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Login" component={Login}/>
        <Route path="/Signup" component={Signup}/>
        <Route path="/Discos" component={DiscosList}/>
        <Route path="/Perfil" component={Perfil}/>


      </switch>
      </BrowserRouter>
  );
}

export default App
