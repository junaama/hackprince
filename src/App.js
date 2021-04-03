import './App.css';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard'
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
      </Switch>
      Footer
    </div>
  );
}

export default App;
