

import './App.css';
import Contenedor from './components/Contenedor';
import Contenedor2 from './components/Contenedor2';
import Contenedor3 from './components/Contenedor3';
import Menunav from './components/Menunav.js';


function App() {
  return (
    <div className="contenedorGen" >
      <div >
        <Menunav/>
      </div>
      <div className="" >
        <Contenedor/>
      </div>
      <div className="" >
        <Contenedor2/>
      </div>
      <div className="" >
        <Contenedor3/>
      </div>
    </div>
  )
}

export default App;
