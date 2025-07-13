import "./About.css";
import MyImage from "/images/personal-pic.png";

function About() {
  const timeAway = 1;
  const currentYear = new Date().getFullYear();
  const computerScienceYears = currentYear - 2015;
  const experienceYears = currentYear - timeAway - 2018;
  const eCommerceYears = currentYear - timeAway - 2021;

  return (
    <section id="about" className="about checker-board">
      <div className="about-text appear-on-scoll">
        <h2>About</h2>
        <p>
          I'm Caleb Anderson a Full Stack Devloper & Engineer with
          {` ${experienceYears}`} years of experience building and maintaining
          Websites on a production level, with the main focus of the past
          {` ${eCommerceYears}`} years being B2C eCommerce and have achieved my
          certification as a Salesforce Commerce Cloud Developer.
        </p>
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
          If you are looking for a new addition for your team and/or love the
          work you're seeing? Then don't hesitate to reach out! I'm always open
          to new fun ideas or even new clients that want a new inovative site!!
        </p>
      </div>
      <div className="about-image appear-on-scoll">
        <img src={MyImage} alt="Hero image placeholder" />
      </div>
    </section>
  );
}

export default About;
