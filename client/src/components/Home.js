import React, { Component } from 'react';
import ReactEcharts from "echarts-for-react";
// import {FrontendPieChart} from '../assets/Charts/FrontendPieChart'
import {TreeChart} from '../assets/Charts/TreeChart'

class Home extends Component {

  render() {
    return (
      <div>
        <h2>
          Homepage
        </h2>
        <br/>
        <ReactEcharts option={TreeChart} style={{height: 600}} />
      </div>
    )
  }
}

export default Home;