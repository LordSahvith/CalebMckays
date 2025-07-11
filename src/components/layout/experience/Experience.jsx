import { useEffect, useState } from "react";
import Accordion from "../../common/accordion/Accordion";
import Tabs from "../../common/tabs/Tabs";
import experienceData from "./data/experience";
import "./Experience.css";

function Experience() {
  const [activeId, setActiveId] = useState(null);

  const toggleActive = function (itemId) {
    setActiveId(itemId);
  };

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize]);

  return (
    <section id="experience" className="experience-section">
      <div className="experience-title">
        <h2>Experience</h2>
      </div>

      {windowSize.width < 768 ? (
        <Accordion
          data={experienceData}
          activeId={activeId}
          toggleActive={toggleActive}
        />
      ) : (
        <Tabs
          data={experienceData}
          activeId={activeId}
          toggleActive={toggleActive}
          windowSize={windowSize}
        />
      )}
    </section>
  );
}

export default Experience;
