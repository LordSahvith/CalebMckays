import "./Accordion.css";

function AccordionItem({ children }) {
  return <div className="accordion-item">{children}</div>;
}

function AccordionTitle({ item, action, children }) {
  return (
    <div className="accordion-title">
      <button className="accordion-button" onClick={() => action(item)}>
        {children}
      </button>
    </div>
  );
}

function AccordionContent({ shouldOpen, children }) {
  return (
    <div className={`accordion-content ${shouldOpen ? "show" : ""}`}>
      {children}
    </div>
  );
}

function Accordion({ children }) {
  return (
    <div className="accordion-wrapper">
      <div className="accordion">{children}</div>
    </div>
  );
}

export { Accordion, AccordionItem, AccordionTitle, AccordionContent };
