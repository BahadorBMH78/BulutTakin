import { useEffect } from "react";
import * as echarts from "echarts";
import { GridComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

export default function Chart() {
  
  useEffect(() => {
    var option = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      legend: {
        orient: "horizontal",
        x: "50px",
        y: "bottom",
        data: ["Deposit", "Withdrawal"],
        icon: "circle"
      },
      series: [
        {
          name: "Deposit",
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          smooth: true,
          color: "#6941C6",
        },
        {
          name: "Withdrawal",
          data: [546, 932, 456, 934, 1290, 544, 1320],
          type: "line",
          smooth: true,
          color: "#101828",
        },
      ],
    };

    var myChart = echarts.init(document.getElementById("chart"));
    myChart.setOption(option);
  }, []);

  return <div id="chart" style={{ width: "100%", height: "300px" }}></div>;
}
