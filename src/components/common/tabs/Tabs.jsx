import { useEffect } from "react";
import "./Tabs.css";

function Tabs({ data, activeId, setActiveId }) {
  const toggle = function (itemId) {
    setActiveId(itemId);
  };

  useEffect(() => {
    if (!activeId) {
      toggle(0);
    }
  }, []);

  return (
    <div className="tabs-wrapper appear-on-scoll">
      <div className="tabs">
        <div className="tabs-titles">
          {data.map((tab) => (
            <div
              key={tab.id}
              className={`tab-button ${tab.id === activeId ? "active" : ""}`}
            >
              <button
                className="accordion-button"
                onClick={() => toggle(tab.id)}
              >
                <h3>{tab.job}</h3>
              </button>
            </div>
          ))}
        </div>
        <div className="tabs-content">
          {data.map((job) => (
            <div
              key={job.id}
              className={`tab-content job ${
                job.id === activeId ? "active" : ""
              }`}
            >
              <h4 className="job-title">{job.title}</h4>
              <p>{job.duration}</p>
              <div className="tab-description">
                {job.content.description.map((desc) => (
                  <p key={desc}>{desc}</p>
                ))}
              </div>
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
