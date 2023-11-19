import React from "react";
import "./banner.scss";
import banner from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="wrapper">
        <div className="left">
          <img src={banner} alt="" className="bannerImg" />
        </div>
        <div className="right">
          <h1>Exclusive online offers!</h1>
          <h2>Shop now, before it ends!</h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
