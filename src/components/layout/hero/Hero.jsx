import ParticleCanvas from "../../particles/ParticlesSystem";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        {/* <p>Hello, my name is</p> */}
        <h1>Caleb Anderson</h1>
        <p>A Full Stack Developer & Engineer</p>
      </div>
      <ParticleCanvas />
    </section>
  );
}

export default Hero;
