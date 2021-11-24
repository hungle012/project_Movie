import React from 'react';
import AppMovie from '../../Components/AppMovie/AppMovie';
import ListMovieComponents from '../../Components/ListMovieComponents/ListMovieComponents';
import ShowInTick from '../../Components/ShowInTicket/ShowInTick';
import News from '../../Components/News/News'

export default function Home() {
    return (
        <div>
            <ListMovieComponents/>
            <ShowInTick/>
            <News/>
            <AppMovie/>
        </div>
    )
}
