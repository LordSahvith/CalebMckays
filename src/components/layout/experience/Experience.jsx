import experienceData from "./data/experience";
import "./Experience.css";

function Experience() {
  return (
    <section className="experience-section">
      <h3>Experience</h3>

      {experienceData.map((job) => (
        <div className="job" key={job.title}>
          <div>
            <h4>
              <a href={job.url} target="_blank">
                {job.title}
              </a>
            </h4>
            <p>{job.content}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Experience;
