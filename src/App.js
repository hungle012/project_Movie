import './App.css';
import './assets/style/main.scss';
import { createBrowserHistory } from 'history';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import { BrowserRouter, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './templates/UserTemplate/Layout/Login/Login'
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import Register from './templates/UserTemplate/Layout/Register/Register';
import Detail from './pages/Detail/Detail'
import { CheckoutTemplate } from './templates/CheckoutTemplate/CheckoutTemplate';
import SelectSeat from './Components/SelectSeat/SelectSeat';

export const history = createBrowserHistory();
function App() {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <HomeTemplate exact path="/" Component={Home} />
        <HomeTemplate exact path="/detail" Component={Detail} />
        <UserTemplate exact path="/login" Component={Login} />
        <UserTemplate exact path="/register" Component={Register} />
        <CheckoutTemplate exact path="/checkout/" Component={SelectSeat} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
