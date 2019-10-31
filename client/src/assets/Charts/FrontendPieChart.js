export const FrontendPieChart = {
  title: {
    text: "JS Front End Frameworks",
    x: "center"
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    orient: "vertical",
    left: "left",
    data: ["React", "Angular", "Vue"]
  },
  series: [
    {
      name: "JS FrontEnd",
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        {
          value: 70,
          name: "React"
        },
        {
          value: 20,
          name: "Angular"
        },
        {
          value: 10,
          name: "Vue"
        }
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)"
        }
      }
    }
  ]
}
