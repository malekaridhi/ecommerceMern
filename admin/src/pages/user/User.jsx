import React from 'react';
import "./user.css"
import image from "../../images/b3.jpg"
import Avatar from '@mui/material/Avatar';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
const User = () => {
    return ( 
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className='userTitle'>Edit User</h1>
                <button className="userAddButton">Create</button>    
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <Avatar src={image}  className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Rachel Green</span>
                            <span className="userShowUserTitle">Web Developper</span>

                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                           <PermIdentityIcon className='userShowIcon'/>
                           <span className="userShowInfoTitle">rachel888</span>
                        </div>
                        <div className="userShowInfo">
                           <CalendarTodayIcon className='userShowIcon'/>
                           <span className="userShowInfoTitle">12.02.1978</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                           <PhoneAndroidIcon className='userShowIcon'/>
                           <span className="userShowInfoTitle">+216 20 555 555</span>
                        </div>

                        <div className="userShowInfo">
                           <MailOutlineIcon className='userShowIcon'/>
                           <span className="userShowInfoTitle">rachel888@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                           <LocationSearchingIcon className='userShowIcon'/>
                           <span className="userShowInfoTitle">Tunis | Tunisia</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate"></div>
            </div>
        </div>
     );
}
 
export default User;