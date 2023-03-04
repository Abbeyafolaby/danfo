import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Vandetails = () => {

    const params = useParams()
    const [vans, setVans] = useState(null)

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
          .then((res) => res.json())
          .then((data) => {
            setVans(data.vans)
          });
    }, [params.id])

  return (
    <>
      <div className="van-detail-container">
        {vans ? (
          <div className="van-detail">
            <img src={vans.imageUrl} />
            <i className={`van-type ${vans.type} selected`}>{vans.type}</i>
            <h2>{vans.name}</h2>
            <p className="van-price">
              <span>${vans.price}</span>/day
            </p>
            <p>{vans.description}</p>
            <button className="link-button">Rent this van</button>
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </>
  );
}

export default Vandetails