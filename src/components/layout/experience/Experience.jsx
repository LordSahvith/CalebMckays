import experienceData from "./data/experience";
import "./Experience.css";

function Experience() {
  return (
    <>
      <h3>Professional</h3>

      {experienceData.map((job) => (
        <section className="job" key={job.title}>
          <div>
            <h4>
              <a href={job.url} target="_blank">
                {job.title}
              </a>
            </h4>
            <p>{job.content}</p>
          </div>
        </section>
      ))}
    </>
  );
}

export default Experience;
