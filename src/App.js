import './App.css';
import { createBrowserHistory } from 'history';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import { Router, Switch } from 'react-router';
import Home from './pages/Home/Home';
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
