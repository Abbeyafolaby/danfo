import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-[#FFF7ED] p-6 items-center">
      <Link to='/'>
        <h1 className="font-inter font-black text-2xl">#VANLIFE</h1>
      </Link>
      <ul className="flex gap-x-4">
        <Link to='/about'>
          <li className="cursor-pointer font-inter font-semibold text-base text-[#4D4D4D]">
            About
          </li>
        </Link>
        <Link to='/'>
          <li className="cursor-pointer font-inter font-semibold text-base text-[#4D4D4D]">
            Vans
          </li>
        </Link>

      </ul>
    </nav>
  );
}

export default Navbar   