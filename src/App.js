import './App.css';
import './assets/style/main.scss';
import { createBrowserHistory } from 'history';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import { Router, Switch } from 'react-router';
import Home from './pages/Home/Home';
import ListMovieComponents from './Components/ListMovieComponents/ListMovieComponents'
export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/" exact Component={Home} />
        <HomeTemplate path="/listmovie" exact Component={ListMovieComponents} />
      </Switch>
    </Router>
  );
}

export default App;
