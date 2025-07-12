import "./Projects.css";
import ProjectsCarousel from "./Projects-Carousel";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-text appear-on-scoll">
        <h2>Projects</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quis
          reiciendis impedit at quod aliquam. Doloribus nemo enim quo sunt
          voluptatem iste praesentium beatae, modi cupiditate at, officiis,
          recusandae esse.
        </p>
      </div>

      <div className="projects appear-on-scoll">
        <ProjectsCarousel />
      </div>
    </section>
  );
}

export default Projects;
