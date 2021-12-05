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
                                <a className="popup-youtube" href="https://www.youtube.com/watch?v=0PvazM8D1XE" lity>
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
