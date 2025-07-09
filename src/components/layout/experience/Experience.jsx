import Accordion from "../../common/accordion/Accordion";
import experienceData from "./data/experience";
import "./Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-title">
        <h2>Experience</h2>
      </div>

      <Accordion data={experienceData} />

      {/* <Accordion>
        {experienceData.map((job) => (
          <div className="job" key={job.id}>
            <div>
              <h4>
                <a href={job.url} target="_blank">
                  {job.job}
                </a>
              </h4>
              <p>{job.duration}</p>
              <p>{job.title}</p>
              <p>{job.content.description}</p>
              <ul>
                {job.content.duties.map((duty) => (
                  <li key={duty}>{duty}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Accordion> */}
    </section>
  );
}

export default Experience;
