import React from "react";
import { Header } from "./components/Header";
import { Rules } from "./components/Rules";
import { Action } from "./components/Action";
import { Consequence } from "./components/Consequence";
import "./App.css";

function App() {
  // let score=sessionStorage.getItem('scoreOfRPS')!==null||sessionStorage.getItem('scoreOfRPS')!=="0"?Number(sessionStorage.getItem('scoreOfRPS')):0
  // if(score!==0)sessionStorage.setItem('scoreOfRPS',score)
  // else if (isNaN(score))sessionStorage.setItem('scoreOfRPS','0')
  const [score, setScore] = React.useState(0);
  const [rulesClicked, setRulesClicked] = React.useState(false);
  const [choice, setChoice] = React.useState();
  const [proMode, setProMode] = React.useState(false);
  const openRules = () => {
    rulesClicked ? setRulesClicked(false) : setRulesClicked(true);
  };
  const enableProMode = () => {
    proMode ? setProMode(false) : setProMode(true);
  };
  const getScore = (data) => {
    setScore(data);
  };
  return (
    <div className="App">
      <Header score={score} proMode={proMode} enableProMode={enableProMode} />
      {choice ? (
        <Consequence
          getScore={getScore}
          choice={choice}
          setChoice={setChoice}
          proMode={proMode}
          score={score}
        />
      ) : (
        <Action setChoice={setChoice} proMode={proMode} />
      )}
      <div className="rules-container">
        <button onClick={openRules} id="rules-button">
          Rules
        </button>
      </div>
      {rulesClicked && <Rules proMode={proMode} />}
    </div>
  );
}

export default App;
