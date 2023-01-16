import React from 'react'
import { Header } from './components/Header';
import { Rules } from './components/Rules';
import { Action } from './components/Action';
import { Consequence } from './components/Consequence';
import './App.css';

function App() {
  let score=localStorage.getItem('scoreOfRPS')!==null||localStorage.getItem('scoreOfRPS')!=="0"?Number(localStorage.getItem('scoreOfRPS')):0
  console.log(score)
  if(score!==0)localStorage.setItem('scoreOfRPS',score)
  else if (isNaN(score))localStorage.setItem('scoreOfRPS','0')
  const [rulesClicked, setRulesClicked]=React.useState(false)
  const [choice, setChoice]=React.useState()
  const [proMode, setProMode]=React.useState(false)
  const openRules = () =>{
    rulesClicked ? setRulesClicked(false): setRulesClicked(true)
  }
  const enableProMode = () =>{
    proMode ? setProMode(false) : setProMode(true)
  }
  
  return (
    <div className="App">
      <Header score={score} proMode={proMode} enableProMode={enableProMode}/>
      {choice ? <Consequence choice={choice} setChoice={setChoice} proMode={proMode} score={score}/>: <Action setChoice={setChoice}  proMode={proMode}/>}
      <div className='rules-container'>
        <button onClick={openRules} id="rules-button">Rules</button>
        </div>
        {rulesClicked && <Rules proMode={proMode}/>}
    </div>
  );
}

export default App;
