import React from 'react'
import { useOutletContext } from 'react-router-dom'

const VanhostPhoto = () => {

   const { currentVan } = useOutletContext();
   
  return (
    <div className='p-8'>
        <img src={currentVan.imageUrl} width={250} className='rounded'/>
    </div>
  )
}

export default VanhostPhoto