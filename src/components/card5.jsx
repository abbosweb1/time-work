import React, { useEffect } from "react";

import "./card5.css";
// import video from "../assets/video.png";

function Card5() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div data-aos="fade-right" className="card5">
        <h1>Район на карте</h1>
        <h1>Hello world</h1>
        <h2>test uchun</h2>
        <h3>test 3</h3>
        <h4>test 4</h4>
        <div className="wrapperSft">
        <div className="imgSifat"></div>
        </div>
    </div>
);
}
export default Card5;
