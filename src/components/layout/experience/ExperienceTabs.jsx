import { useEffect } from "react";
import {
  Tabs,
  TabsTitlesWrapper,
  TabsContentWrapper,
  TabTitle,
  TabContent,
} from "../../common/tabs/Tabs";

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
        {data.map((tab) => (
          <TabTitle
            key={tab.id}
            item={tab.id}
            isActive={tab.id === activeId}
            action={toggle}
          >
            <h3>{tab.job}</h3>
          </TabTitle>
        ))}
      </TabsTitlesWrapper>
      <TabsContentWrapper>
        {data.map((item) => (
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
        ))}
      </TabsContentWrapper>
    </Tabs>
  );
}

export default ExperienceTabs;
