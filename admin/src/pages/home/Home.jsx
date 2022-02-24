import React from "react";
import Chart from "../../components/charts/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import {UserData} from "../../dummyData"
const Home = () => {
  return <div className="home">
      <FeaturedInfo/>
      <Chart
        data={UserData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">

      </div>
  </div>;
};

export default Home;
