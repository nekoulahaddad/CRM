import React from "react";

export default function ChartSvg({ chartData }) {
  const { labels, data, dataOff, colors, borderWidth } = chartData;
  const dataOffSet = dataOff.bind(chartData);

  return (
    <svg viewBox="0 0 32 32">
      <g stroke-width={borderWidth}>
        {data.map((item, i) => (
          <circle
            cx="16"
            cy="16"
            r="16"
            stroke-dasharray={
              i === item.length - 1 ? `${item + 1} 100` : `${item} 100`
            }
            stroke-dashoffset={dataOffSet()[i]}
            stroke={colors[i]}
          ></circle>
        ))}
      </g>
    </svg>
  );
}
