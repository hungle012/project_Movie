import './App.css';
import './assets/style/main.scss';
import { createBrowserHistory } from 'history';
import { Route, Router } from 'react-router';
import { Switch } from 'react-router-dom';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import UserTemplate from './templates/UserTemplate/UserTemplate';
import CheckoutTemplate from './templates/CheckoutTemplate/CheckoutTemplate';
import Home from './pages/Home/Home';
import Login from './templates/UserTemplate/Layout/Login/Login'
import Register from './templates/UserTemplate/Layout/Register/Register';
import Detail from './pages/Detail/Detail'
import Checkout from './Components/Checkout/Checkout';

export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate exact path="/" Component={Home} />
        <HomeTemplate exact path="/detail" Component={Detail} />
        <UserTemplate exact path="/login" Component={Login} />
        <UserTemplate exact path="/register" Component={Register} />
        <CheckoutTemplate exact path="/checkout" Component={Checkout} />
      </Switch>
    </Router>
  );
}

export default App;
