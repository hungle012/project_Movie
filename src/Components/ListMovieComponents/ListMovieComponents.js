import React from 'react';
// import Movie from '../Movie/Movie';
import ListMovieCarousel from './ListMovieCarousel/ListMovieCarousel';

export default function ListMovieComponents() {
    return (
        <div id="lichChieu">
            <section className="listMovie container">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active button"
                            id="pills-dangChieu-tab"
                            data-toggle="pill"
                            href="#pills-dangChieu"
                            role="tab"
                            aria-controls="pills-dangChieu"
                            aria-selected="true">
                            Đang Chiếu
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link button"
                            id="pills-sapChieu-tab"
                            data-toggle="pill"
                            href="#pills-sapChieu"
                            role="tab"
                            aria-controls="pills-sapChieu"
                            aria-selected="false">
                            Sắp Chiếu
                        </button>
                    </li>
                </ul>
                <div className="tab-content listMovie__content" id="pills-tabContent">
                    <div
                        className="tab-pane fade show active content__item "
                        id="pills-dangChieu"
                        role="tabpanel"
                        aria-labelledby="pills-dangChieu-tab"
                    >
                        <div className="content__dangChieu">
                            <ListMovieCarousel/>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade content__item"
                        id="pills-sapChieu"
                        role="tabpanel"
                        aria-labelledby="pills-sapChieu-tab"
                    >
                        <div className="content__dangChieu">
                            <ListMovieCarousel/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
