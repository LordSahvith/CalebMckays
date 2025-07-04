import ProjectTemplate from "./ProjectTemplate";
import { professionalProjects } from "./data/projects";

function ProfessionalProjects() {
  return (
    <>
      <h3>Professional</h3>

      <ProjectTemplate projects={professionalProjects} />
    </>
  );
}

export default ProfessionalProjects;
