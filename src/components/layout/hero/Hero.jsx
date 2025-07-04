import "./Hero.css";
import HeroImage from "/images/Hero-Image-Mobile.jpg";

function Hero() {
  return (
    <section className="hero">
      <p>Hey, my name is</p>
      <h1>Caleb Anderson</h1>
      <p>Full Stack Developer & Engineer</p>
      <img src={HeroImage} alt="Hero image placeholder" />
    </section>
  );
}

export default Hero;
