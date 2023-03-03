import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const Vans = () => {

  const [vans, setVans] = useState([])

  useEffect(() => {
    fetch("/api/vans")
    .then((res) => res.json())
    .then((json) => {
        setVans(json.vans)
    })
  },[])


  return (
    <div>
      <Navbar />
      <h1 className='font-inter font-bold text-xl p-4'>Explore our van options</h1>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center p-4 font-inter">
        {vans.map((van) => (
          <div key={van.id}>
            <img src={van.imageUrl} alt="" className="rounded" />
            <div className="flex justify-between">
              <p className="text-[12px] font-semibold">{van.name}</p>
              <p className="text-[12px] font-semibold">
                ${van.price} <br />{" "}
                <span className="text-[10px] font-light">/day</span>
              </p>
            </div>
            <button className={`van-type ${van.type} selected`}>
              {van.type}
            </button>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default Vans