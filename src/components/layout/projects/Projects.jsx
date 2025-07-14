import "./Projects.css";
import projects from "./data/projects";

function Project({ project }) {
  return (
    <div className="project checker-board">
      <div className="project-content appear-on-scroll">
        <div className="project-title">
          <h3>
            <a
              className="underline-animated"
              href={project.url}
              target="_blank"
            >
              {project.title}
            </a>
          </h3>
          <p>{project.type}</p>
        </div>

        <div className="project-description">
          {project.content.map((desc) => (
            <p key={desc}>{desc}</p>
          ))}

          {project.hasActiveUrl ? (
            <p>
              Find current site
              <a
                className="underline-animated"
                href={project.activeUrl}
                target="_blank"
              >
                here.
              </a>
            </p>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="project-image appear-on-scroll">
        <a href={project.url} target="_blank">
          <img src={project.image.src} alt={project.image.alt} />
        </a>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-text appear-on-scroll">
        <h2>Projects</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quis
          reiciendis impedit at quod aliquam. Doloribus nemo enim quo sunt
          voluptatem iste praesentium beatae, modi cupiditate at, officiis,
          recusandae esse.
        </p>
      </div>

      <div className="projects">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
