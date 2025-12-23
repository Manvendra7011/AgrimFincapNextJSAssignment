"use client";

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function TrafficByLocationChart() {
  const options = {
    chart: {
      type: "donut",
    },
    labels: ["United States", "Canada", "Mexico", "Other"],
    colors: ["#111111", "#7DB7FF", "#7BE089", "#A7C0E8"],
    dataLabels: { enabled: false },
    legend: { show: false },

    stroke: {
      width: 6,         
      lineCap: "round",  
    },

    plotOptions: {
      pie: {
        donut: {
          size: "58%",   
        },
        expandOnClick: true, 
      },
    },

    states: {
      hover: {
        filter: { type: "none" },
      },
      active: {
        filter: { type: "none" },
      },
    },
  };

  const series = [52.1, 22.8, 13.9, 11.2];

  return (
    <Chart
      options={options}
      series={series}
      type="donut"
      height={220}
    />
  );
}
