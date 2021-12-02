import React from 'react';
import AppMovie from '../Home/AppMovie/AppMovie';
import ListMovieComponents from '../../Components/ListMovieComponents/ListMovieComponents';
import News from '../Home/News/News';
import ShowInTick from '../Home/ShowInTicket/ShowInTick';
import HomeCarousel from '../../templates/HomeTemplate/layout/HomeCarousel/HomeCarousel'
export default function Home() {
    return (
        <div className="home">
            <HomeCarousel/>
            <ListMovieComponents/>
            <ShowInTick/>
            <News/>
            <AppMovie/>
        </div>
    )
}
