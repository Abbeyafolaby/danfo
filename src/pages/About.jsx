import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import about from '../assets/aboutimg.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <Navbar />
      <section className="font-inter bg-[#FFF7ED] text-left md:max-w-2xl md:m-auto pb-12 md:flex md:flex-col md:text-center md:items-center md:justify-center">
        <img src={about} alt="" className="max-w-full" />
        <div className="mb-14  px-4 pt-4 space-y-3 text-[#161616]">
          <h1 className="font-bold text-xl">
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>
          <p className="font-medium text-base leading-5">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p className="font-medium text-base leading-5">
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <div className="bg-[#FFCC8D] mx-4 p-6 rounded">
          <h2
            className="text-[#161616] font-bold mb-4"
          >
            Your destination is waiting.
            <br />
            Your van is ready.
          </h2>
          <Link className="bg-[#161616] rounded-sm p-2 text-white text-sm cursor-pointer" to="/vans">
            Explore our vans
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About    