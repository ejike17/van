import React from "react";
import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

const HostVanDetails = () => {
  const params = useParams();
  const [van, setVan] = useState({});

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setVan(data.vans);
      });
  }, [params.id]);

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={van.imageUrl} />
          <div className="host-van-detail-info-text">
            <h3>{van.name}</h3>
            <h4>{van.price}</h4>
            <i className={`van-type van-type-${van.type}`}>{van.type}</i>
          </div>
        </div>

        <nav className="host-van-detail-nav">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photo"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Photo
          </NavLink>
        </nav>

        <Outlet context={{van}} />
      </div>
    </section>
  );
};

export default HostVanDetails;
