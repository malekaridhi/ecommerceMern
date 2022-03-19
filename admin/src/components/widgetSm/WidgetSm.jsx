import React,{useState} from 'react';
import "./widgetSm.css"
import image from "../../images/a4.jpg"
import VisibilityIcon from '@mui/icons-material/Visibility';
const WidgetSm = () => {
    const [users,setUsers] = useState([])
    return ( 
        <div className="widgetsm">
         <span className="widgetsmTitle">New Join Members</span>
         <ul className="widgetsmList">
             <li className="widgetsmItem">
                 <img src={image} alt="" className="widgetsmImg" />
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