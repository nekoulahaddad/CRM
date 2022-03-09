import React from "react";
import { Doughnut } from "react-chartjs-2";

export default function ChartSvg() {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green"],
    datasets: [
      {
        label: "# of Votes",
        data: [200, 300, 400, 500],
        backgroundColor: [
          "rgba(0, 161, 223, 1)",
          "rgba(250, 152, 18, 1)",
          "rgba(120, 194, 221, 1) ",
          "rgba(241, 63, 23, 1)",
        ],
        borderColor: [
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
        ],
        borderWidth: 1,
        polyline: {
          color: "gray",
          labelColor: "gray",
          formatter: (value) => `${value}`,
        },
      },
    ],
  };
  const sumData = data.datasets[0].data.reduce((prev, curr, i, arr) => {
    return prev + curr;
  }, 0);

  const getSuitableY = (y, yArray = [], direction) => {
    let result = y;
    yArray.forEach((existedY) => {
      if (existedY - 14 < result && existedY + 14 > result) {
        if (direction === "right") {
          result = existedY + 14;
        } else {
          result = existedY - 14;
        }
      }
    });

    return result;
  };

  const plugins = [
    {
      afterDraw: (chart) => {
        const ctx = chart.chart.ctx;
        //draw sumData in the center
        const centerX = ctx.canvas.width / 2;
        const centerY = ctx.canvas.height / 2;
        console.log(ctx);
        ctx.font = "16pt Calibri";
        ctx.textAlign = "center";
        ctx.fillStyle = "#C0C0C0";
        ctx.fillText(sumData, centerX - 2, centerY + 6);
        ctx.save();
        ctx.font = "10px 'Averta Std CY'";
        const leftLabelCoordinates = [];
        const rightLabelCoordinates = [];
        const chartCenterPoint = {
          x:
            (chart.chartArea.right - chart.chartArea.left) / 2 +
            chart.chartArea.left,
          y:
            (chart.chartArea.bottom - chart.chartArea.top) / 2 +
            chart.chartArea.top,
        };
        chart.config.data.labels.forEach((label, i) => {
          const meta = chart.getDatasetMeta(0);
          const arc = meta.data[i];
          const dataset = chart.config.data.datasets[0];

          // Prepare data to draw
          // important point 1
          const centerPoint = arc.getCenterPoint();
          const model = arc._model;
          let color = model.borderColor;
          let labelColor = model.borderColor;
          if (dataset.polyline && dataset.polyline.color) {
            color = dataset.polyline.color;
          }

          if (dataset.polyline && dataset.polyline.labelColor) {
            labelColor = dataset.polyline.labelColor;
          }

          const angle = Math.atan2(
            centerPoint.y - chartCenterPoint.y,
            centerPoint.x - chartCenterPoint.x
          );
          const point2X =
            chartCenterPoint.x + Math.cos(angle) * (model.outerRadius + 15);
          let point2Y =
            chartCenterPoint.y + Math.sin(angle) * (model.outerRadius + 15);

          let suitableY;
          if (point2X < chartCenterPoint.x) {
            suitableY = getSuitableY(point2Y, leftLabelCoordinates, "left");
          } else {
            suitableY = getSuitableY(point2Y, rightLabelCoordinates, "right");
          }

          point2Y = suitableY;

          let value = dataset.data[i];
          if (dataset.polyline && dataset.polyline.formatter) {
            value = dataset.polyline.formatter(value);
          }
          let edgePointX = point2X < chartCenterPoint.x ? 10 : chart.width - 10;

          if (point2X < chartCenterPoint.x) {
            leftLabelCoordinates.push(point2Y);
          } else {
            rightLabelCoordinates.push(point2Y);
          }
          //DRAW CODE
          // first line: connect between arc's center point and outside point
          ctx.strokeStyle = color;
          ctx.beginPath();
          ctx.moveTo(centerPoint.x, centerPoint.y);
          ctx.lineTo(point2X, point2Y);
          ctx.stroke();
          // second line: connect between outside point and chart's edge
          ctx.beginPath();
          ctx.moveTo(point2X, point2Y);
          ctx.lineTo(edgePointX, point2Y);
          ctx.stroke();
          //fill custom label
          const labelAlignStyle =
            edgePointX < chartCenterPoint.x ? "left" : "right";
          const labelX = edgePointX;
          const labelY = point2Y;
          ctx.textAlign = labelAlignStyle;
          ctx.textBaseline = "bottom";
          ctx.font = "10pt Calibri";
          ctx.fillStyle = labelColor;
          ctx.fillText(value, labelX, labelY);
        });
        ctx.restore();
      },
    },
  ];

  const options = {
    cutoutPercentage: 60,
    events: [],
    legend: {
      display: false,
    },
    layout: {
      padding: {
        top: 25,
        left: 0,
        right: 0,
        bottom: 25,
      },
    },
  };
  return (
    <Doughnut data={data} options={options} plugins={plugins} width="160px" />
  );
}
