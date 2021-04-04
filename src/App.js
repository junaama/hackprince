import './App.css';
import React, {useState} from 'react';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard'
import Recipe from './components/Recipe/Recipe'
import Register from './components/UserAuth/Register'
import Login from './components/UserAuth/Login'
import Nav from './components/Layout/Nav'
import Footer from './components/Layout/Footer'
import Generator from './components/Generator'
import {Route,Switch} from 'react-router'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/dashboard" component={Generator}/>
        <Route path="/recipe" component={Recipe}/>
        <Route path="/generator" component={Generator}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
