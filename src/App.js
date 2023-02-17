import React from "react";
import { Header } from "./components/Header";
import { Action } from "./components/Action";
import { Consequence } from "./components/Consequence";
import "./App.css";
import { NewWindow } from "./components/NewWindow";
import { Navbar } from "./components/Navbar";
import { History } from "./components/History";

function App() {
  // let score=sessionStorage.getItem('scoreOfRPS')!==null||sessionStorage.getItem('scoreOfRPS')!=="0"?Number(sessionStorage.getItem('scoreOfRPS')):0
  // if(score!==0)sessionStorage.setItem('scoreOfRPS',score)
  // else if (isNaN(score))sessionStorage.setItem('scoreOfRPS','0')
  const [result, setResult]=React.useState([])
  const [showHistory, setHistory]=React.useState(false);
  const [score, setScore] = React.useState(0);
  const [rulesClicked, setRulesClicked] = React.useState(false);
  const [choice, setChoice] = React.useState();
  const [proMode, setProMode] = React.useState(false);
  const openRules = () => {
    rulesClicked ? setRulesClicked(false) : setRulesClicked(true);
  };
  const enableProMode = () => {
    setChoice("")
    proMode ? setProMode(false) : setProMode(true);
  };
  const enableHistory=()=>{
    showHistory ? setHistory(false) : setHistory(true);
  }
  const getScore = (data) => {
    setScore(data);
  };
  const getResult=(data)=>{
    // setResult(data);
    setResult([...result,data])
  }
  const refreshScore=()=>{
    setScore(0);
  }
  const onClose = (data) => {
    setRulesClicked(data);
  };
  return (
    <div className="App">
      <Navbar proMode={proMode} enableProMode={enableProMode} enableHistory={enableHistory} showHistory={showHistory}/>
      <Header score={score} proMode={proMode} enableProMode={enableProMode} />
      {choice ? (
        <Consequence
          getScore={getScore}
          choice={choice}
          setChoice={setChoice}
          proMode={proMode}
          score={score}
          getResult={getResult}
        />
      ) : (
        <Action setChoice={setChoice} proMode={proMode} />
      )}
      <div className="rules-container">
        <button onClick={openRules} id="rules-button">
          Rules
        </button>
        <button id="rules-button" onClick={refreshScore}>Refresh Score</button>
      </div>
      {rulesClicked && (
        <NewWindow proMode={proMode} onClose={onClose}></NewWindow>
      )}
      {showHistory && <History showHistory={showHistory} result={result}/>}
    </div>
  );
}

export default App;
