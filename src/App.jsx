import "./App.css";
import HeroImage from "/images/Hero-Image-Mobile.jpg";

function Hero() {
  return (
    <section>
      <img src={HeroImage} alt="Hero image placeholder" />
      <h1>Caleb Mckays</h1>
    </section>
  );
}

function About() {
  return (
    <section>
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quis
        reiciendis impedit at quod aliquam. Doloribus nemo enim quo sunt
        voluptatem iste praesentium beatae, modi cupiditate at, officiis,
        recusandae esse.
      </p>
      <img src={HeroImage} alt="About image placeholder" />
    </section>
  );
}

function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quis
        reiciendis impedit at quod aliquam. Doloribus nemo enim quo sunt
        voluptatem iste praesentium beatae, modi cupiditate at, officiis,
        recusandae esse.
      </p>

      <div>
        <h3>Personal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at ad
          possimus soluta velit voluptatum commodi id. In aspernatur
          repudiandae, fuga velit obcaecati laboriosam culpa dolorem nobis
          molestiae itaque dignissimos?
        </p>
        <img src={HeroImage} alt="About image placeholder" />
      </div>

      <div>
        <h3>Professional</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at ad
          possimus soluta velit voluptatum commodi id. In aspernatur
          repudiandae, fuga velit obcaecati laboriosam culpa dolorem nobis
          molestiae itaque dignissimos?
        </p>
        <img src={HeroImage} alt="About image placeholder" />
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  );
}

export default App;
