import ParticleCanvas from "../../particles/ParticlesSystem";
import "./Hero.css";
import MyImage from "/images/personal-pic.png";

function Hero() {
  return (
    <section className="hero checker-board">
      <div className="hero-text">
        <p>Hello, my name is</p>
        <h1>Caleb Anderson</h1>
        <p>A Full Stack Developer & Engineer</p>
      </div>
      <div className="hero-image">
        <img src={MyImage} alt="Hero image placeholder" />
      </div>
      <ParticleCanvas />
    </section>
  );
}

export default Hero;
