import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Van() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setVans(data.vans);
      });
  }, []);

  const vanElements = vans.map((van) => {
    return (
      <div key={van.id} className="van-title">
        <Link to={`/vans/${van.id}`}>
          <img src={van.imageUrl} alt="van-img" className="van-img" />
          <div className="van-info">
            <h3>{van.name}</h3>
            <p>
              ${van.price}
              <span>/day</span>
            </p>
          </div>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
      </div>
    );
  });
  return (
    <div className="van-list-container">
      <h1>Explore our van option</h1>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}

export default Van;
