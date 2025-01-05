import logo from './logo.svg';
import './App.css';
import { SideBar } from './Component/SideBarComponent/SideBar/SideBar';
import { Accueil } from './Component/Accueil/Accueil';
import { Classes } from './Component/ClasseComponent/Classes/Classes';
import { useState } from 'react';
import { Students } from './Component/StudentsComponent/Students/Students';

function App() {
  const [nav, setNav] = useState(0)
  const components = [
    <Accueil />,
    <Classes />,
    <Students />
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
