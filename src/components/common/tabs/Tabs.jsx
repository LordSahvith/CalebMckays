import "./Tabs.css";

function Tabs({ data, activeId, toggleActive, windowSize }) {
  // if there is no active ID then default to first item
  !activeId && windowSize.width >= 768
    ? toggleActive(0)
    : toggleActive(activeId);

  return (
    <div className="tabs-wrapper">
      <div className="tabs">
        <div className="tabs-titles">
          {data.map((tab) => (
            <div
              key={tab.id}
              className={`tab-button ${tab.id === activeId ? "active" : ""}`}
            >
              <button
                className="accordion-button"
                onClick={() => toggleActive(tab.id)}
              >
                <h3>{tab.job}</h3>
              </button>
            </div>
          ))}
        </div>
        <div className="tabs-content">
          {data.map((job) => (
            <div
              className={`tab-content job ${
                job.id === activeId ? "active" : ""
              }`}
            >
              <p>{job.duration}</p>
              <p>{job.title}</p>
              <p>{job.content.description}</p>
              <ul>
                {job.content.duties.map((duty) => (
                  <li key={duty}>{duty}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
