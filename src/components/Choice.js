import React from 'react'
import lizard from '../images/icon-lizard.svg'
import paper from '../images/icon-paper.svg'
import rock from '../images/icon-rock.svg'
import scissors from '../images/icon-scissors.svg'
import spock from '../images/icon-spock.svg'
export const Choice = (props) =>{
    const setChoice = () =>{
        props.setChoice(props.choice)
    }
    let srcImageUser
    let srcImageComp
    if(props.choice==='lizard') srcImageUser=lizard
    else if(props.choice==='paper') srcImageUser=paper
    else if(props.choice==='rock') srcImageUser=rock
    else if(props.choice==='scissors') srcImageUser=scissors
    else if(props.choice==='spock') srcImageUser=spock

    if(props.pcChoice==='lizard') srcImageComp=lizard
    else if(props.pcChoice==='paper') srcImageComp=paper
    else if(props.pcChoice==='rock') srcImageComp=rock
    else if(props.pcChoice==='scissors') srcImageComp=scissors
    else if(props.pcChoice==='spock') srcImageComp=spock
    //if coming from Action, button should have onClick, if coming from consequence, button should not have onClick and Button should be bigger  
    return(
        <div className='actions-container'>
            {props.origin==='action'?<button onClick={setChoice}>
                <img src={srcImageUser} alt={srcImageUser} />
            </button>:props.origin==='consequence'?<button><img src={srcImageUser} alt={srcImageUser} /></button>:<button><img src={srcImageComp} alt={srcImageComp} /></button>
            }
        </div>
    )
}