import React from "react";

export const History = (props) => {
    const [results,setResults]=React.useState([]);
    React.useEffect(()=>{
        setResults([...results,props.result])
    },[props.result])
    
  return <div>{(results.map((result)=>(<div>{result}</div>)))}</div>;
};
