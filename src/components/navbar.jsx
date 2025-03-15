import "./navbar.css";
import logo from "../assets/first-screen__logo.png";
const Navbar = () => {
  return (
    <div className="Navbar">
      <img src={logo} alt="logo" />
      <ul>
        <a>О комплексе</a>
        <a>Район</a>
        <a>Каталог квартир</a>
        <a>Ипотека</a>
        <a>Контакты</a>
      </ul>
    </div>
  );
};

export default Navbar;