import React from 'react'
import { Choice } from './Choice'
export const Consequence = (props) =>{
    //Randomly Pick RPS
    const [pcChoice, setPcChoice]=React.useState(10)
    const [pcChoiceToSent, setPcChoiceToSent]=React.useState('')
    const [result,setResult]=React.useState('');
    React.useEffect(()=>{
        props.proMode? setPcChoice(Math.floor(Math.random() * 5)):setPcChoice(Math.floor(Math.random() * 3))
    },[props])
    

    //Calculation Pending
    /*        Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and, as it always has, rock crushes scissors
    */
    React.useEffect(()=>{
        if(pcChoice!==10){
            if(pcChoice===0) {
                //pcChoice is rock
                setPcChoiceToSent('rock')
                if(props.choice==='scissors'||props.choice==='lizard') 
                    setResult('PC wins')
                else
                    setResult('You Win')
            }
            else if(pcChoice===1) {
                //pcChoice is Paper
                setPcChoiceToSent('paper')
                if(props.choice==='rock'||props.choice==='spock') 
                    setResult('PC won')
                else
                    setResult('You Win')
            }
            else if(pcChoice===2) {
                //pcChoice is scissors
                setPcChoiceToSent('scissors')
                if(props.choice==='paper'||props.choice==='lizard')//user choice 
                    setResult('PC wins')
                else
                    setResult('You Win')
            }
            else if(pcChoice===3) {
                //pcChoice is lizard
                setPcChoiceToSent('lizard')
                if(props.choice==='paper'||props.choice==='spock') 
                    setResult('PC Wins')
                else
                    setResult('You Win')
            }
            else{
                //pcChoice is spock
                setPcChoiceToSent('spock')
                if(props.choice==='scissors'||props.choice==='rock') 
                    setResult('PC wins')
                else
                    setResult('You Win')
            }
        }

    },[pcChoice, props.choice])
    //Saving Score to localSTorage

    const resetChoice = () =>{
        props.setChoice('')
    }
    

    return(<div>
        You Chose 
        {props.choice && <Choice choice={props.choice} origin={'consequence'}/>}
        The House Chose
        {<Choice pcChoice={pcChoiceToSent}/>}
        <span id="result">{result}</span>
        <button onClick={resetChoice}>play again</button>
    </div>)
}