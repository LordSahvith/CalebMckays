import Accordion from "../../common/accordion/Accordion";
import Tabs from "../../common/tabs/Tabs";
import experienceData from "./data/experience";
import "./Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-title">
        <h2>Experience</h2>
      </div>

      {window.innerWidth < 768 ? (
        <Accordion data={experienceData} />
      ) : (
        <Tabs data={experienceData} />
      )}
    </section>
  );
}

export default Experience;
