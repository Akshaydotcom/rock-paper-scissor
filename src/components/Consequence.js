/* eslint-disable eqeqeq */
import React from "react";
import { Choice } from "./Choice";
export const Consequence = (props) => {
  //Randomly Pick RPS
  const [pcChoice, setPcChoice] = React.useState(10);
  const [pcChoiceToSent, setPcChoiceToSent] = React.useState("");
  const [result, setResult] = React.useState("");
  
  React.useEffect(() => {
    props.proMode
      ? setPcChoice(Math.floor(Math.random() * 5))
      : setPcChoice(Math.floor(Math.random() * 3));
  }, [props.proMode]);

  //Calculation Pending
  /*        Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and, as it always has, rock crushes scissors
   */
  React.useEffect(() => {
    if (pcChoice !== 10) {
    let score = props.score;
      if (pcChoice === 0) {
        //pcChoice is rock
        setPcChoiceToSent("rock");
        if (props.choice === "scissors" || props.choice === "lizard") {
          setResult("The House wins");
          score-=1;
        } else if(props.choice=="rock"){
            setResult("Draw");
        }
        else {
          setResult("You Win");
          score+=1;
        }
      } else if (pcChoice === 1) {
        //pcChoice is Paper
        setPcChoiceToSent("paper");
        if (props.choice === "rock" || props.choice === "spock") {
          setResult("The House wins");
          score-=1;
        } else if(props.choice=="paper"){
            setResult("Draw");
        }else {
          setResult("You Win");
          score+=1;
        }
      } else if (pcChoice === 2) {
        //pcChoice is scissors
        setPcChoiceToSent("scissors");
        if (props.choice === "paper" || props.choice === "lizard") {
          //user choice
          setResult("The House wins");
          score-=1;
        } else if(props.choice=="scissors"){
            setResult("Draw");
        }else {
          setResult("You Win");
          score+=1;
        }
      } else if (pcChoice === 3) {
        //pcChoice is lizard
        setPcChoiceToSent("lizard");
        if (props.choice === "paper" || props.choice === "spock") {
          setResult("The House wins");
          score-=1;
        } else if(props.choice=="lizard"){
            setResult("Draw");
        }else {
          setResult("You Win");
          score+=1;
        }
      } else {
        //pcChoice is spock
        setPcChoiceToSent("spock");
        if (props.choice === "scissors" || props.choice === "rock") {
          setResult("The House wins");
          score-=1;
        } else if(props.choice=="spock"){
            setResult("Draw");
        }else {
          setResult("You Win");
          score+=1;
        }
      }
      props.getScore(score)
      //localStorage.setItem('scoreOfRPS',score)
    }
    
  }, [pcChoice, props.pcChoice]);
  //Saving Score to localSTorage

  const resetChoice = () => {
    props.setChoice("");
  };

  return (
    <div className="result-main">
      <div className="result-row-1">
        <div>
          {props.choice && (
            <Choice choice={props.choice} origin={"consequence"} />
          )}
          <span>You Chose</span>
        </div>
        <div>
          {<Choice pcChoice={pcChoiceToSent} />}
          <span>The House Chose</span>
        </div>
      </div>
      <div className="result-row-2">
        <span id="result">{result}</span>
        <button onClick={resetChoice}>play again</button>
      </div>
    </div>
  );
};
