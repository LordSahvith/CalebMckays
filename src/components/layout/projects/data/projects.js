import HeroImage from "/images/Hero-Image-Mobile.jpg";
import DynamiteLoyalty from "/images/projects/groupe-dynamite/loyalty-points.jpg";
import Cricut from "/images/projects/cricut/cricut.jpg";
import CricutHeatGuide from "/images/projects/cricut/cricut-heat-guide.jpg";
import GreenPigFood from "/images/projects/green-pig-pub/food-menu-table-view.jpg";

const personalProjects = [
  {
    title: "Yu-Gi-Oh Card Collector",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at ad possimus soluta velit voluptatum commodi id. In aspernatur repudiandae, fuga velit obcaecati laboriosam culpa dolorem nobis molestiae itaque dignissimos? ",
    image: {
      src: HeroImage,
      alt: "Image of Yu-Gi-Oh Card Colletor Project",
    },
    url: "/",
  },
];

const professionalProjects = [
  {
    title: "Groupe Dynamite Inc.",
    content:
      "(Dynamite & Garage) Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at ad possimus soluta velit voluptatum commodi id. In aspernatur repudiandae, fuga velit obcaecati laboriosam culpa dolorem nobis molestiae itaque dignissimos? ",
    image: {
      src: DynamiteLoyalty,
      alt: "Image of Groupe Dynamite Website",
    },
    url: "https://www.dynamiteclothing.com/",
  },
  {
    title: "Cricut",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at ad possimus soluta velit voluptatum commodi id. In aspernatur repudiandae, fuga velit obcaecati laboriosam culpa dolorem nobis molestiae itaque dignissimos? ",
    image: {
      src: Cricut,
      alt: "Image of The Cricut Maker Page",
    },
    url: "https://cricut.com/",
  },
  {
    title: "Cricut Heat Guide",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at ad possimus soluta velit voluptatum commodi id. In aspernatur repudiandae, fuga velit obcaecati laboriosam culpa dolorem nobis molestiae itaque dignissimos? ",
    image: {
      src: CricutHeatGuide,
      alt: "Image of The Cricut Heat Guide Page",
    },
    url: "https://cricut.com/heatguide",
  },
  {
    title: "The Green Pig Pub (Freelance)",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at ad possimus soluta velit voluptatum commodi id. In aspernatur repudiandae, fuga velit obcaecati laboriosam culpa dolorem nobis molestiae itaque dignissimos? ",
    image: {
      src: GreenPigFood,
      alt: "Image of Some of The Green Pig Pub's Food",
    },
    url: "https://lordsahvith.github.io/green-pig-pub/index.html",
  },
];

export { personalProjects, professionalProjects };
