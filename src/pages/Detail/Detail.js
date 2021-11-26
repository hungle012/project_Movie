import React from 'react'

export default function Detail(props) {
    return (
        <div>
            <section className="detailMovie">
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
            </section>
            <section className="detailMovie_ShowTimes">
                
            </section>
        </div>


    )
}
