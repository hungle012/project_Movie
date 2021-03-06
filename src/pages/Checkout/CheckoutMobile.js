import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { datVeAction, layChiTietPhongVeAction, layLogoRapAction } from '../../redux/action/QuanLyDatVeAction';
import { CHUYEN_TAB_ACTIVE, DAT_GHE } from '../../redux/types/QuanLyDatVeType';
import { ThongTinDatVe } from '../../_core/models/ThongTinDatVe';
import CountDown from './CountDown';
import _ from 'lodash';
import { Tabs } from 'antd';
import { history } from "../../App";
import Swal from 'sweetalert2';

function CheckoutMobile(props) {

    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);

    const { chiTietPhongVe, danhSachGheDangChon, danhSachGheNguoiKhacDat, logoRap } = useSelector(state => state.QuanLyDatVeReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        const action = layChiTietPhongVeAction(props.match.params.id);
        dispatch(action)
    }, []);

    useEffect(() => {
        const action = layLogoRapAction(props.match.params.maPhim);
        dispatch(action)
    }, [])


    const { thongTinPhim, danhSachGhe } = chiTietPhongVe;
    const { heThongRapChieu } = logoRap;

    let maRap = thongTinPhim.tenCumRap?.slice(0, 3);

    const renderLogo = () => {
        return heThongRapChieu?.map((item, index) => {
            let newMaRap = item.maHeThongRap?.slice(0, 3);
            if (newMaRap === 'Cin') {
                newMaRap = 'CNS';
            } else if (newMaRap === 'Gal') {
                newMaRap = 'GLX'
            }

            if (maRap === newMaRap) {
                return <img key={index} src={item.logo} alt="" width={70} height={70} />
            }


        })
    }

    const renderSeats = () => {
        return danhSachGhe.map((ghe, index) => {

            let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
            let classGheDaDat = ghe.daDat ? 'gheDaDat' : '';

            let classGheDangChon = '';
            let indexGheDangChon = danhSachGheDangChon.findIndex((gheDangChon) => gheDangChon.maGhe === ghe.maGhe);
            if (indexGheDangChon !== -1) {
                classGheDangChon = "gheDangChon";
            }

            let classGheNguoiKhacDat = '';
            let indexGheNguoiKhacDat = danhSachGheNguoiKhacDat.findIndex((gheNguoiKhacDat) => gheNguoiKhacDat.maGhe === ghe.maGhe);
            if (indexGheNguoiKhacDat !== -1) {
                classGheNguoiKhacDat = "gheNguoiKhacDat";
            }

            return <Fragment key={index}>
                <button
                    onClick={() => {
                        dispatch({
                            type: DAT_GHE,
                            gheDuocChon: ghe
                        })
                    }}
                    className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangChon} ${classGheNguoiKhacDat}`} >
                    <i className="fas fa-couch"></i>
                </button>

                {(index + 1) % 16 === 0 ? <br /> : ''}
            </Fragment>
        })
    }
    const tabActive = useSelector(state => state.QuanLyDatVeReducer.tabActive);

    const [btn, setBtn] = useState({
        btn1: 'block',
        btn2: 'block',
        btn3: 'none'
    })
    const [state, setState] = useState({
        step: '01. Ch???n gh???',
        color: 'gray',
        position1: '-100%'
    });
    useEffect(() => {
        if (danhSachGheDangChon.length !== 0) {
            setState({
                step: '01. Ch???n gh???',
                color: '#00b943',
                position1: '-100%'
            })
        } else {
            setState({
                step: '01. Ch???n gh???',
                color: 'gray',
                position1: '-100%'
            })
        }
    }, [danhSachGheDangChon.length])

    return (
        <div className="container-fluid checkoutMobile">
            <div className="row checkout__content">
                <div className="checkout__reservations">

                    <div className="checkout__top row">
                        <div className="checkout__header">
                            <button className='backToStep1' onClick={() => {
                                if (state.step === '01. Ch???n gh???') {
                                    history.goBack();
                                } else {
                                    setState({
                                        step: '01. Ch???n gh???',
                                        color: '#00b943',
                                        position1: '-100%'
                                    })
                                    setBtn({
                                        btn1: 'block',
                                        btn2: 'block',
                                        btn3: 'none'
                                    })
                                }
                            }} style={{ display: `${btn.btn1}` }}>
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            <div className="header--step">
                                <p>{state.step}</p>
                            </div>
                            <div className="header--user">
                                <span>{userLogin.taiKhoan.slice(0, 1)}</span>
                            </div>
                        </div>
                        <div className="checkout__theater col-8 col-sm-7 p-0">
                            {renderLogo()}
                            <div className="ml-2 ml-sm-3 py-2">
                                <p className="theater--name">{thongTinPhim.tenCumRap}</p>
                                <p className="theater--date">
                                    {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} - {thongTinPhim.tenRap}
                                </p>
                            </div>
                        </div>
                        <div className="checkout__countdown col-4 col-sm-3 p-0">
                            <p>Th???i gian gi??? v??</p>
                            <CountDown Minute="5" Seconds="0" />

                        </div>
                    </div>
                    <div className="checkout__screen text-center">
                        <img src="../../img/checkout/screen.png" alt="" />
                    </div>
                    <div className="checkout__seat row">
                        <div className="seat--col col-1 p-0">
                            <button disabled >A</button> <br />
                            <button disabled >B</button> <br />
                            <button disabled >C</button> <br />
                            <button disabled >D</button> <br />
                            <button disabled >E</button> <br />
                            <button disabled >F</button> <br />
                            <button disabled >G</button> <br />
                            <button disabled >H</button> <br />
                            <button disabled >I</button> <br />
                            <button disabled >J</button> <br />
                        </div>
                        <div className="seat--row col-11 col-sm-10 p-0">
                            {renderSeats()}
                        </div>
                        <div className="seat--note pt-4 col-12">
                            <div>
                                <button disabled className="ghe gheDangChon">
                                    <i className="fas fa-couch"></i>
                                </button>
                                <br />
                                <span>Gh??? ??ang ch???n</span>
                            </div>
                            <div>
                                <button disabled className="ghe">
                                    <i className="fas fa-couch"></i>
                                </button>
                                <br />
                                <span>Gh??? th?????ng</span>
                            </div>
                            <div>
                                <button disabled className="ghe gheVip">
                                    <i className="fas fa-couch"></i>
                                </button>
                                <br />
                                <span>Gh??? vip</span>
                            </div>
                            <div>
                                <button style={{ cursor: "auto" }} disabled className="ghe gheDaDat">
                                    <i className="fas fa-couch"></i>
                                </button>
                                <br />
                                <span>Gh??? ???? ?????t</span>
                            </div>
                            <div>
                                <button style={{ cursor: "auto" }} disabled className="ghe gheNguoiKhacDat">
                                    <i className="fas fa-couch"></i>
                                </button>
                                <br />
                                <span>Gh??? ng?????i kh??c ??ang ?????t</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="checkout__bottom">
                    <div className="seat--checked">
                        {_.sortBy(danhSachGheDangChon, ['stt']).map((gheDC, index) => {
                            let hangGhe = '';
                            let vtGhe = (gheDC.stt) / 16;
                            let soGhe = (gheDC.stt) % 16;
                            if (soGhe === 0) {
                                soGhe = 16;
                            }
                            // console.log(gheDC);
                            // console.log(soGhe);
                            if (vtGhe <= 1) {
                                hangGhe = `A${soGhe}`;
                            } else if (vtGhe <= 2) {
                                hangGhe = `B${soGhe}`;
                            } else if (vtGhe <= 3) {
                                hangGhe = `C${soGhe}`;
                            } else if (vtGhe <= 4) {
                                hangGhe = `D${soGhe}`;
                            } else if (vtGhe <= 5) {
                                hangGhe = `E${soGhe}`;
                            } else if (vtGhe <= 6) {
                                hangGhe = `F${soGhe}`;
                            } else if (vtGhe <= 7) {
                                hangGhe = `G${soGhe}`;
                            } else if (vtGhe <= 8) {
                                hangGhe = `H${soGhe}`;
                            } else if (vtGhe <= 9) {
                                hangGhe = `I${soGhe}`;
                            } else if (vtGhe <= 10) {
                                hangGhe = `J${soGhe}`;
                            }


                            return <span key={index} style={{ color: "#00b943" }}>{hangGhe}, </span>
                        })}
                    </div>
                    <div className="bottom--btn" style={{ backgroundColor: `${state.color}` }}>
                        <button style={{ display: `${btn.btn2}` }} onClick={() => {
                            if (danhSachGheDangChon.length === 0) {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'B???n ch??a ch???n v??!',
                                    text: 'B???n ph???i ch???n v?? tr?????c khi ?????t',
                                })
                            } else {
                                setState({
                                    step: '02. Thanh to??n',
                                    position1: '0'
                                })
                                setBtn({
                                    btn2: 'none',
                                    btn3: 'block'
                                })
                            }
                        }}>Ti???p t???c</button>
                        <button style={{ display: `${btn.btn3}` }} onClick={async () => {
                            const thongTinDatVe = new ThongTinDatVe();
                            thongTinDatVe.maLichChieu = props.match.params.id;
                            thongTinDatVe.danhSachVe = danhSachGheDangChon;

                            setBtn({
                                btn1: 'none',
                                btn2: 'none',
                                btn3: 'block'
                            })
                            await dispatch(datVeAction(thongTinDatVe));
                            console.log(tabActive)
                            if (tabActive === '2') {
                                setState({
                                    step: '03. K???t qu??? ?????t v??',
                                    position1: '0'
                                })
                            }
                        }}>?????t v??</button>
                    </div>
                </div>
                <div className="checkout__bills" style={{ right: `${state.position1}` }}>
                    <div className="checkout__money text-center mt-3">
                        <h2>
                            {danhSachGheDangChon.reduce((total, ghe, index) => {
                                return total += ghe.giaVe;
                            }, 0).toLocaleString()}??
                        </h2>
                    </div>
                    <hr />
                    <div className="checkout__info">
                        <p className="info--name">{thongTinPhim.tenPhim}</p>
                        <p className="info--theater">?????a ??i???m: {thongTinPhim.tenCumRap}</p>
                        <p className="info--time">Ng??y chi???u: {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} - {thongTinPhim.tenRap}</p>
                    </div>
                    <hr />
                    <div className="checkout__selected row">
                        <div className="col-8 seat pr-0">
                            <span style={{ marginRight: "10px" }}>Gh??? </span>
                            {_.sortBy(danhSachGheDangChon, ['stt']).map((gheDC, index) => {
                                let hangGhe = '';
                                let vtGhe = (gheDC.stt) / 16;
                                let soGhe = (gheDC.stt) % 16;
                                if (soGhe === 0) {
                                    soGhe = 16;
                                }
                                // console.log(gheDC);
                                // console.log(soGhe);
                                if (vtGhe <= 1) {
                                    hangGhe = `A${soGhe}`;
                                } else if (vtGhe <= 2) {
                                    hangGhe = `B${soGhe}`;
                                } else if (vtGhe <= 3) {
                                    hangGhe = `C${soGhe}`;
                                } else if (vtGhe <= 4) {
                                    hangGhe = `D${soGhe}`;
                                } else if (vtGhe <= 5) {
                                    hangGhe = `E${soGhe}`;
                                } else if (vtGhe <= 6) {
                                    hangGhe = `F${soGhe}`;
                                } else if (vtGhe <= 7) {
                                    hangGhe = `G${soGhe}`;
                                } else if (vtGhe <= 8) {
                                    hangGhe = `H${soGhe}`;
                                } else if (vtGhe <= 9) {
                                    hangGhe = `I${soGhe}`;
                                } else if (vtGhe <= 10) {
                                    hangGhe = `J${soGhe}`;
                                }


                                return <span key={index} style={{ color: "#00b943" }}>{hangGhe}, </span>
                            })}
                        </div>
                        <div className="col-4 money p-0">
                            <span>
                                {danhSachGheDangChon.reduce((total, ghe, index) => {
                                    return total += ghe.giaVe;
                                }, 0).toLocaleString()}??
                            </span>
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
                            <span>S??? ??i???n tho???i</span>
                            <p>{userLogin.soDT}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="checkout__booking">
                        <div className="checkout__note p-4">
                            <div className="left mt-1">
                                <i className="fas fa-exclamation-circle"></i>
                            </div>
                            <div className="right text-center">
                                <p>
                                    V?? ???? mua kh??ng th??? ?????i ho???c ho??n ti???n
                                </p>
                                <p>
                                    M?? v?? s??? ???????c g???i qua tin nh???n
                                    <span> ZMS </span>
                                    (tin nh???n Zalo) v??
                                    <span> Email </span>
                                    ???? nh???p.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

const { TabPane } = Tabs;


// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {
    
    const tabActive = useSelector(state => state.QuanLyDatVeReducer.tabActive);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch({
                type: CHUYEN_TAB_ACTIVE,
                number: "1"
            })
        }
    }, [])


    return <div className="tab__checkoutMobile">
        <Tabs defaultActiveKey={tabActive} activeKey={tabActive}>
            <TabPane tab="01 CH???N GH??? V?? THANH TO??N" key="1">
                <CheckoutMobile {...props} />
            </TabPane>
            <TabPane tab="02 K???T QU??? ?????T V??" key="2">
                <KetQuaDatVe {...props} />
            </TabPane>
        </Tabs>
    </div >
}


function KetQuaDatVe(props) {
    const { chiTietPhongVe, logoRap } = useSelector(state => state.QuanLyDatVeReducer);
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);

    const { thongTinPhim } = chiTietPhongVe;

    const { heThongRapChieu } = logoRap;
    let maRap = thongTinPhim.tenCumRap?.slice(0, 3);
    const renderLogo = () => {
        return heThongRapChieu?.map((item, index) => {
            let newMaRap = item.maHeThongRap?.slice(0, 3);
            if (newMaRap === 'Cin') {
                newMaRap = 'CNS';
            } else if (newMaRap === 'Gal') {
                newMaRap = 'GLX'
            }

            if (maRap === newMaRap) {
                return <img key={index} src={item.logo} alt="" width={70} height={70} />
            }


        })
    }

    return <div className='checkout__result container-fluid p-0'>
        <div className="checkout__header">
            <div className="header--step">
                <p>03. K???t qu??? ?????t v??</p>
            </div>
            <div className="header--user">
                <span>{userLogin.taiKhoan.slice(0, 1)}</span>
            </div>
        </div>
        <div className="back text-center pt-3">
            <button onClick={() => {
                history.push('/');
            }}>
                <i className="fas fa-arrow-left"></i>
                Tr??? v??? trang ch???
            </button>
            <button onClick={() => {
                history.goBack();
            }}>
                Ti???p t???c ?????t v??
                <i className="fas fa-arrow-right"></i>
            </button>
        </div>
        <div className="pt-5 text-center d-flex justify-content-center">
            <div className="film my-4">
                <div className='logo-rap'>
                    {renderLogo()}
                    <div className=''>
                        <p>{thongTinPhim.tenCumRap}</p>
                        <p>
                            {thongTinPhim.gioChieu} - {thongTinPhim.ngayChieu} - {thongTinPhim.tenRap}
                        </p>
                    </div>
                </div>
                <div className='film-img'>
                    <img src={thongTinPhim.hinhAnh} width={325} height={400} alt="" />
                </div>
                <div className="film-bottom pt-3">
                    <p>Ch??c b???n xem phim vui v???</p>
                </div>
            </div>
        </div>
    </div>
}
