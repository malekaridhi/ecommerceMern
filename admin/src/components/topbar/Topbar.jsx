import React from 'react';
import "./topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import image from "../../images/logo5.png"
import image1 from "../../images/c10.jpg"
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
const Topbar = () => {
    return ( <>
     <div className='topbar'>
      <div className="topbarWrapper">
          <div className="topLeft">
              <img className='logo' src={image}/>
          </div>
          <div className="topRight">
              <div className="topbarIconContainer">
                  <NotificationsNoneIcon/>
                  <span className='topIconBadge'>2</span>
              </div>
              <div className="topbarIconContainer">
                  <LanguageIcon/>
                  <span className='topIconBadge'>2</span>
              </div>
              <div className="topbarIconContainer">
                  <SettingsIcon/>
                  
              </div>
              {/* <img src={image1} className='topAvatar' /> */}
              
         <Avatar className='topAvatar' src={image1} /> 

          </div>
      </div>
     </div>
    </> );
}
 
export default Topbar;