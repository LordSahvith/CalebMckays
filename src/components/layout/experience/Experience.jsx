import experienceData from "./data/experience";

function ExperienceSection() {
  return (
    <>
      <h3>Professional</h3>
      {experienceData.map((job) => (
        <section className="job checker-board" key={job.title}>
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

export default ExperienceSection;
