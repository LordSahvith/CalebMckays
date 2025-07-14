import { useEffect } from "react";
import {
  Tabs,
  TabsTitlesWrapper,
  TabsContentWrapper,
  TabTitle,
  TabContent,
} from "../../common/tabs/Tabs";

function TabTitles({ data, activeId, action }) {
  return data.map((tab) => (
    <TabTitle
      key={tab.id}
      item={tab.id}
      isActive={tab.id === activeId}
      action={action}
    >
      <h3>{tab.job}</h3>
    </TabTitle>
  ));
}

function TabContents({ data, activeId }) {
  return data.map((item) => (
    <TabContent key={item.id} isActive={item.id === activeId}>
      <div className="job">
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
    </TabContent>
  ));
}

function ExperienceTabs({ data, activeId, setActiveId }) {
  const toggle = function (itemId) {
    setActiveId(itemId);
  };

  // activates the first in the array since accordions start closed
  useEffect(() => {
    if (!activeId) {
      toggle(0);
    }
  }, []);

  return (
    <Tabs>
      <TabsTitlesWrapper>
        <TabTitles data={data} activeId={activeId} action={toggle} />
      </TabsTitlesWrapper>
      <TabsContentWrapper>
        <TabContents data={data} activeId={activeId} />
      </TabsContentWrapper>
    </Tabs>
  );
}

export default ExperienceTabs;
