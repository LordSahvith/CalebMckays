import { useState } from "react";
import ExperienceAccordion from "./ExperienceAccordion";
import ExperienceTabs from "./ExperienceTabs";
import experienceData from "./data/experience";
import "./Experience.css";

function ExperienceType({ isAccordion, activeId, setActiveId }) {
  return isAccordion ? (
    <ExperienceAccordion
      data={experienceData}
      activeId={activeId}
      setActiveId={setActiveId}
    />
  ) : (
    <ExperienceTabs
      data={experienceData}
      activeId={activeId}
      setActiveId={setActiveId}
    />
  );
}

function Experience({ windowSize }) {
  const mobileDevices = windowSize.width < 768;
  const init = mobileDevices ? null : 0;
  const [activeId, setActiveId] = useState(init);

  return (
    <section id="experience" className="experience-section">
      <div className="experience-title appear-on-scroll">
        <h2>Experience</h2>
      </div>

      <div className="experience-content appear-on-scroll">
        <ExperienceType
          isAccordion={mobileDevices}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      </div>
    </section>
  );
}

export default Experience;
