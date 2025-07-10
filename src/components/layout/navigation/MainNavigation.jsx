import { useEffect, useState } from "react";
import mainNavItems from "./data/mainNavItems";
import "./MainNavigation.css";
import LogoSVG from "./caleb-mckays-logo.svg";

function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = function () {
    return isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const isInTabOrder = isOpen || (isOpen && window.innerWidth < 1024);

  return (
    <nav className="main-nav">
      <div className="nav-logo">
        <a href="/">
          <img src={LogoSVG} alt="Caleb Mckay's Logo" />
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
