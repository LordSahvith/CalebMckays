import { useState } from "react";
import "./Accordion.css";

function Accordion({ data }) {
  const [selected, setSelected] = useState(null);

  const toggle = (item) => {
    return selected === item ? setSelected(null) : setSelected(item);
  };

  return (
    <div className="accordion-wrapper">
      <div className="accordion">
        {data.map((item) => (
          <div key={item.id} className="accordion-item">
            <div className="accordion-title" onClick={() => toggle(item.id)}>
              <h3>{item.job}</h3>
              <span
                className={`accordion-caret ${
                  selected === item.id ? "caret-toggle" : ""
                }`}
              >
                &lt;
              </span>
            </div>
            <div
              className={`accordion-content job ${
                selected === item.id ? "show" : ""
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
