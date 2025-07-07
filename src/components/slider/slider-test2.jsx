import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ProfessionalProjects from "../layout/projects/Professional";
import PersonalProjects from "../layout/projects/Personal";

import MobileImage from "/images/Hero-Image-Mobile.jpg";

function DemoCarousel() {
  return (
    <Carousel>
      {/* <div>
        <img src={MobileImage} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={MobileImage} />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={MobileImage} />
        <p className="legend">Legend 3</p>
      </div> */}
      <ProfessionalProjects />
      <PersonalProjects />
    </Carousel>
  );
}

export default DemoCarousel;
