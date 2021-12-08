import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layChiTietPhongVeAction } from '../../redux/action/QuanLyDatVeAction';
import CountDown from './CountDown';

export default function Checkout(props) {

    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);

    const { chiTietPhongVe } = useSelector(state => state.QuanLyDatVeReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        const action = layChiTietPhongVeAction(props.match.params.id);

        dispatch(action)
    }, [])

    console.log(chiTietPhongVe);

    const { thongTinPhim, danhSachGhe } = chiTietPhongVe;

    return (
        <div className="container-fluid checkout">
            <div className="row checkout__content">
                <div className="col-9 checkout__reservations">
                    <div className="checkout__top p-3 row">
                        <div className="checkout__theater col-7">
                            <img src="https://picsum.photos/70" alt="" />
                            <div className="ml-3 py-2">
                                <p className="theater--name">{thongTinPhim.tenCumRap}</p>
                                <p className="theater--date">
                                    {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} - {thongTinPhim.tenRap}
                                </p>
                            </div>
                        </div>
                        <div className="checkout__countdown col-5">
                            <p>Thời gian giữ vé</p>
                            <CountDown Minute="0" Seconds="5" />

                        </div>
                    </div>
                    <div className="checkout__screen text-center">
                        <img src="../img/checkout/screen.png" alt="" />
                    </div>
                </div>
                <div className="col-3 checkout__bills">
                    <div className="checkout__money text-center mt-3">
                        <h2>0đ</h2>
                    </div>
                    <hr />
                    <div className="checkout__info">
                        <p className="info--name">{thongTinPhim.tenPhim}</p>
                        <p className="info--theater">Địa điểm: {thongTinPhim.tenCumRap}</p>
                        <p className="info--time">Ngày chiếu: {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} - {thongTinPhim.tenRap}</p>
                    </div>
                    <hr />
                    <div className="checkout__seat row">
                        <div className="col-9 seat">
                            <span>Ghế</span>
                        </div>
                        <div className="col-3 money p-0">
                            <span>100000đ</span>
                        </div>
                    </div>
                    <hr />
                    <div className="checkout__client">
                        <div className="client--email">
                            <span>Email</span>
                            <p>{userLogin.email}</p>
                        </div>
                        <hr />
                        <div className="client--phone">
                            <span>Phone Number</span>
                            <p>{userLogin.soDT}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="checkout__bottom">
                        <div className="checkout__note p-4">
                            <div className="left mt-1">
                                <i class="fas fa-exclamation-circle"></i>
                            </div>
                            <div className="right text-center">
                                <p>
                                    Vé đã mua không thể đổi hoặc hoàn tiền
                                </p>
                                <p>
                                    Mã vé sẽ được gửi qua tin nhắn
                                    <span> ZMS </span>
                                    (tin nhắn Zalo) và
                                    <span> Email </span>
                                    đã nhập.
                                </p>
                            </div>
                        </div>
                        <div className="checkout__btn">
                            Đặt vé
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
