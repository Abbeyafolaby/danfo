import React from 'react'
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-[#FFF7ED] p-6 items-center">
      <Link to="/">
        <h1 className="font-inter font-black text-2xl">#VANLIFE</h1>
      </Link>
      <ul className="flex gap-x-4">
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {/* <li className="cursor-pointer font-inter font-semibold text-base text-[#4D4D4D]"> */}
            Host
          {/* </li> */}
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {/* <li className="cursor-pointer font-inter font-semibold text-base text-[#4D4D4D]"> */}
            About
          {/* </li> */}
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {/* <li className="cursor-pointer font-inter font-semibold text-base text-[#4D4D4D]"> */}
            Vans
          {/* </li> */}
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar   