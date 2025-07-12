import { useState } from "react";
import Accordion from "../../common/accordion/Accordion";
import Tabs from "../../common/tabs/Tabs";
import experienceData from "./data/experience";
import "./Experience.css";

function ExperienceType({ isAccordion, activeId, setActiveId }) {
  return isAccordion ? (
    <Accordion
      data={experienceData}
      activeId={activeId}
      setActiveId={setActiveId}
    />
  ) : (
    <Tabs data={experienceData} activeId={activeId} setActiveId={setActiveId} />
  );
}

function Experience({ windowSize }) {
  const mobileDevices = windowSize.width < 768;
  const init = mobileDevices ? null : 0;
  const [activeId, setActiveId] = useState(init);

  return (
    <section id="experience" className="experience-section">
      <div className="experience-title appear-on-scoll">
        <h2>Experience</h2>
      </div>

      <ExperienceType
        isAccordion={mobileDevices}
        activeId={activeId}
        setActiveId={setActiveId}
      />
    </section>
  );
}

export default Experience;
