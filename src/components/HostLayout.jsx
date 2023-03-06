import React from 'react'
import { Outlet, NavLink } from 'react-router-dom';

const HostLayout = () => {

    const activeStyles = {
        fontWeight: "bold",
        color: "#161616",
        textDecoration: "underline"
    }

  return (
    <>
      <ul className="flex gap-x-4 p-4">
        <NavLink
          to="."
          end
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          income
        </NavLink>
        <NavLink
          to="vans"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="review"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          review
        </NavLink>
      </ul>
      <Outlet />
    </>
  );
}

export default HostLayout