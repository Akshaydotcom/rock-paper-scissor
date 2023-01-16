import React from 'react'
import { Choice } from './Choice'
export const Action = (props)=>{
    return(<div>
        <Choice choice={"rock"} setChoice={props.setChoice} origin={'action'}/>
        <Choice choice={"paper"} setChoice={props.setChoice} origin={'action'}/>
        <Choice choice={"scissors"} setChoice={props.setChoice} origin={'action'}/>
        {props.proMode && <Choice choice={"lizard"} setChoice={props.setChoice} origin={'action'}/>}
        {props.proMode && <Choice choice={"spock"} setChoice={props.setChoice} origin={'action'}/>}

    </div>)
}