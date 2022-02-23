import React from 'react';
import "./topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import image from "../../images/logo4.png"
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
                  <span className='topIconBadge'>2</span>
              </div>
          </div>
      </div>
     </div>
    </> );
}
 
export default Topbar;