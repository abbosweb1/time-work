import "./hero.css";
import Navbar from "./navbar";

function Hero() {
  return (
    <div className="Hero">
      <Navbar />
      <div className="hero_text">
        <h1>
          Жилой комплекс <br /> в историческом центре
        </h1>
      </div>
    </div>
  );
}
export default Hero;
