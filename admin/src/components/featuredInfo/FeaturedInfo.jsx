import React,{useState,useEffect} from 'react';
import "./featuredInfo.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { userRequest } from '../../reqMethods';
const FeaturedInfo = () => {
    const [income,setIncome]=useState([])
    
    
    
    useEffect(() => {
     const getIncome = async ()=>{
        try {
            const res = await userRequest.get("orders/income")
            setIncome(res.data)
        } catch (error) {
          console.log(error);  
        }
     }
     getIncome()
    }, [])
    console.log(income);
    return ( 
        <div className='featured'>
              <div className="featuredItem">
                  <span className="featuredTitle">
                      Revenue
                  </span>
                  <div className="featuredMoneyContainer">
                      <span className="featuredMoney">250 DT</span>
                      <span className="featuredMoneyRate">-11.4
                       <ArrowDownwardIcon className='featuredIcon negative'/>
                      </span>
                  </div>
                       <span className="featuredSub">Cpmpared to last month</span>
              </div>
              <div className="featuredItem">
                  <span className="featuredTitle">
                      Salse
                  </span>
                  <div className="featuredMoneyContainer">
                      <span className="featuredMoney">244 DT</span>
                      <span className="featuredMoneyRate">-1.4
                       <ArrowDownwardIcon className='featuredIcon negative'/>
                      </span>
                  </div>
                       <span className="featuredSub">Cpmpared to last month</span>
              </div>
              <div className="featuredItem">
                  <span className="featuredTitle">
                      Cost
                  </span>
                  <div className="featuredMoneyContainer">
                      <span className="featuredMoney">410 DT</span>
                      <span className="featuredMoneyRate">+5.4
                       <ArrowUpwardIcon className='featuredIcon positive'/>
                      </span>
                  </div>
                       <span className="featuredSub">Cpmpared to last month</span>
              </div>
        </div>
     );
}
 
export default FeaturedInfo;