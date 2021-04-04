import './App.css';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard'
import Recipe from './components/Recipe/Recipe'
import Register from './components/UserAuth/Register'
import Login from './components/UserAuth/Login'
import {Route,Switch} from 'react-router'
function App() {
  return (
    <div className="App">
      hello world
      Nav
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/recipe" component={Recipe}/>
      </Switch>
      Footer
    </div>
  );
}

export default App;
