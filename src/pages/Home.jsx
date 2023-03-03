import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="home flex flex-col justify-center space-y-7 text-center items-center">
        <h1 className="font-inter font-extrabold text-white text-4xl">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="font-inter text-white text-base font-medium">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link
          to="/vans"
          className="bg-[#FF8C38] h-[50px] w-[70%] lg:w-1/4 rounded-md font-inter font-bold text-white flex justify-center items-center"
        >
          <button>Find your van</button>
        </Link>
      </section>
      <Footer />
    </>
  );
}

export default Home