import React from 'react'

function TopButtons({ setQuery }) {

  const cities = [
    {
      id: 1,
      title: 'Vancouver'
    },
    {
      id: 2,
      title: 'New York'
    },
    {
      id: 3,
      title: 'Sao Paulo'
    },
    {
      id: 4,
      title: 'London'
    },
    {
      id: 5,
      title: 'Cape Town'
    },
    {
      id: 6,
      title: 'Tokyo'
    },
    {
      id: 7,
      title: 'Sydney'
    },
  ]

  return (
    <div className='container-2'>
      {cities.map((city) => (
        <button
          key={city.id}
          className='container-3' 
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons