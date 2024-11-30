import { useState } from "react";
import { Tab } from "../Tab/Tab";
import "./ListTab.css";

const data = [
  {
    label: "Accueil",
  },
  {
    label: "Classes",
  },
  {
    label: "Élèves",
  },
];

export function ListTab() {

  const [activeTab, setActiveTab] = useState(0)



  return (
    <div className="listTab">
      {data.map((tabData, i) => {
        if (i === activeTab) {
          return <Tab tab={tabData.label} active={true} index={i} setActiveTab={setActiveTab}/>;
        } else {
          return <Tab tab={tabData.label} active={false} index={i} setActiveTab={setActiveTab} />;
        }
      })}
    </div>
  );
}