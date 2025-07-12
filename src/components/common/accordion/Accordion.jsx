import "./Accordion.css";

function Accordion({ data, activeId, setActiveId }) {
  const toggle = function (itemId) {
    return activeId === itemId ? setActiveId(null) : setActiveId(itemId);
  };

  return (
    <div className="accordion-wrapper">
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
                  className={`accordion-caret ${
                    activeId === item.id ? "caret-toggle" : ""
                  }`}
                >
                  &lt;
                </span>
              </button>
            </div>
            <div
              className={`accordion-content job ${
                activeId === item.id ? "show" : ""
              }`}
            >
              <p>{item.duration}</p>
              <p>{item.title}</p>
              <p>{item.content.description}</p>
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
