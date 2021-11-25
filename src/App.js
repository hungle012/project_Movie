import './App.css';
import './assets/style/main.scss';
import { createBrowserHistory } from 'history';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import { Router, Switch, Route } from 'react-router';
import Home from './pages/Home/Home';
import Login from './templates/UserTemplate/Layout/Login/Login'
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import Register from './templates/UserTemplate/Layout/Register/Register';
export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate exact path="/"  Component={Home} />
        <UserTemplate exact path="/login"  Component={Login} />
        <UserTemplate exact path="/register"  Component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
