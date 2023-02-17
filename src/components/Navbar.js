import React from "react";

export const Navbar = (props) => {
    // const [navBar, setNavBar]=React.useState(false);
    // const showNavBar=()=>{
    //     navBar?setNavBar(false):setNavBar(true)
    // }
  return (
    <>
      {/* <div className="icon">
        <i className={navBar?"fa fa-times":"fa fa-bars"}></i>
      </div> */}
      <nav className="navbar dropdown">
        <div>
          <ul>
            <li>Home</li>
            <li onClick={props.enableHistory}>{props.showHistory?"History On":"History Off"}</li>
            <li onClick={props.enableProMode}>
              {props.proMode ? "Normal Mode" : "Pro-Mode"}
            </li>
            <li>Contact Info</li>
          </ul>
        </div>
      </nav>
    </>
  );
};
