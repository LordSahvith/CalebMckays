import HeroImage from "/images/Hero-Image-Mobile.jpg";

const personalProjects = [
  {
    title: "Yu-Gi-Oh Card Collector",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at ad possimus soluta velit voluptatum commodi id. In aspernatur repudiandae, fuga velit obcaecati laboriosam culpa dolorem nobis molestiae itaque dignissimos? ",
    image: {
      HeroImage,
      alt: "Image of Yu-Gi-Oh Card Colletor Project",
    },
  },
];

function PersonalProjects() {
  return (
    <div>
      <h3>Personal</h3>

      {personalProjects.map((project) => {
        return (
          <>
            <div>
              <h4>{project.title}</h4>
              <p>{project.content}</p>
            </div>
            <div>
              <img src={project.image.HeroImage} alt={project.image.alt} />
            </div>
          </>
        );
      })}
    </div>
  );
}

export default PersonalProjects;
