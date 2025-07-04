import "./About.css";
import HeroImage from "/images/Hero-Image-Mobile.jpg";

function About() {
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - 2018 - 1;
  const developerYears = currentYear - 2015;

  return (
    <section className="about checker-board">
      <div className="about-text">
        <h2>About</h2>
        <p>
          I'm Caleb Anderson a Full Stack Devloper & Engineer with
          {` ${experienceYears}`} years of experience building and maintaining
          Websites on a production level with the main focus being eCommerce.
          However, my passion is Computer Science as a whole and have been
          studying this field for the past
          {` ${developerYears}`} years and have zero intention on ever stopping.
        </p>
        <p>
          Computer's aren't my main passion by a long shot though! I have a deep
          love for music, especially metal but I'm not as limited as to stick
          with just a single genre and will listen to all types of music, books,
          pool (billiards), outdoors, specifically hiking, camping, and
          snowboarding, and of course video games.
        </p>
      </div>

      <div className="about-image">
        <img src={HeroImage} alt="About image placeholder" />
      </div>
    </section>
  );
}

export default About;
