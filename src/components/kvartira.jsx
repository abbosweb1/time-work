import React, { useEffect } from "react";

import "./kvartira.css";
import img1 from "../assets/Rectangle (1).png";
import img2 from "../assets/Rectangle (2).png";

function Kvartira() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className="Kvartira">
      <img data-aos="fade-right" src={img1} alt="kv_img" />
      <img data-aos="fade-left" src={img2} alt="kv_img" />
      <img data-aos="flip-right" src={img1} alt="kv_img" />
      <img data-aos="flip-right" src={img2} alt="kv_img" />
    </div>
  );
}
export default Kvartira;
