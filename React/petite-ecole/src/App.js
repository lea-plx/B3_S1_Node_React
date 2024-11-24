import logo from './logo.svg';
import './App.css';
import { SideBar } from './Component/SideBarComponent/SideBar/SideBar';
import { Accueil } from './Component/Accueil/Accueil';
import { Classes } from './Component/ClasseComponent/Classes/Classes';

function App() {
  return (
    <div className="styleApp">
      <SideBar/>
      <div className="groupCollaps">
        <Accueil/>
        <Classes/>
      </div>
    </div>
  );
}

export default App;
