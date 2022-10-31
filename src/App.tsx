import React, {useState} from 'react';
import './App.css'
import {Calculator} from "./components/Calculator";
import {Others} from "./components/Others";
import Quiz from "./components/Quiz";

function App() {
  const [showComponent, setShowComponent] = useState<String>();
  return (
    <div>
      <button onClick={() => setShowComponent('Calculator')}>Калькулятор</button>
      <button onClick={() => setShowComponent('Others')}>Другое</button>
      <button onClick={() => setShowComponent('Quiz')}>Квиз</button>

      { showComponent === 'Calculator' ? <Calculator /> : null }
      { showComponent === 'Others' ? <Others /> : null }
      { showComponent === 'Quiz' ? <Quiz /> : null }
    </div>
  );
}

export default App;
