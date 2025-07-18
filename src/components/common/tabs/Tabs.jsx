import "./Tabs.css";

function TabsTitlesWrapper({ children }) {
  return <div className="tabs-titles">{children}</div>;
}

function TabTitle({ item, isActive, action, children }) {
  return (
    <div className={`tab-button ${isActive ? "active" : ""}`}>
      <button onClick={() => action(item)}>{children}</button>
    </div>
  );
}

function TabsContentWrapper({ children }) {
  return <div className="tabs-content">{children}</div>;
}

function TabContent({ isActive, children }) {
  return (
    <div className={`tab-content ${isActive ? "active" : ""}`}>{children}</div>
  );
}

function Tabs({ children }) {
  return (
    <div className="tabs-wrapper">
      <div className="tabs">{children}</div>
    </div>
  );
}

export { Tabs, TabsTitlesWrapper, TabsContentWrapper, TabTitle, TabContent };
