import { useEffect, useState } from "react";
import mainNavItems from "./data/mainNavItems";
import "./MainNavigation.css";

function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = function () {
    return isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  useEffect(() => {
    const closeMenu = () => {
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

  const isInTabOrder = isOpen || (isOpen && window.innerWidth < 1024);

  return (
    <nav className="main-nav">
      <div className="nav-logo">
        <a href="/">
          <span>CM</span>
        </a>
      </div>
      <div className="nav-menu">
        <button className="nav-menu-button" onClick={toggle}>
          <span>&#9776;</span>
        </button>
      </div>
      <div className={`nav-links ${isOpen ? "show" : ""}`}>
        <ul>
          {mainNavItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                tabIndex={isInTabOrder ? "0" : "-1"}
                onClick={toggle}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default MainNavigation;
