import React from 'react'
import { useOutletContext } from 'react-router-dom';

const VanhostPricing = () => {

   const { currentVan } = useOutletContext();

  return (
    <div className='p-8'>
        <p className='text-md font-medium'>{currentVan.price}/day</p>
    </div>
  )
}

export default VanhostPricing