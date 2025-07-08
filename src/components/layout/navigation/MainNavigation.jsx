import "./MainNavigation.css";
import LogoSVG from "./caleb-mckays-logo.svg";

const mainNavItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Projects",
    link: "#projects",
  },
];

function MainNavigation() {
  return (
    <nav className="main-nav">
      <div className="logo">
        <a href={mainNavItems[0].link}>
          <img src={LogoSVG} alt="" />
        </a>
      </div>
      <ul>
        {mainNavItems.map((item) => (
          <li key={item.name}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MainNavigation;
