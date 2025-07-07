import "./Projects.css";
import PersonalProjects from "./Personal";

function Projects() {
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
        <PersonalProjects />
      </div>
    </section>
  );
}

export default Projects;
