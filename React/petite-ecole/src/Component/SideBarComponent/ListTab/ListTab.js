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

export function ListTab(props) {


  return (
    <div className="listTab">
      {data.map((tabData, i) => {
        if (i === props.nav) {
          return <Tab tab={tabData.label} active={true} index={i} setNav={props.setNav}/>;
        } else {
          return <Tab tab={tabData.label} active={false} index={i} setNav={props.setNav} />;
        }
      })}
    </div>
  );
}
