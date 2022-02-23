import React from 'react';
import "./sidebar.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
const Sidebar = () => {
    return ( 
        <>
        <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className='sidebarTitle'>Dashboard</h3>
                 <ul className="sidebarList">
                     <li className="sidebarListItem active">
                       <LineStyleIcon/>
                       Home
                     </li>
                     <li className="sidebarListItem">
                       <TimelineIcon/>
                       Sales
                     </li>
                     <li className="sidebarListItem">
                       <TrendingUpIcon/>
                       Home
                     </li>
                 </ul>
                 <h3 className='sidebarTitle'>Dashboard</h3>
                 <ul className="sidebarList">
                     <li className="sidebarListItem">
                       <LineStyleIcon/>
                       Home
                     </li>
                     <li className="sidebarListItem">
                       <TimelineIcon/>
                       Sales
                     </li>
                     <li className="sidebarListItem">
                       <TrendingUpIcon/>
                       Home
                     </li>
                 </ul>
            </div>
        </div>
        </div>
        </>
     );
}
 
export default Sidebar;