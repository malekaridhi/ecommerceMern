import React ,{useEffect,useState}from 'react';
import "./widgetLg.css"
import image from "../../images/b2.jpg"
import {userRequest} from "../../reqMethods"
import Avatar from '@mui/material/Avatar';
const WidgetLg = () => {
     const [orders,setOrders] = useState([])

     useEffect(() => {
       const getOrders= async () =>{
           try {
               const res = await userRequest.get("orders")
               setOrders(res.data)
           } catch (error) {
               console.log(error);
           }
       }
       getOrders()
     }, [])
     const Button = ({ type }) => {
          return <button className={"widgetLgButton " + type}>{type}</button>;
        };
    return ( 
        <div className="widgetLg">
             <h3 className="widgetLgTitle">Latest Transactions</h3>
             <table className="widgetLgTable">
                  <tr className="widgetLTr">
                       <th className="widgetLgTh">Customer</th>
                       <th className="widgetLgTh">Date</th>
                       <th className="widgetLgTh">Amount</th>
                       <th className="widgetLgTh">Status</th>    
                  </tr>
                    <tr className="widgetLgTr">
                         <td className="widgetLgUser">
                              <img src={image} alt="" className="widgetLgImg" />
                              <span className="widgetLgName">Phebee Bufee</span>
                         </td>
                         <td className="widgetLgDate">24 Feb 2022</td>
                         <td className="widgetLgAmount">500 DT</td>
                         <td className="widgetLgStatus"><Button type="Approved"/></td>
                    </tr>
                  
             </table>
        </div>
     );
}
 
export default WidgetLg;