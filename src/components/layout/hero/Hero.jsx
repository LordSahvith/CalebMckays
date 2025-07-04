import "./Hero.css";
import HeroImage from "/images/Hero-Image-Mobile.jpg";

function Hero() {
  return (
    <section className="hero checker-board">
      <div className="hero-text">
        <p>Hello, my name is</p>
        <h1>Caleb Anderson</h1>
        <p>A Full Stack Developer & Engineer</p>
      </div>
      <div className="hero-image">
        <img src={HeroImage} alt="Hero image placeholder" />
      </div>
    </section>
  );
}

export default Hero;
