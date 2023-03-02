
import "../styles/Navbar.css"
import AlignHorizontalRightRounded from "@mui/icons-material/AlignHorizontalRightRounded";
import react, {useEffect, useState } from 'react';
import {Link, useLocation} from "react-router-dom";

function Navbar() {
  const [expandNavBar, setExpandNavbar] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setExpandNavbar(false);
    }, [location]);

  return (
    <div className = "navbar" id = {expandNavBar ? "open" : "close" }>
      <div className = "toggleButton" >
        <button 
          onClick = {()=> {setExpandNavbar ((prev) => !prev);
          }}> 
            <AlignHorizontalRightRounded/>
        </button>
      </div>
      <div className = "links">
        <Link to = "/"> Home</Link>
        <Link to = "/Projects"> Projects</Link>
        <Link to = "/Experience"> Experience</Link>
      </div>
    </div>
  );
}

export default Navbar;