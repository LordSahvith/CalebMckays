function ProjectTemplate({ projects }) {
  return projects.map((project) => (
    <div className="project" key={project.title}>
      <div>
        <h4>{project.title}</h4>
        <p>{project.content}</p>
      </div>
      <div>
        <img src={project.image.HeroImage} alt={project.image.alt} />
      </div>
    </div>
  ));
}

export default ProjectTemplate;
