import projects from "./data/projects";

function PersonalProjects() {
  return projects.map((project) => (
    <section className="project checker-board" key={project.title}>
      <div>
        <h4>
          <a href={project.url} target="_blank">
            {project.title}
          </a>
        </h4>
        <p>{project.content}</p>
      </div>
      <div>
        <a href={project.url} target="_blank">
          <img src={project.image.src} alt={project.image.alt} />
        </a>
      </div>
    </section>
  ));
}

export default PersonalProjects;
