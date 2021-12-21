import React, { Fragment } from 'react'
import { useSelector } from "react-redux";

export default function Loading(props) {

    const { isLoading } = useSelector(state => state.LoadingReducers)

    return (
        <Fragment>
            {isLoading ?
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 99 }}>
                    <div className='display-4 text-light'>...Loading
                    </div>
                </div> : ''
            }
        </Fragment>

    )
}
