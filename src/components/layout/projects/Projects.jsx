import "./Projects.css";
import PersonalProjects from "./Personal";
import ProfessionalProjects from "./Professional";

function Projects() {
  return (
    <section className="projects">
      <div>
        <h2>Projects</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quis
          reiciendis impedit at quod aliquam. Doloribus nemo enim quo sunt
          voluptatem iste praesentium beatae, modi cupiditate at, officiis,
          recusandae esse.
        </p>
      </div>

      <PersonalProjects />
      <ProfessionalProjects />
    </section>
  );
}

export default Projects;
