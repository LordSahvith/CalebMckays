import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import projects from "./data/projects";

// import MobileImage from "/images/Hero-Image-Mobile.jpg";

function ProjectsCarousel() {
  return (
    <Carousel showThumbs={false}>
      {projects.map((project) => (
        <div className="project" key={project.title}>
          <div className="project-title">
            <h3>
              <a href={project.url} target="_blank">
                {project.title}
              </a>
            </h3>
            <p>{project.type}</p>
          </div>
          <div className="project-content">
            <div className="project-description">
              <p>{project.content}</p>
            </div>
            <div className="project-image">
              <a href={project.url} target="_blank">
                <img src={project.image.src} alt={project.image.alt} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default ProjectsCarousel;
