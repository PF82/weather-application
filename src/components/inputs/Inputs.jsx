import React, { useState } from 'react';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';

function Inputs({ setQuery, units, setUnits }) {
    const [city, setCity] = useState("");

    const handleUnitsChange = (e) => {
        const selectedUnit = e.currentTarget.name
        if (units !== selectedUnit) setUnits(selectedUnit)
    };

    const handleSearchClick = () => {
        if (city !== "") setQuery({ q: city })
    };

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                setQuery({
                    lat,
                    lon,
                });
            });
        };
    };

    return (
        <div className='container-4'>
            <div className='container-5'>
                <input
                    value={city}
                    onChange={(e) => setCity(e.currentTarget.value)}
                    type="text"
                    className='container-6'
                    placeholder='Search for location...' />
                <UilSearch
                    size={20}
                    onClick={handleSearchClick} />
                <UilLocationPoint className='container-8'
                    size={20}
                    onClick={handleLocationClick} />
            </div>
            <div className='container-9'>
                <button
                    name='metric'
                    className='container-10'
                    onClick={handleUnitsChange}>
                    °C
                </button>
                <p className='container-10-1'>|</p>
                <button
                    name='imperial'
                    className='container-10'
                    onClick={handleUnitsChange}>
                    °F
                </button>
            </div>
        </div>
    )
}

export default Inputs