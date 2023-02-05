import React from "react";
import { Choice } from "./Choice";
export const Action = (props) => {
  return (
    <div className="action-main">
      <div className="row-1">
        <Choice
          choice={"rock"}
          setChoice={props.setChoice}
          origin={"action"}
          proMode={props.proMode}
        />
      </div>
      <div className="row-2">
        <Choice
          choice={"paper"}
          setChoice={props.setChoice}
          origin={"action"}
          proMode={props.proMode}
        />
        <Choice
          choice={"scissors"}
          setChoice={props.setChoice}
          origin={"action"}
          proMode={props.proMode}
        />
      </div>
      <div className="row-3">
        {props.proMode && (
          <Choice
            choice={"lizard"}
            setChoice={props.setChoice}
            origin={"action"}
            proMode={props.proMode}
          />
        )}
        {props.proMode && (
          <Choice
            choice={"spock"}
            setChoice={props.setChoice}
            origin={"action"}
            proMode={props.proMode}
          />
        )}
      </div>
    </div>
  );
};
