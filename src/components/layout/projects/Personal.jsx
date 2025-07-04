import ProjectTemplate from "./ProjectTemplate";
import { personalProjects } from "./data/projects";

function PersonalProjects() {
  return (
    <div>
      <h3>Personal</h3>

      <ProjectTemplate projects={personalProjects} />
    </div>
  );
}

export default PersonalProjects;
