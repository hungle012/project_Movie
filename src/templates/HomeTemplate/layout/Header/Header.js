import React from 'react';
import { NavLink } from 'react-router-dom';
import { StickyNav } from 'react-js-stickynav'
import 'react-js-stickynav/dist/index.css'


export default function Header() {

    return (
        <header className="header">
            <StickyNav length='20'>
                <div className="header__nav " id="nav-test">
                    <nav className="navbar navbar-expand-md ">
                        <NavLink className="header__logo" to="/">
                            <img src="./img/logo.png" alt="anh_LOGO" className="mb-0" />
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mt-0 mx-auto">
                                <li className="nav-item">
                                    <a className="nav-link text-left px-4 text-md-center" href="/">Lịch chiếu</a>
                                </li>
                                <li className="nav-item  ">
                                    <a className="nav-link text-left px-4 text-md-center" href="/">Cụm rạp </a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link text-left px-4 text-md-center" href="/">Tin tức </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-left px-4 text-md-center" href="/">Ứng dụng</a>
                                </li>
                            </ul>
                        </div>
                        <div className="header__detail">
                            <div className="user">
                                <a href="/">
                                    <i className="fas fa-user" />
                                </a>
                            </div>
                            <div className="user-name dropdown">
                                <p className="">
                                    <NavLink to="/login" >Đăng nhập</NavLink>
                                </p>
                                {/* <p type="button" className="btn dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-expanded="false" data-offset="10,20">Đăng nhập </p>
                            <div className="dropdown-menu drop-menu" aria-labelledby="dropdownMenuOffset">
                                <a className="dropdown-item" href="#">My account</a>
                                <a className="dropdown-item" href="#">Log out</a>
                            </div> */}
                            </div>
                        </div>
                    </nav>
                </div>
            </StickyNav>
        </header>

    )
}
