import experienceData from "./data/experience";
import "./Experience.css";

function Experience() {
  return (
    <section className="experience-section">
      <h3>Experience</h3>

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
    </section>
  );
}

export default Experience;
