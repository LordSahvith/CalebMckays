import { useEffect } from "react";
import "./Tabs.css";

function TabTitles({ item, isActive, toggle }) {
  return (
    <div className={`tab-button ${isActive ? "active" : ""}`}>
      <button className="accordion-button" onClick={() => toggle(item.id)}>
        <h3>{item.job}</h3>
      </button>
    </div>
  );
}

function TabContent({ item, isActive }) {
  return (
    <div
      key={item.id}
      className={`tab-content job ${isActive ? "active" : ""}`}
    >
      <h4 className="job-title">{item.title}</h4>
      <p>{item.duration}</p>
      <div className="tab-description">
        {item.content.description.map((desc) => (
          <p key={desc}>{desc}</p>
        ))}
      </div>
      <ul>
        {item.content.duties.map((duty) => (
          <li key={duty}>{duty}</li>
        ))}
      </ul>
    </div>
  );
}

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
            <TabTitles
              key={tab.id}
              item={tab}
              isActive={tab.id === activeId}
              toggle={toggle}
            />
          ))}
        </div>
        <div className="tabs-content">
          {data.map((job) => (
            <TabContent item={job} isActive={job.id === activeId} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
