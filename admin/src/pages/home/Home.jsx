import React ,{useState,useEffect, useMemo}from "react";
import Chart from "../../components/charts/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import {UserData} from "../../dummyData"
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { userRequest } from "../../reqMethods";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

const Home = () => {
  const [userStats,setUserStats]=useState([])
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  useEffect(() => {
    const getStats = async ()=>{
      try {
        const  res = await userRequest.get("/user/stats")
        res.data.map(item=>{
          setUserStats(prev=>[
            ...prev,
            {name:MONTHS[item._id-1], "Active User":item.total},
          ])
        })
      } catch (error) {
        console.log(error);
      }
    }
    getStats()
  }, [MONTHS])
 
  // console.log(userStats);
  return ( 
  <>  
  
  <div className="container"> <Sidebar />  <div className="home">
      <FeaturedInfo/>
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
           <WidgetSm/>
           <WidgetLg/>
      </div>
  </div>
  </div>
  </>);
};

export default Home;
