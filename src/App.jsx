import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Kvartira from "./components/kvartira";
import Card3 from "./components/card3"
import Card4 from "./components/card4"
import Card5 from "./components/card5"
// import "aos/dist/aos.css"; // AOS ning CSS faylini import qilish
import "./App.css";

const FakeDataComponent = () => {
  return (
    <div className="App">
      <Hero />
      <Kvartira />
      <Card3 />
      <Card4/>
      <Card5/>
    </div>
  );
};

export default FakeDataComponent;
