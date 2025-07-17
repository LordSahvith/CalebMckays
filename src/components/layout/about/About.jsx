import "./About.css";
import MyImage from "/images/personal-pic.png";

function About({ modalAction }) {
  const timeAway = 1;
  const currentYear = new Date().getFullYear();
  const computerScienceYears = currentYear - 2015;
  const experienceYears = currentYear - timeAway - 2018;
  const eCommerceYears = currentYear - timeAway - 2021;

  return (
    <section id="about" className="about checker-board">
      <div className="about-text">
        <div className="about-title">
          <h2 className="appear-on-scroll">About</h2>
        </div>
        <div className="about-content">
          <p className="appear-on-scroll">
            I'm Caleb Anderson a Full Stack Devloper & Engineer with
            {` ${experienceYears}`} years of experience building and maintaining
            Websites on a production level, with the main focus of the past
            {` ${eCommerceYears}`} years being B2C eCommerce and have achieved
            my certification as a Salesforce Commerce Cloud Developer.
          </p>
          <p className="appear-on-scroll">
            My passion is for the perfect blend of art & science, whether that's
            with Web Development, Game Development, Music or anything else that
            involves both art & science. For the past
            {` ${computerScienceYears}`} years I have been studying Computer
            Science to achieve the aforementioned passion to build Websites &
            Apps, Games, and eventually, Music, and as a life long student,
            there is no end in sight.
          </p>
          <p className="appear-on-scroll">
            If you are looking for a new addition for your team and/or love the
            work you're seeing? Then don't hesitate to reach out! I'm always
            open to new fun ideas or even new clients that want a new inovative
            site!!
          </p>
        </div>
        <div className="contact-button appear-on-scroll">
          <button id="about-contact-button" onClick={modalAction}>
            Get In Touch
          </button>
        </div>
      </div>
      <div className="about-image appear-on-scroll">
        <img src={MyImage} alt="Hero image placeholder" />
      </div>
    </section>
  );
}

export default About;
