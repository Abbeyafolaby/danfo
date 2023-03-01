import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
        <button
          className="bg-[#FF8C38] h-[50px] w-[70%] lg:w-1/4 rounded-md font-inter font-bold text-white">
          Find your van
        </button>
      </section>
      <Footer />
    </>
  );
}

export default Home