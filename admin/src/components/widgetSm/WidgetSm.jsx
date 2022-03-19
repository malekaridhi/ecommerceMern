import React,{useState,useEffect} from 'react';
import "./widgetSm.css"
import Avatar from '@mui/material/Avatar';
import image from "../../images/a4.jpg"
import VisibilityIcon from '@mui/icons-material/Visibility';
import {userRequest} from "../../reqMethods"
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
             <li className="widgetsmItem">
                 <img src={users.img} alt="" className="widgetsmImg" />
                  <div className="widgetsmUser">
                      <span className="widgetsmUsername">Ross Geller</span>
                      <span className="widgetsmUserTitle">Teacher</span>

                  </div>
                  <button className="widgetsmButton">
                      <VisibilityIcon className='widgetsmIcon'/>
                      Display
                  </button>
             </li>
         </ul>
        </div>
     );
}
 
export default WidgetSm;