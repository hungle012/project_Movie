import React from 'react';
import { useSelector } from 'react-redux';

export default function HomeCarousel(props) {
    const { arrCarousel } = useSelector(state => state.CarouselReducers);
    const renderCarousel = () => {
        return arrCarousel.map((item, index) => {
            return <div className="carousel-item" key={index}>
                <img src={item.hinhAnh} className="d-block w-100" alt="..." />
                <div className="playTrailer">
                    <a href="https://www.youtube.com/watch?v=_8ldAdQd9WU" className="popup-youtube">
                        <i className="fas fa-play" />
                    </a>
                </div>
            </div>
        });
    }
    return (
        <section className="carousel">
            <div id="carouselMovie" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselMovie" data-slide-to={0} className="active" />
                    <li data-target="#carouselMovie" data-slide-to={1} />
                    <li data-target="#carouselMovie" data-slide-to={2} />
                    <li data-target="#carouselMovie" data-slide-to={3} />
                    <li data-target="#carouselMovie" data-slide-to={4} />
                </ol>
                <div className="carousel-inner home_carousel">
                    {renderCarousel()}
                </div>
                <button className="btn-control carousel-control-prev" type="button" data-target="#carouselMovie" data-slide="prev">
                    <i className="fas fa-chevron-left" />
                    <span className="sr-only">Previous</span>
                </button>
                <button className="btn-control carousel-control-next" type="button" data-target="#carouselMovie" data-slide="next">
                    <i className="fas fa-chevron-right" />
                    <span className="sr-only">Next</span>
                </button>
            </div>
        </section>
    )
}
