import React from 'react';
import "./newUser.css"

const NewUser = () => {
    return ( 
        <div className="newUser">
           <h1 className="userTitle">New User</h1> 
           <form  className="newUserForm">
               <div className="newUserItem">
                   <label>Username</label>
                   <input type="text" placeholder='harry'/>
               </div>
               <div className="newUserItem">
                   <label>Full name</label>
                   <input type="text" placeholder='harry'/>
               </div>
               <div className="newUserItem">
                   <label>Username</label>
                   <input type="text" placeholder='harry'/>
               </div>
               <div className="newUserItem">
                   <label>Username</label>
                   <input type="text" placeholder='harry'/>
               </div>
               <div className="newUserItem">
                   <label>Username</label>
                   <input type="text" placeholder='harry'/>
               </div>
               <div className="newUserItem">
                   <label>Username</label>
                   <input type="text" placeholder='harry'/>
               </div>
               <div className="newUserItem">
                   <label>Username</label>
                   <input type="text" placeholder='harry'/>
               </div>
           </form>
        </div>
     );
}
 
export default NewUser;