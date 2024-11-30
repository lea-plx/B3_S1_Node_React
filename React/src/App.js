import './App.css';
import { SideBar } from './Component/SideBar/SideBar/SideBar';
import { Accueil } from './Component/Accueil/Accueil';
import { Classes } from './Component/Classes/Classes/Classes';

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