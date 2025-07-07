import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import projects from "./data/projects";

// import MobileImage from "/images/Hero-Image-Mobile.jpg";

function ProjectsCarousel() {
  return (
    <Carousel showThumbs={false}>
      {projects.map((project) => (
        <section className="project" key={project.title}>
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
      ))}
    </Carousel>
  );
}

export default ProjectsCarousel;
