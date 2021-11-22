import React, { useEffect } from 'react'

export default function Header() {
    useEffect(() => {
        let fixedHeader = (e) => {
            let header = document.getElementById("myHeader");
            let sticky = header.offsetTop;
            if (window.pageYOffset > sticky) {
                header.classList.add("header__fixed");
            } else {
                header.classList.remove("header__fixed");
            }
        };
        window.addEventListener('scroll', fixedHeader);
        return () => {
            window.removeEventListener('scroll', fixedHeader);
        };

    }, [])
    return (
        <header className="header" id="myHeader">
            <div className="header__nav " id="nav-test">
                <nav className="navbar navbar-expand-md ">
                    <a className="header__logo" href="/">
                        <img src="./img/logo.png" alt="anh_LOGO" className="mb-0" />
                    </a>
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
                                <a className="nav-link text-left px-4 text-md-center" href="/">Đăng nhập</a>
                            </li>
                        </ul>
                    </div>
                    <div className="header__detail">
                        <div className="user">
                            <a href="/">
                                <i className="fas fa-user" />
                            </a>
                        </div>
                        <div className="user-name">
                            <p>Người dùng</p>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}