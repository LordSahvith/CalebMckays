import "./Projects.css";
import PersonalProjects from "./Personal";
import ProfessionalProjects from "./Professional";
import { useState } from "react";

const PROFESSIONAL_TEXT = "Professional";
const PERSONAL_TEXT = "Personal";

function Projects() {
  const [projectType, setProjectType] = useState(PROFESSIONAL_TEXT);

  const toggleProject = (type) => {
    setProjectType(type);
  };

  return (
    <section className="projects-section">
      <div className="projects-text">
        <h2>Projects</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quis
          reiciendis impedit at quod aliquam. Doloribus nemo enim quo sunt
          voluptatem iste praesentium beatae, modi cupiditate at, officiis,
          recusandae esse.
        </p>
      </div>

      <div className="projects">
        <div className="project-buttons">
          <button onClick={() => toggleProject(PROFESSIONAL_TEXT)}>
            {PROFESSIONAL_TEXT}
          </button>
          <button onClick={() => toggleProject(PERSONAL_TEXT)}>
            {PERSONAL_TEXT}
          </button>
        </div>

        {projectType === PROFESSIONAL_TEXT ? (
          <ProfessionalProjects />
        ) : (
          <PersonalProjects />
        )}
      </div>
    </section>
  );
}

export default Projects;
