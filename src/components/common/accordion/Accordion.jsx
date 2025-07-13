import "./Accordion.css";

function Accordion({ data, activeId, setActiveId }) {
  const toggle = function (itemId) {
    return activeId === itemId ? setActiveId(null) : setActiveId(itemId);
  };

  return (
    <div className="accordion-wrapper appear-on-scoll">
      <div className="accordion">
        {data.map((item) => (
          <div key={item.id} className="accordion-item">
            <div className="accordion-title">
              <button
                className="accordion-button"
                onClick={() => toggle(item.id)}
              >
                <h3>{item.job}</h3>
                <span
                  className={`accordion-plus ${
                    activeId === item.id ? "show" : ""
                  }`}
                >
                  <div
                    className={`plus-icon ${
                      activeId === item.id ? "show" : ""
                    }`}
                  >
                    <span className="bar bar-vertical"></span>
                    <span className="bar bar-horizontal"></span>
                  </div>
                </span>
              </button>
            </div>
            <div
              className={`accordion-content job ${
                activeId === item.id ? "show" : ""
              }`}
            >
              <h4 className="job-title">{item.title}</h4>
              <p>{item.duration}</p>
              <div className="accordion-description">
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
