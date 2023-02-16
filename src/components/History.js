import React from "react";

export const History = (props) => {
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    setResults(props.result);
  }, [props.result]);

  return (
    <div id="sideNav" className={props.showHistory ? "sideNavInFrame sideNav" : "sideNav"}>
      {results.map((result) => (
        <div>{result}</div>
      ))}
    </div>
  );
};
