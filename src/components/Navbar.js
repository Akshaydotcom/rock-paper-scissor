import React from "react";
import logo from '../images/joystick.png'
export const Navbar = (props) => {
    const [mobileDevice, setMobileDevice]=React.useState(false);
    React.useEffect(()=>{
      if (navigator.userAgentData.platform=='Android'||navigator.userAgentData.platform=='iPhone'){
        setMobileDevice(true)
      }
    },[])
  return (
    <>
      {/* <div className="icon">
        <i className={navBar?"fa fa-times":"fa fa-bars"}></i>
      </div> */}
      <nav className="navbar dropdown">
        <div>
          <ul>
            <li><img src={logo} alt={logo} /></li>
            <li onClick={props.changeFullScreen}>{props.isFullScreen?"Exit Full-Screen":"Enter Full-Screen"}</li>
            {!mobileDevice&&<li onClick={props.enableHistory}>{props.showHistory?"History On":"History Off"}</li>}
            <li onClick={props.enableProMode}>
              {props.proMode ? "Normal Mode" : "Pro-Mode"}
            </li>
            {/* <li>Contact Info</li> */}
          </ul>
        </div>
      </nav>
    </>
  );
};
