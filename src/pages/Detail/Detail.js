import React from 'react'

export default function Detail(props) {
    return (
        <div>
            <div className="detailMovie">
                <div className="detail__banner"></div>
                <div className="overlay__banner"></div>
                <div className="container detailMovie__info">
                    <div className="row">
                        <div className="col-6 col-md-3 detail__img">
                            <img src="http://movie0706.cybersoft.edu.vn/hinhanh/mad-max-fury-roads_gp05.jpg" alt="..." className="img-fluid w-100" />
                            <div className="icon__play">
                                <a className="popup-youtube" href="https://www.youtube.com/watch?v=0PvazM8D1XE">
                                    <i className="fa fa-play" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-5 infoText my-auto">
                            <p className="date">23/7/2021</p>
                            <p><span>P</span>Mad Max Fury Roads</p>
                            <span>120 phút - 0 IMDb - 2D/Digital</span><br />
                            <button className="button__muaVe">Mua Vé</button>
                        </div>
                        <div className="col-md-4">
                            <div className="progress-pie-chart gt-50" data-percent={10}>
                                <div className="ppc-progress">
                                    <div className="ppc-progress-fill" style={{ transform: 'rotate(360deg)' }} />
                                </div>
                                <div className="ppc-percents">
                                    <div className="pcc-percents-wrapper">
                                        <span>10</span>
                                    </div>
                                </div>
                                <div className="icon__star">
                                    <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="detailMovie_ShowTimes">
                <div className="container">
                    <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link active" id="showtime-tab" data-toggle="tab" href="#showtime" role="tab" aria-controls="home" aria-selected="true">Lịch Chiếu</a>
                        </li>
                        <li className="nav-item" role="presentation"><a className="nav-link" id="infomation-tab" data-toggle="tab" href="#infomation" role="tab" aria-controls="infomation" aria-selected="false">Thông Tin</a>
                        </li>
                        <li className="nav-item" role="presentation"><a className="nav-link" id="vote-tab" data-toggle="tab" href="#vote" role="tab" aria-controls="vote" aria-selected="false">Đánh Giá</a>
                        </li>
                    </ul>
                    <div className="tab-content detailShowtime__content" id="myTabContent">
                        <div className="tab-pane fade mt-5" id="showtime" role="tabpanel" aria-labelledby="showtime-tab">
                            <section className="lichChieu container-md ">
                                <div className="row lichChieu__content mb-5" style={{ backgroundColor: 'white' }}>
                                    <div className=" col-lg-1 lichChieu__LogoRap px-0">
                                        <div className="nav nav-pills" id="v-pills-tab" role="tablist">
                                            <div>
                                                <a className="nav-link show active" id="v-pills-BHDStar-tab" data-toggle="pill" href="#v-pills-BHDStar" role="tab" aria-controls="v-pills-BHDStar" aria-selected="true">
                                                    <div className="border-bottom logoRap__item">
                                                        <img src="http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png" alt="rapbhd" className="img-fluid" />
                                                    </div>
                                                </a>
                                            </div>
                                            <div>
                                                <a className="nav-link show" id="v-pills-CGV-tab" data-toggle="pill" href="#v-pills-CGV" role="tab" aria-controls="v-pills-CGV" aria-selected="true">
                                                    <div className="border-bottom logoRap__item">
                                                        <img src="http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png" alt="rapbhd" className="img-fluid" />
                                                    </div>
                                                </a>
                                            </div>
                                            <div>
                                                <a className="nav-link show" id="v-pills-CineStar-tab" data-toggle="pill" href="#v-pills-CineStar" role="tab" aria-controls="v-pills-CineStar" aria-selected="true">
                                                    <div className="border-bottom logoRap__item">
                                                        <img src="http://movie0706.cybersoft.edu.vn/hinhanh/cinestar.png" alt="rapbhd" className="img-fluid" />
                                                    </div>
                                                </a>
                                            </div>
                                            <div>
                                                <a className="nav-link show" id="v-pills-Galaxy-tab" data-toggle="pill" href="#v-pills-Galaxy" role="tab" aria-controls="v-pills-Galaxy" aria-selected="true">
                                                    <div className="border-bottom logoRap__item"><img src="http://movie0706.cybersoft.edu.vn/hinhanh/galaxy-cinema.png" alt="rapbhd" className="img-fluid" />
                                                    </div>
                                                </a>
                                            </div>
                                            <div>
                                                <a className="nav-link show" id="v-pills-LotteCinima-tab" data-toggle="pill" href="#v-pills-LotteCinima" role="tab" aria-controls="v-pills-LotteCinima" aria-selected="true">
                                                    <div className="border-bottom logoRap__item"><img src="http://movie0706.cybersoft.edu.vn/hinhanh/lotte-cinema.png" alt="rapbhd" className="img-fluid" />
                                                    </div>
                                                </a>
                                            </div>
                                            <div>
                                                <a className="nav-link show" id="v-pills-MegaGS-tab" data-toggle="pill" href="#v-pills-MegaGS" role="tab" aria-controls="v-pills-MegaGS" aria-selected="true">
                                                    <div className="border-bottom logoRap__item"><img src="http://movie0706.cybersoft.edu.vn/hinhanh/megags.png" alt="rapbhd" className="img-fluid" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-11 p-0">
                                        <div className="toDay">
                                            <div className="dateOfYear text-center">
                                                <p className={0} style={{ color: 'black' }}>Thứ 7</p>
                                                <p className={0} style={{ color: 'black' }}>4</p>
                                            </div>
                                            <div className="dateOfYear text-center">
                                                <p className={1} style={{ color: 'black' }}>Chủ Nhật</p>
                                                <p className={1} style={{ color: 'black' }}>5</p>
                                            </div>
                                            <div className="dateOfYear text-center">
                                                <p className={2} style={{ color: 'black' }}>Thứ 2</p>
                                                <p className={2} style={{ color: 'black' }}>6</p>
                                            </div>
                                            <div className="dateOfYear text-center"><p className={3} style={{ color: 'black' }}>Thứ 3</p>
                                                <p className={3} style={{ color: 'black' }}>7</p>
                                            </div>
                                            <div className="dateOfYear text-center"><p className={4} style={{ color: 'black' }}>Thứ 4</p>
                                                <p className={4} style={{ color: 'black' }}>8</p>
                                            </div>
                                            <div className="dateOfYear text-center">
                                                <p className={5} style={{ color: 'black' }}>Thứ 5</p>
                                                <p className={5} style={{ color: 'black' }}>9</p>
                                            </div>
                                            <div className="dateOfYear text-center"><p className={6} style={{ color: 'black' }}>Thứ 6</p>
                                                <p className={6} style={{ color: 'black' }}>10</p>
                                            </div>
                                            <div className="dateOfYear text-center">
                                                <p className={7} style={{ color: 'black' }}>Thứ 7</p>
                                                <p className={7} style={{ color: 'black' }}>11</p>
                                            </div>
                                            <div className="dateOfYear text-center">
                                                <p className={8} style={{ color: 'black' }}>Chủ Nhật</p>
                                                <p className={8} style={{ color: 'black' }}>12</p>
                                            </div>
                                            <div className="dateOfYear text-center">
                                                <p className={9} style={{ color: 'black' }}>Thứ 2</p>
                                                <p className={9} style={{ color: 'black' }}>13</p>
                                            </div>
                                        </div>
                                        <div className="tab-content lichChieu__Phim" id="v-pills-tabContent"><div><div className="lichChieu__item">
                                            <div className="row phim__item">
                                                <div className="col-2 phim__img ">
                                                    <img src="../images/rap-bhd.jpg" alt className="img-fluid" />
                                                </div>
                                                <div className="col-10 phim__thoiLuong">
                                                    <p className="text-dark">
                                                        <span className="doTuoi">P</span>CGV - CGV Saigonres Nguyễn Xí</p>
                                                    <span>371 Nguyen Kiem Go Vap</span>
                                                </div>
                                            </div>
                                            <h4>2D Digital</h4>
                                            <div className="row">
                                                <div className="ml-4 my-2">
                                                    <div className="thoiGianChieu px-3">
                                                        <p><span>10:10</span>~12:10</p>
                                                    </div>
                                                </div>
                                                <div className="ml-4 my-2">
                                                    <div className="thoiGianChieu px-3">
                                                        <p><span>12:10</span>~14:10</p>
                                                    </div>
                                                </div>
                                                <div className="ml-4 my-2">
                                                    <div className="thoiGianChieu px-3">
                                                        <p><span>14:10</span>~16:10</p>
                                                    </div>
                                                </div>
                                                <div className="ml-4 my-2">
                                                    <div className="thoiGianChieu px-3">
                                                        <p><span>16:10</span>~18:10</p>
                                                    </div>
                                                </div>
                                                <div className="ml-4 my-2">
                                                    <div className="thoiGianChieu px-3">
                                                        <p><span>18:10</span>~20:10</p>
                                                    </div>
                                                </div>
                                                <div className="ml-4 my-2">
                                                    <div className="thoiGianChieu px-3">
                                                        <p><span>20:10</span>~22:10</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="tab-pane fade mt-5 content__Infomation" id="infomation" role="tabpanel" aria-labelledby="infomation-tab">
                            <div className="row">
                                <div className="col-md-6 text-center"><p>Tên Phim : <span className="ml-5">Batman vs Superman: Dawn of Justice 2</span></p>
                                    <p>Bí Danh : <span className="ml-5">batman-vs-superman-dawn-of-justice-2</span></p>
                                    <p>Ngày Khời Chiếu : <span className="ml-5">11/1/2021</span></p>
                                    <p>Thời Lượng : <span className="ml-5">120 phút</span></p>
                                    <p>Định Dạng : <span className="ml-5">2D/Digital</span></p>
                                </div>
                                <div className="col-md-6">
                                    <p className="description">&lt;p&gt;Fearing the actions of a god-like Super Hero left unchecked, Gotham City's own formidable, forceful vigilante takes on Metropolis most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it's ever known before.&lt;/p&gt;</p>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade mt-5 content__Vote active show" id="vote" role="tabpanel" aria-labelledby="vote-tab">
                            <div className="myVote" data-toggle="modal" data-target="#VoteModal">
                                <div className="row">
                                    <div className="col-1">
                                        <i className="fa fa-user avatar" />
                                    </div>
                                    <div className="col-8"><p className="text-secondary">Bạn nghĩ gì về phim này?</p>
                                    </div>
                                    <div className="col-3 d-none d-md-block">
                                        <p>
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="myVote">
                                <div className="row">
                                    <div className="col-9">
                                        <p><img src="../images/userCatLovely.png" alt="imageFilm" />
                                            <span className="pl-1 user">Quyên Cute</span>
                                        </p>
                                        <p className="py-2 pl-5">Phim này hay lắm, rất đáng để coi!</p>
                                    </div>
                                    <div className="col-3">
                                        <p className="text-center score">9</p>
                                        <div className="row justify-content-center star">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star d-none d-md-block" />
                                            <i className="fa fa-star d-none d-md-block" />
                                            <i className="fa fa-star d-none d-md-block" />
                                            <i className="fa fa-star d-none d-md-block" />
                                        </div>
                                    </div>
                                </div>
                                <div className="pl-3 border-top py-2">
                                    <i className="far fa-thumbs-up like" style={{ color: 'rgb(73, 80, 87)' }} /><span>  0 Thích</span>
                                </div>
                            </div>
                            <div className="myVote"><div className="row">
                                <div className="col-9">
                                    <p>
                                        <img src="../images/userCatLovely.png" alt="imageFilm" />
                                        <span className="pl-1 user">Vũ quần đùi</span>
                                    </p>
                                    <p className="py-2 pl-5">Kết phim hụt hẫng, khó hiểu, phim hơi nhạt, mọi người cân nhắc trước khi coi phim!
                                    </p>
                                </div>
                                <div className="col-3">
                                    <p className="text-center score">5</p>
                                    <div className="row justify-content-center star">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star d-none d-md-block" />
                                        <i className="fa fa-star d-none d-md-block" />
                                        <i className="fa fa-star d-none d-md-block" />
                                        <i className="fa fa-star d-none d-md-block" />
                                    </div>
                                </div>
                            </div>
                                <div className="pl-3 border-top py-2">
                                    <i className="far fa-thumbs-up like" style={{ color: 'rgb(73, 80, 87)' }} />
                                    <span>  0 Thích</span>
                                </div>
                            </div>
                            <div className="myVote">
                                <div className="row">
                                    <div className="col-9">
                                        <p>
                                            <img src="../images/userCatLovely.png" alt="imageFilm" />
                                            <span className="pl-1 user">Ánh ngáo</span>
                                        </p>
                                        <p className="py-2 pl-5">Phim cũng bình thường, không có gì đáng để chú ý, cốt truyện không đặc săc, diễn viên cũng không khủng</p>
                                    </div>
                                    <div className="col-3">
                                        <p className="text-center score">7</p>
                                        <div className="row justify-content-center star">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star d-none d-md-block" />
                                            <i className="fa fa-star d-none d-md-block" />
                                            <i className="fa fa-star d-none d-md-block" />
                                            <i className="fa fa-star d-none d-md-block" />
                                        </div>
                                    </div>
                                </div>
                                <div className="pl-3 border-top py-2">
                                    <i className="far fa-thumbs-up like" style={{ color: 'rgb(73, 80, 87)' }} />
                                    <span>  0 Thích</span>
                                </div>
                            </div>
                            <div className="myVote">
                                <div className="row">
                                    <div className="col-9">
                                        <p><img src="../images/userCatLovely.png" alt="imageFilm" /><span className="pl-1 user">Vân mỏ chu</span>
                                        </p>
                                        <p className="py-2 pl-5">Phim hay xuất sắc, cho 10 điểm</p>
                                    </div>
                                    <div className="col-3">
                                        <p className="text-center score">10</p>
                                        <div className="row justify-content-center star">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star d-none d-md-block" />
                                            <i className="fa fa-star d-none d-md-block" />
                                            <i className="fa fa-star d-none d-md-block" />
                                            <i className="fa fa-star d-none d-md-block" />
                                        </div>
                                    </div>
                                </div>
                                <div className="pl-3 border-top py-2">
                                    <i className="far fa-thumbs-up like" style={{ color: 'rgb(73, 80, 87)' }} />
                                    <span>  0 Thích</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
