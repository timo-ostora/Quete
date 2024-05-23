import logo from "./assets/images/quete_light1-removebg-preview.png";
import menuBurger from "./assets/icons/fi-sr-menu-burger.svg";
import x from "./assets/icons/fi-rr-x.svg";
import IconBox from "./IconBox";
import Navbar from "./Navbar.jsx";
import { useState, useEffect } from "react";
import "./header.css";

function Header() {
  const [navActive, setNavActive] = useState("");
  const [headActive, setheadActive] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setheadActive("active") : setheadActive("");
    });
    return () => {
      window.removeEventListener("scroll", () => {
        window.scrollY > 50 ? setheadActive("active") : setheadActive("");
      });
    };
  }, []);

  function handlClick() {
    setNavActive((n) => (n ? "" : "active"));
  }

  return (
    <header className={headActive}>
      <div className="container">
        <a href="#" className="logo">
          <img src={logo} alt="quete" className="img-cover" />
        </a>
        <Navbar
          active={navActive}
          items={["Home", "Category", "About us", "services"]}
        ></Navbar>
        <div className="nav-toggle-btn">
          <IconBox
            onClick={handlClick}
            size="md"
            icon={menuBurger}
            iconActive={x}
            color="primary"
            active={navActive}
          ></IconBox>
        </div>
      </div>
    </header>
  );
}
export default Header;
