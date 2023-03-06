import React, { useEffect, useState } from "react";
import { NavLink, Link, Outlet, useParams } from "react-router-dom";

const Vanhostdetail = () => {
  const [currentVan, setCurrentVan] = useState([]);
  const params = useParams();

      const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
      };

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentVan(data.vans);
      });
  }, []);

  return (
    <>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      {currentVan ? (
        <div className="host-van-detail-layout-container">
          <div className="host-van-detail">
            {" "}
            <img src={currentVan.imageUrl} width={150} />
            <div className="host-van-detail-info-text">
              <i className={`van-type van-type-${currentVan.type}`}>
                {currentVan.type}
              </i>
              <h3>{currentVan.name}</h3>
              <h4 className="van-price">${currentVan.price}/day</h4>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
      <div className="space-x-6 p-8 font-inter font-normal">
        <NavLink
          to="."
          end
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Details
        </NavLink>
        <NavLink
          to="pricing"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Pricing
        </NavLink>
        <NavLink
          to="photos"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Photos
        </NavLink>
      </div>
      <Outlet context={{ currentVan }} />
    </>
  );
};

export default Vanhostdetail;
