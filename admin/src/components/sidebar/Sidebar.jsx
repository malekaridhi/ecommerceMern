import React from 'react';
import "./sidebar.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ReportIcon from '@mui/icons-material/Report';
const Sidebar = () => {
    return ( 
        <>
        <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className='sidebarTitle'>Dashboard</h3>
                 <ul className="sidebarList">
                     <li className="sidebarListItem active">
                       <LineStyleIcon className='sidebarIcon'/>
                       Home
                     </li>
                     <li className="sidebarListItem">
                       <TimelineIcon className='sidebarIcon'/>
                       Sales
                     </li>
                     <li className="sidebarListItem">
                       <TrendingUpIcon className='sidebarIcon'/>
                       Home
                     </li>
                 </ul>
                 <h3 className='sidebarTitle'>Quick Menu</h3>
                 <ul className="sidebarList">
                     <li className="sidebarListItem ">
                       <PersonOutlineIcon className='sidebarIcon' />
                       Users
                     </li>
                     <li className="sidebarListItem">
                       <StorefrontIcon className='sidebarIcon'/>
                       Product
                     </li>
                     <li className="sidebarListItem">
                       <AttachMoneyIcon className='sidebarIcon'/>
                       Transactions
                     </li>
                      <li className="sidebarListItem">
                       <EqualizerIcon className='sidebarIcon'/>
                       Report
                     </li>
                 </ul>
                 <h3 className='sidebarTitle'>Notification</h3>
                 <ul className="sidebarList">
                     <li className="sidebarListItem ">
                       <MailOutlineIcon className='sidebarIcon' />
                       Mail
                     </li>
                     <li className="sidebarListItem">
                       <DynamicFeedIcon className='sidebarIcon'/>
                       Facebook
                     </li>
                     <li className="sidebarListItem">
                       <ChatBubbleOutlineOutlinedIcon className='sidebarIcon'/>
                       Message
                     </li>
                     
                 </ul>
                 <h3 className='sidebarTitle'>Staff</h3>
                 <ul className="sidebarList">
                     <li className="sidebarListItem ">
                       <WorkOutlineOutlinedIcon className='sidebarIcon' />
                       Manage
                     </li>
                     <li className="sidebarListItem">
                       <TimelineIcon className='sidebarIcon'/>
                       Analitics
                     </li>
                     <li className="sidebarListItem">
                       <ReportIcon className='sidebarIcon'/>
                       Reports
                     </li>
                     
                 </ul>
            </div>
        </div>
        </div>
        </>
     );
}
 
export default Sidebar;