import HeroImage from "/images/Hero-Image-Mobile.jpg";
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

export default About;
