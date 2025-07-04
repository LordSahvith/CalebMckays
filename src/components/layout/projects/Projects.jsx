import "./Projects.css";
import HeroImage from "/images/Hero-Image-Mobile.jpg";

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

      <div>
        <div>
          <h3>Personal</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at ad
            possimus soluta velit voluptatum commodi id. In aspernatur
            repudiandae, fuga velit obcaecati laboriosam culpa dolorem nobis
            molestiae itaque dignissimos?
          </p>
        </div>

        <div>
          <img src={HeroImage} alt="About image placeholder" />
        </div>
      </div>

      <div>
        <div>
          <h3>Professional</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at ad
            possimus soluta velit voluptatum commodi id. In aspernatur
            repudiandae, fuga velit obcaecati laboriosam culpa dolorem nobis
            molestiae itaque dignissimos?
          </p>
        </div>

        <div>
          <img src={HeroImage} alt="About image placeholder" />
        </div>
      </div>
    </section>
  );
}

export default Projects;
