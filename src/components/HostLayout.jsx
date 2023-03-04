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
          to="/host"
          end
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/host/review"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          review
        </NavLink>
        <NavLink
          to="/host/income"
          style={({isActive}) => (isActive ? activeStyles : null)}
        >
          income
        </NavLink>
      </ul>
      <Outlet />
    </>
  );
}

export default HostLayout