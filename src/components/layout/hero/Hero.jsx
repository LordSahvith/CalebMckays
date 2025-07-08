import ParticleCanvas from "../../particles/ParticlesSystem";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Caleb Anderson</h1>
        <p>A Full Stack Developer & Engineer</p>
        <p className="hero-code">
          <code>{"</>"}</code>
          <code>{"{}"}</code>
        </p>
      </div>
      <ParticleCanvas />
    </section>
  );
}

export default Hero;
