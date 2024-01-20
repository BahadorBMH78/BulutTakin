import { useEffect } from "react";
import * as echarts from "echarts";
import { GridComponent } from "echarts/components";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
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
        axisPointer: {
          type: "line",
          snap: true,
        },
        animationThreshold: 1, // set animation threshold to 1 to snap to nearest data point
      },
      legend: {
        orient: "horizontal",
        x: "50px",
        y: "bottom",
        data: ["Deposit", "Withdrawal"],
        icon: "circle",
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
      tooltip: {
        show: true,
        trigger: "axis",
        snap: true,
        backgroundColor: "#F4EBFF",
        borderColor: "#F4EBFF",
        formatter: function (params, ticket, callback) {
          // check if event property exists
          console.log(params[0]);
          if (params[0].event) {
            // get mouse position
            var mouseX = params[0].event.offsetX;
            var mouseY = params[0].event.offsetY;

            // set tooltip position to be above mouse cursor
            var tooltipX = mouseX;
            var tooltipY = mouseY - 10; // shift tooltip up by 10 pixels
            console.log(tooltipY, "tooltipY");
            // return formatted tooltip content
            return (
              '<div style="position:absolute;left:' +
              tooltipX +
              "px;top:" +
              tooltipY +
              'px;">' +
              "<div>" +
              params[0].name +
              "</div>" +
              "<div>" +
              params[0].seriesName +
              ": " +
              params[0].value +
              "</div>" +
              "</div>"
            );
          } else {
            // return default tooltip content
            return `<div style="width:160px;height:100px">
                      <p style="color:#6941C6;fontSize:12px">
                        ${params[0].name}
                      </p>
                      <div id="tooltipCircleContainer">
                        <div id="tooltipDeposit" style="width:9px;height:9px;borderRadius:100px;">
                          
                        </div>
                        <p>${params[0].seriesName}:</p>
                        <p>$${params[0].value}<p>
                      </div>
                      <div id="withDrawlContainer">
                        <div class="withDrawl">
                          
                        </div>
                        <p>${params[1].seriesName}:</p>
                        <p>$${params[1].value}<p>
                      </div>
                    <div>`;
          }
        },
      },
    };

    var myChart = echarts.init(document.getElementById("chart"));
    myChart.setOption(option);
  }, []);

  return <div id="chart" style={{ width: "100%", height: "300px" }}></div>;
}
