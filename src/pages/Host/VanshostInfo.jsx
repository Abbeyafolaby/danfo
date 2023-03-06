import React from 'react'
import { useOutletContext } from 'react-router-dom'

const VanshostInfo = () => {

    const { currentVan } = useOutletContext();

  return (
    <>
      <div className="space-y-6 lg:w-1/2 p-8">
        <h4 className="font-inter font-semibold">Name: <span className='font-normal'>{currentVan.name}</span></h4>
        <h4 className="font-inter font-semibold">
          Category: <span className='font-normal'>{currentVan.type}</span>
        </h4>
        <h4 className="font-inter font-semibold">
          Description: <span className='font-normal'>{currentVan.description}</span>
        </h4>
        <h4 className="font-inter font-semibold">Visibility: <span className='font-normal'>public</span></h4>
      </div>
    </>
  );
}

export default VanshostInfo