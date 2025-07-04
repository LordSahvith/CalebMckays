import "./About.css";
import HeroImage from "/images/Hero-Image-Mobile.jpg";

function About() {
  const timeAway = 1;
  const currentYear = new Date().getFullYear();
  const computerScienceYears = currentYear - 2015;
  const experienceYears = currentYear - timeAway - 2018;
  const eCommerceYears = currentYear - timeAway - 2021;

  return (
    <section className="about checker-board">
      <div className="about-text">
        <h2>About</h2>
        <p>
          My passion is for the perfect blend of art & science, whether that's
          with Web Development, Game Development, Music or anything else that
          involves both art & science. For the past
          {` ${computerScienceYears}`} years I have been studying Computer
          Science to achieve the aforementioned passion to build Websites &
          Apps, Games, and eventually, Music, and as a life long student, there
          is no end in sight.
        </p>
        <p>
          I'm Caleb Anderson a Full Stack Devloper & Engineer with
          {` ${experienceYears}`} years of experience building and maintaining
          Websites on a production level, with the main focus of the past
          {` ${eCommerceYears}`} years being B2C eCommerce and am a certified
          Salesforce Commerce Cloud Developer.
        </p>
        <p>
          Computer's aren't my only passion by a long shot though! I have a deep
          love for all music/genres, but especially metal, books, pool
          (billiards), outdoors, like: hiking, camping, and snowboarding, and of
          course video games.
        </p>
      </div>

      <div className="about-image">
        <img src={HeroImage} alt="About image placeholder" />
      </div>
    </section>
  );
}

export default About;
