import React from 'react';
import ReactEcharts from "echarts-for-react";
import {TreeChart} from '../../assets/Charts/TreeChart'

export default function SkillTabs(props) {
  return (
      <ReactEcharts option={TreeChart} style={{height: 600}}/>
  )
}
