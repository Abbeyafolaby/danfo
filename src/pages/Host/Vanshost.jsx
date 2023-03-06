import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Vanshost = () => {

    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("/api/host/vans")
        .then((res) => res.json())
        .then((data) => {
            setVans(data.vans);
        }) 
    }, [])

  return (
    <>
      <h1 className='font-bold m-4 text-lg'>Your Listed Vans</h1>
      {vans.length > 0 ? (
        vans.map((van) => (
          <Link to={`/host/vans/${van.id}`} key={van.id}>
            <div
              key={van.id}
              className="flex items-center m-6"
            >
              <img
                src={van.imageUrl}
                alt={`Photo of ${van.name}`}
                className="w-1/4 rounded "
              />
              <div className="ml-4">
                <h3 className='font-bold'>{van.name}</h3>
                <p>${van.price}/day</p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default Vanshost