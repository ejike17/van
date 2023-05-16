import React from "react";
import { useOutletContext } from "react-router-dom";

const HostvanPhoto = () => {
  const { van } = useOutletContext();
  return (
    <img src={van.imageUrl} className="host-van-detail-image" alt="Van-Img" />
  );
};

export default HostvanPhoto;
