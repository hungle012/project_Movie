import './App.css';
import './assets/style/main.scss';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import { Switch } from 'react-router-dom';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import UserTemplate from './templates/UserTemplate/UserTemplate';
import CheckoutTemplate from './templates/CheckoutTemplate/CheckoutTemplate';
import Home from './pages/Home/Home';
import Login from './templates/UserTemplate/Layout/Login/Login'
import Register from './templates/UserTemplate/Layout/Register/Register';
import Detail from './pages/Detail/Detail';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import films from './pages/admin/films/Films';
import AddFilm from './pages/admin/films/addFilm/AddFilm';
import EditFilm from './pages/admin/films/editFilm/EditFilm'
import Showtime from './pages/admin/films/showtime/Showtime';
import Users from './pages/admin/Users/Users'
import AddUsers from './pages/admin/Users/addUsers/AddUsers';
import Checkout from './pages/Checkout/Checkout';
import Profile from './pages/Profile/Profile';
import Loading from './Components/Loading/Loading';
import EditUsers from './pages/admin/Users/editUsers/EditUsers'
import { Fragment } from 'react';

export const history = createBrowserHistory();
function App() {
  return (
    <Fragment>
      <div className="snowflakes" aria-hidden="true">
          <div className="snowflake">
            ❅
          </div>
          <div className="snowflake">
            ❆
         </div>
          <div className="snowflake">
            ❅
          </div>
          <div className="snowflake">
            ❆
          </div>
          <div className="snowflake">
            ❅
          </div>
          <div className="snowflake">
            ❆
          </div>
          <div className="snowflake">
            ❅
          </div>
          <div className="snowflake">
            ❆
          </div>
          <div className="snowflake">
            ❅
          </div>
          <div className="snowflake">
            ❆
          </div>
          <div className="snowflake">
            ❅
          </div>
          <div className="snowflake">
            ❆
          </div>
        </div>
      <Router history={history}>
        <Loading />
        <Switch>
          <HomeTemplate exact path="/" Component={Home} />
          <HomeTemplate exact path="/detail/:id" Component={Detail} />
          <UserTemplate exact path="/profile" Component={Profile} />
          <UserTemplate exact path="/login" Component={Login} />
          <UserTemplate exact path="/register" Component={Register} />

          <CheckoutTemplate exact path="/checkout/:id/:maPhim" Component={Checkout} />

          <AdminTemplate path="/admin/films" exact Component={films} />
          <AdminTemplate path="/admin/films/addfilm" exact Component={AddFilm} />
          <AdminTemplate path="/admin/films/editFilm/:id" exact Component={EditFilm} />
          <AdminTemplate path="/admin/films/showtime/:id/:tenPhim" exact Component={Showtime} />

          <AdminTemplate path="/admin/users" exact Component={Users} />
          <AdminTemplate path="/admin/users/addUser" exact Component={AddUsers} />
          <AdminTemplate path="/admin/users/editUser/:taiKhoan" exact Component={EditUsers} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
