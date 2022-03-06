import React from 'react';
import "./user.css"
import image from "../../images/b3.jpg"
import Avatar from '@mui/material/Avatar';
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
                            <span className="userShowTitle">Web Developper</span>

                        </div>
                    </div>
                    <div className="userShowBottom"></div>
                </div>
                <div className="userUpdate"></div>
            </div>
        </div>
     );
}
 
export default User;