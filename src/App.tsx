import React, {useState} from 'react';
import './App.css'
import {Calculator} from "./components/Calculator";
import {Others} from "./components/Others";

function App() {
  const [showComponent, setShowComponent] = useState<String>();
  return (
    <div>
      <button onClick={() => setShowComponent('Calculator')}>Калькулятор</button>
      <button onClick={() => setShowComponent('Others')}>Другое</button>

      { showComponent === 'Calculator' ? <Calculator /> : null }
      { showComponent === 'Others' ? <Others /> : null }
    </div>
  );
}

export default App;
