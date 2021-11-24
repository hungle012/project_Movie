import React from 'react';
import ListMovieComponents from '../../Components/ListMovieComponents/ListMovieComponents'
import ShowInTick from '../../Components/ShowInTicket/ShowInTick';

export default function Home() {
    return (
        <div>
            <ListMovieComponents/>
            <ShowInTick/>
        </div>
    )
}
