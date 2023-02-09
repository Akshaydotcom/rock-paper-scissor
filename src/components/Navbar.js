import React from "react";

export const Navbar = (props) => {
    const [navBar, setNavBar]=React.useState(false);
    const showNavBar=()=>{
        console.log(navBar)
        navBar?setNavBar(false):setNavBar(true)
    }
  return (
    <>
      <div className="icon" onClick={showNavBar}>
        <i className={navBar?"fa fa-times":"fa fa-bars"}></i>
      </div>
      <nav className={navBar ? "navbar dropdown":"navbar"}>
        <div>
          <ul>
            <li>Home</li>
            <li>History</li>
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
