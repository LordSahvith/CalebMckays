import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionContent,
} from "../../common/accordion/Accordion";

function Title({ item, activeId, action }) {
  return (
    <AccordionTitle item={item.id} action={action}>
      <h3>{item.job}</h3>
      <span className={`plus-icon ${activeId === item.id ? "active" : ""}`}>
        <span className="bar bar-vertical"></span>
        <span className="bar bar-horizontal"></span>
      </span>
    </AccordionTitle>
  );
}

function Content({ item, activeId }) {
  return (
    <AccordionContent isActive={activeId === item.id}>
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
  );
}

function ExperienceAccordion({ data, activeId, setActiveId }) {
  const toggle = function (itemId) {
    return activeId === itemId ? setActiveId(null) : setActiveId(itemId);
  };

  return (
    <Accordion>
      {data.map((item) => (
        <div key={item.id} className="appear-on-scroll">
          <AccordionItem>
            <Title item={item} activeId={activeId} action={toggle} />
            <Content item={item} activeId={activeId} />
          </AccordionItem>
        </div>
      ))}
    </Accordion>
  );
}

export default ExperienceAccordion;
