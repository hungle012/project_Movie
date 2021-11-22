import './App.css';
import './assets/style/main.scss';
import { createBrowserHistory } from 'history';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import { Router, Switch, Route } from 'react-router';
import Home from './pages/Home/Home';
// import ListMovieComponents from './Components/ListMovieComponents/ListMovieComponents';
// import Login from './Components/Login/Login'
export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/" exact Component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
