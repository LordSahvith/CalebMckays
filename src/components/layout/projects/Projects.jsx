import "./Projects.css";
import projects from "./data/projects";

function Project({ project }) {
  return (
    <div className="project checker-board">
      <div className="project-content">
        <div className="project-title appear-on-scroll">
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
            <p key={desc} className="appear-on-scroll">
              {desc}
            </p>
          ))}

          {project.hasActiveUrl ? (
            <p className="appear-on-scroll">
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
  const recentProjects = projects.slice().reverse();

  return (
    <section id="projects" className="projects-section">
      <div className="projects-text appear-on-scroll">
        <h2>Projects</h2>
        <p>Both Freelance & Personal Projects.</p>
      </div>

      <div className="projects">
        {recentProjects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
