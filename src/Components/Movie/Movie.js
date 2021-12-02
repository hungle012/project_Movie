import React from 'react'
import { NavLink } from 'react-router-dom';


function Movie(props) {
    const { LichChieu } = props;
    return (
        <div className={LichChieu === "before" ? "movie__item" : "movie__itemSapChieu"}>
            <div className="movie__img">
                <img src={props.movie.hinhAnh} alt="film-1" className="img-fluid" />
                <div className="icon__play">
                    <a className="popup-youtube" href={props.movie.trailer}>
                        <i className="fa fa-play" />
                    </a>
                </div>
                <div className="danhGia" style={{ visibility: props.LichChieu === "before" ? "visible" : "hidden"}}>{props.movie.danhGia}<i className="fa fa-star icon__start" />
                </div>
                <div className="ngayChieu" style={{ display: props.LichChieu === "before" ? "none" : "block" }}>{new Date(props.movie.ngayKhoiChieu).getDate()}/{new Date(props.movie.ngayKhoiChieu).getMonth() + 1}</div>
                <div className="overlay" /></div>
            <div className="movie__info">
                <p className="tenPhim">{props.movie.tenPhim}</p>
                <span className="thoiLuong">120 phút</span>
                <a href={`/detail/${props.movie.maPhim}`}><div className="movie__btnMuaVe button__muaVe">Mua Vé <i className="fa fa-arrow-circle-down icon__down" />
                </div>
                </a>
            </div>
        </div>
    )

}


export default Movie;
