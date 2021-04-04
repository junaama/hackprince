import './App.css';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard'
import Register from './components/UserAuth/Register'
import Login from './components/UserAuth/Login'
import Nav from './components/Layout/Nav'
import Footer from './components/Layout/Footer'
import {Route,Switch} from 'react-router'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/dashboard" component={Dashboard}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
