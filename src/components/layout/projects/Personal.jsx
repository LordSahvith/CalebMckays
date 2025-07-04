import ProjectTemplate from "./ProjectTemplate";
import { personalProjects } from "./data/projects";

function PersonalProjects() {
  return (
    <>
      <h3>Personal</h3>

      <ProjectTemplate projects={personalProjects} />
    </>
  );
}

export default PersonalProjects;
