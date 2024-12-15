import React from "react";
import "../styles/Banner.css";
import AdsComponent from './AdsComponent';


const Banner = () => {
  return (
    <div className="banner">
      <AdsComponent dataAdSlot='1234567890' />
    </div>
  );
};

export default Banner;
