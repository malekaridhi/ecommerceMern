import React from 'react';
import "./topbar.css"
import image from "../../images/logo4.png"
const Topbar = () => {
    return ( <>
     <div className='topbar'>
      <div className="topbarWrapper">
          <div className="topLeft">
              <img className='logo' src={image}/>
          </div>
          <div className="topRight">
              <div className="topbarIcon">
                  
              </div>
          </div>
      </div>
     </div>
    </> );
}
 
export default Topbar;