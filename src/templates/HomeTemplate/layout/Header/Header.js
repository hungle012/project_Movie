import React, { Fragment } from 'react';
import { useSelector } from "react-redux";
import { Link, NavLink } from 'react-router-dom';
import { Sticky } from './Sticky';
import _ from 'lodash';
import { TOKEN, USER_LOGIN } from '../../../../util/settings/config';
import { history } from '../../../../App';

export default function Header() {

    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)

    const renderLogin = () => {
        if (_.isEmpty(userLogin)) {
            return <Fragment>
                <div className="user">
                    <a href="/">
                        <i className="fas fa-user" />
                    </a>
                </div>
                <div className="user-name dropdown">
                    <p className="">
                        <NavLink to="/login" >Đăng nhập</NavLink>
                    </p>
                </div>
            </Fragment>
        }

        if (userLogin.maLoaiNguoiDung === 'QuanTri') {
            return <Fragment>
                <div className="user logged">
                    <p>
                        {userLogin.taiKhoan.slice(0, 1)}
                    </p>
                </div>
                <div className="user-name">
                    <p type="button" className="btn dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-expanded="false" data-offset="10,20">
                        {userLogin.taiKhoan}
                    </p>
                    <div className="dropdown-menu drop-menu" aria-labelledby="dropdownMenuOffset">
                        <NavLink className="dropdown-item" to="/admin/users">Admin</NavLink>
                        <button className="dropdown-item" onClick={() => {
                            localStorage.removeItem(USER_LOGIN);
                            localStorage.removeItem(TOKEN);
                            history.push('/');
                            window.location.reload();
                        }}>Đăng xuất</button>
                    </div>
                </div>
            </Fragment>
        }
        return <Fragment>
            <div className="user logged">
                <p>
                    {userLogin.taiKhoan.slice(0, 1)}
                </p>
            </div>
            <div className="user-name">
                <p type="button" className="btn dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-expanded="false" data-offset="10,20">
                    {userLogin.taiKhoan}
                </p>
                <div className="dropdown-menu drop-menu" aria-labelledby="dropdownMenuOffset">
                    <NavLink className="dropdown-item" to="/profile">Tài khoản</NavLink>
                    <button className="dropdown-item" onClick={() => {
                        localStorage.removeItem(USER_LOGIN);
                        localStorage.removeItem(TOKEN);
                        history.push('/');
                        window.location.reload();
                    }}>Đăng xuất</button>
                </div>
            </div>
        </Fragment>
    }

    return (
        <header className="header">
            <Sticky length='20'>
                <div className="header__nav " id="nav-test">
                    <nav className="navbar navbar-expand-md ">
                        <NavLink className="header__logo" to="/">
                            <img src="../img/logo.png" alt="anh_LOGO" className="mb-0" />
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mt-0 mx-auto">
                                <li className="nav-item">
                                    <Link className="nav-link text-left px-4 text-md-center" to="/" onClick={() => {
                                        let scroll = () => {
                                            let lichChieu = document.getElementById("lichChieu");
                                            lichChieu.scrollIntoView({ behavior: 'smooth' })
                                        }
                                        setTimeout(scroll, 0);
                                    }}>Lịch chiếu</Link>
                                </li>
                                <li className="nav-item  ">
                                    <Link className="nav-link text-left px-4 text-md-center" to="/" onClick={() => {
                                        let scroll = () => {
                                            let lichChieu = document.getElementById("cumRap");
                                            lichChieu.scrollIntoView({ behavior: 'smooth' })
                                        }
                                        setTimeout(scroll, 0);
                                    }}>Cụm rạp </Link>
                                </li>
                                <li className="nav-item ">
                                    <Link className="nav-link text-left px-4 text-md-center" to="/" onClick={() => {
                                        let scroll = () => {
                                            let lichChieu = document.getElementById("tinTuc");
                                            lichChieu.scrollIntoView({ behavior: 'smooth' })
                                        }
                                        setTimeout(scroll, 0);
                                    }}>Tin tức </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-left px-4 text-md-center" to="/" onClick={() => {
                                        let scroll = () => {
                                            let lichChieu = document.getElementById("ungDung");
                                            lichChieu.scrollIntoView({ behavior: 'smooth' })
                                        }
                                        setTimeout(scroll, 0);
                                    }}>Ứng dụng</Link>
                                </li>
                            </ul>
                            <div className="header__detail">
                                {renderLogin()}
                            </div>
                        </div>

                    </nav>
                </div>
            </Sticky>
        </header>

    )
}
