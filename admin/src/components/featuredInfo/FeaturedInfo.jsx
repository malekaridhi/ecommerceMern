import React from 'react';
import "./featuredInfo.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const FeaturedInfo = () => {
    return ( 
        <div className='featuredInfo'>
              <div className="featuredItem">
                  <span className="featuredTitle">
                      Revenue
                  </span>
                  <div className="featuredMoneyContainer">
                      <span className="featuredMoney">250 DT</span>
                      <span className="featuredMoneyRate">-11.4
                       <ArrowDownwardIcon/>
                      </span>
                       <span className="featuredSub">Cpmpared to last mounth</span>
                  </div>
              </div>
        </div>
     );
}
 
export default FeaturedInfo;