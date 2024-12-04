import logo from './logo.svg';
import './App.css';
import { SideBar } from './Component/SideBarComponent/SideBar/SideBar';
import { Accueil } from './Component/Accueil/Accueil';
import { Classes } from './Component/ClasseComponent/Classes/Classes';
import { useState } from 'react';

function App() {
  const [nav, setNav] = useState(0)
  const components = [
    <Accueil />,
    <Classes />,
  ];

  return (
    <div className="styleApp">
      <SideBar nav={nav} setNav={setNav}/>
      <div className="groupCollaps">
        {components[nav]}
      </div>
    </div>
  );
}

export default App;
