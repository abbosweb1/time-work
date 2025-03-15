import React, { useEffect } from "react";

import "./card4.css";
import video from "../assets/video.png";

function Card4() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className="card4">
        <img src={video} data-aos="zoom-in" alt="" />
    </div>

  );
}
export default Card4;
