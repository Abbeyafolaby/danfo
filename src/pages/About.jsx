import React from 'react'
import Navbar from '../components/Navbar'
import about from '../assets/aboutimg.png'

const About = () => {
  return (
    <>
      <Navbar /> 
      <section className=''>
        <img src={about} alt='' className='md:w-full'/>
      </section>
    </>
  )
}

export default About    