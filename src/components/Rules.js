import React from "react";
import imageRules from "../images/image-rules.svg";
import imageRulesPro from "../images/image-rules-bonus.svg";
export const Rules = (props) => {
  const closeThis = () => {
    props.props.onClose(false);
  };
  return (
    <div className="rules-container">
      {props.props.proMode ? (
        <img src={imageRulesPro} alt="imageRulesPro" />
      ) : (
        <img src={imageRules} alt="imageRules" />
      )}
      <button className="rules-close" onClick={closeThis}>
        X
      </button>
    </div>
  );
};
