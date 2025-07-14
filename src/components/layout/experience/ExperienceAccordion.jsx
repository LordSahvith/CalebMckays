import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionContent,
} from "../../common/accordion/Accordion";

function ExperienceAccordion({ data, activeId, setActiveId }) {
  const toggle = function (itemId) {
    return activeId === itemId ? setActiveId(null) : setActiveId(itemId);
  };

  return (
    <Accordion>
      {data.map((item) => (
        <AccordionItem key={item.id}>
          <AccordionTitle item={item.id} action={toggle}>
            <h3>{item.job}</h3>
            <span className={`plus-icon ${activeId === item.id ? "show" : ""}`}>
              <span className="bar bar-vertical"></span>
              <span className="bar bar-horizontal"></span>
            </span>
          </AccordionTitle>
          <AccordionContent shouldOpen={activeId === item.id}>
            <div className="job">
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
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default ExperienceAccordion;
