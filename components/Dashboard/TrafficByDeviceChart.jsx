"use client";

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function TrafficByDeviceChart() {
  const options = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },

    plotOptions: {
      bar: {
        borderRadius: 10,       
        columnWidth: "38%",        
        distributed: true,
      },
    },

    colors: [
      "#9DB7E8",
      "#6EE7D2", 
      "#000000", 
      "#7DB7FF", 
      "#B89AF4", 
      "#7BE089", 
    ],

    states: {
      hover: {
        filter: {
          type: "darken",
          value: 0.6,
        },
      },
    },

    dataLabels: { enabled: false },

    grid: {
      strokeDashArray: 4,
      borderColor: "#E5E7EB",
    },

    xaxis: {
      categories: ["Linux", "Mac", "iOS", "Windows", "Android", "Other"],
      labels: {
        style: {
          colors: "#9CA3AF",
          fontSize: "11px",
        },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },

    yaxis: {
      min: 0,
      max: 30000,
      tickAmount: 3,
      labels: {
        formatter: (val) =>
          val === 0 ? "0" : `${val / 1000}K`,
        style: {
          colors: "#9CA3AF",
          fontSize: "11px",
        },
      },
    },

    legend: {
      show: false,
    },
  };

const series = [
  {
    name: "Traffic",
    data: [18000, 30000, 22000, 30000, 14000, 26000],
  },
];


  return (
    <Chart
      options={options}
      series={series}
      type="bar"
      height={210}
    />
  );
}
