import React from 'react'
import { useState, useEffect } from 'react';

const CountDown = (props) => {
    const { Minute = 0, Seconds = 0 } = props;
    const [minutes, setMinutes] = useState(Minute);
    const [seconds, setSeconds] = useState(Seconds);
    useEffect(() => {
        let countDown = setInterval(() => {

            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else {
                if (minutes > 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                } else {
                    clearInterval(countDown);
                    alert("Hết giờ");
                }
            }

        }, 1000)
        return () => {
            clearInterval(countDown);
        };
    });

    return (
        <div>
            <h2>
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </h2>
        </div>
    )
}

export default CountDown;