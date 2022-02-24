import React from 'react';
import "./widgetSm.css"
import image from "../../images/a4.jpg"
const WidgetSm = () => {
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
                  <button className="widgetsmButton"></button>
             </li>
         </ul>
        </div>
     );
}
 
export default WidgetSm;