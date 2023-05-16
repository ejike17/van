import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Vandetails = () => {
  const [vanDetail, setVanDetail] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((response) => response.json())
      .then((data) => setVanDetail(data.vans));
  }, [params.id]);

  return (
    <div className="van-detail-container">
      {vanDetail ? (
        <div className="van-detail">
          <img src={vanDetail.imageUrl} alt="each-van" />
          <i className={`van-type ${vanDetail.type} selected`}>
            {vanDetail.type}
          </i>
          <h2>{vanDetail.name}</h2>
          <p>
            ${vanDetail.price}
            <span>/day</span>
          </p>
          <p>{vanDetail.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading....</h2>
      )}
    </div>
  );
};

export default Vandetails;
