import { useEffect, useState } from "react";
import mainNavItems from "./data/mainNavItems";
import "./MainNavigation.css";

const NAV_HEIGHT = 70;

function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = function () {
    return isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  useEffect(() => {
    const closeMenu = function () {
      setIsOpen(false);
    };

    window.addEventListener("resize", closeMenu);
    window.addEventListener("scroll", closeMenu);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", closeMenu);
      window.removeEventListener("scroll", closeMenu);
    };
  });

  const isInTabOrder = isOpen || window.innerWidth >= 1024;

  const scrollToSection = function (id) {
    const element = document.querySelector(id);
    if (element) {
      const topPosition = element.offsetTop - NAV_HEIGHT;
      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="main-nav">
      <button className="sr-only" onClick={() => scrollToSection("#about")}>
        Skip to Content
      </button>
      <div className="nav-logo">
        <button
          className="underline-animated"
          onClick={() => scrollToSection("#home")}
        >
          <span>CM</span>
        </button>
      </div>
      <div className="nav-menu">
        <button className="nav-menu-button" onClick={toggle}>
          <span className="sr-only">&#9776;</span>
          <div className={`menu-icon ${isOpen ? "show" : ""}`}>
            <span className="bar bar-top"></span>
            <span className="bar bar-middle"></span>
            <span className="bar bar-bottom"></span>
          </div>
        </button>
      </div>
      <div className={`nav-links ${isOpen ? "show" : ""}`}>
        <ul>
          {mainNavItems.map((item) => (
            <li key={item.name}>
              <button
                className="underline-animated"
                tabIndex={isInTabOrder ? "0" : "-1"}
                onClick={() => scrollToSection(item.link)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default MainNavigation;
