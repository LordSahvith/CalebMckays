import YuGiOhImage from "/images/Hero-Image-Mobile.jpg";
import GreenPigFoodImage from "/images/projects/green-pig-pub/food-menu-table-view.jpg";

const projects = [
  {
    title: "The Green Pig Pub",
    type: "Freelance Project",
    content: [
      "For this project the client wanted to manage their own content and had familiarity with WordPress so the obvious choice was to build them a Custom Wordpress Template that they could update whenever they desired. It utilizes PHP, JavaScript, jQuery and CSS to create the template and a few various WordPress plugins to help with the CMS's User Interface. The template gave them the ability to update any photo or text, as well as updating their food, drink, and events menu's as they changed, allowing them to keep the site current to their brand.",
      "Caveat: this version is no longer live. I started managing this site a few months after it went live (2019) for the next 3 years. After that, their requirements needed more than a 1-person team and so they hired a company to manage the site.",
    ],
    image: {
      src: GreenPigFoodImage,
      alt: "Image of Some of The Green Pig Pub's Food",
    },
    url: "https://lordsahvith.github.io/green-pig-pub/index.html",
    activeUrl: "https://thegreenpigpub.com/",
    hasActiveUrl: true,
    id: 0,
  },
  {
    title: "Card Collector",
    type: "Personal Project",
    content: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at ad possimus soluta velit voluptatum commodi id. In aspernatur repudiandae, fuga velit obcaecati laboriosam culpa dolorem nobis molestiae itaque dignissimos? ",
    ],
    image: {
      src: YuGiOhImage,
      alt: "Image of Yu-Gi-Oh Card Colletor Project",
    },
    url: "/",
    hasActiveUrl: false,
    id: 1,
  },
];

export default projects;
