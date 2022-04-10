import React,{useState,useEffect} from 'react';
import "./widgetSm.css"
import image from "../../images/a4.jpg"
import VisibilityIcon from '@mui/icons-material/Visibility';
import {userRequest} from "../../reqMethods"
import Avatar from '@mui/material/Avatar';
const WidgetSm = () => {
    const [users,setUsers] = useState([])

    useEffect(() => {
      const getusers = async () =>{
          try {
              const res = await userRequest.get("user/?new=true")
              setUsers(res.data)
          } catch (error) {
              console.log(error);
          }
      }
      getusers()
    }, [])
    
    return ( 
        <div className="widgetsm">
         <span className="widgetsmTitle">New Join Members</span>
         <ul className="widgetsmList">
             {users.map(user=>(

             <li className="widgetsmItem" key={user._id}>
                 <Avatar  className="widgetsmImg" />
                  <div className="widgetsmUser">
                      <span className="widgetsmUsername">{user.username}</span>
                  </div>
                  <button className="widgetsmButton">
                      <VisibilityIcon className='widgetsmIcon'/>
                      Display
                  </button>
             </li>
             ))}
         </ul>
        </div>
     );
}
 
export default WidgetSm;