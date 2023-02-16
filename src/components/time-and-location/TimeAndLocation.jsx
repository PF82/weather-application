import React from 'react'
import { formatToLocalTime } from '../../services/weatherService'

function TimeAndLocation({ weather: { dt, id, timezone, name, country } }) {
    return (
        <div>
            <div className='container-11'>
                <p className='container-12'>{formatToLocalTime(dt, timezone)}</p>
            </div>
            <div className='container-13'>
                <p className='container-14'>{`${name}, ${country}`}</p>
            </div>
        </div>
    )
}

export default TimeAndLocation