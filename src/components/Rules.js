import React from 'react'
import imageRules from '../images/image-rules.svg'
import imageRulesPro from '../images/image-rules-bonus.svg'
export const Rules = (props) =>{
    return(<div className='rules-container'>
        {props.proMode?<img src={imageRulesPro} alt="imageRulesPro"/>:<img src={imageRules} alt="imageRules"/>}
    </div>)
}