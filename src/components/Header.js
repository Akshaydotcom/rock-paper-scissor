import React from "react";
import logo from "../images/logo.svg";
import logoPro from "../images/logo-bonus.svg";
export const Header = (props) => {
  return (
    <div className="proLogo-container">
      {props.proMode ? (
        <img onClick={props.enableProMode} src={logoPro} alt="" />
      ) : (
        <img onClick={props.enableProMode} src={logo} alt="" />
      )}
      <span className="score">{props.score}</span>
    </div>
  );
};
