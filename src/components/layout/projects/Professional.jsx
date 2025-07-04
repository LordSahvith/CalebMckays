import ProjectTemplate from "./ProjectTemplate";
import { professionalProjects } from "./data/projects";

function ProfessionalProjects() {
  return (
    <div>
      <h3>Professional</h3>

      <ProjectTemplate projects={professionalProjects} />
    </div>
  );
}

export default ProfessionalProjects;
