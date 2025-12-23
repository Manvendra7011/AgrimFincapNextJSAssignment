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
        borderRadius: 8,
        columnWidth: "45%",
        distributed: true, // 🔑 THIS FIXES COLORS
      },
    },
    colors: [
      "#9DB7E8", // Linux
      "#6EE7D2", // Mac
      "#000000", // iOS
      "#7DB7FF", // Windows
      "#B89AF4", // Android
      "#7BE089", // Other
    ],
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 0.65,
        },
      },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: ["Linux", "Mac", "iOS", "Windows", "Android", "Other"],
      labels: {
        style: {
          colors: "#9CA3AF",
          fontSize: "11px",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#9CA3AF",
          fontSize: "11px",
        },
      },
    },
  };

  const series = [
    {
      name: "Traffic",
      data: [18000, 30000, 22000, 32000, 14000, 26000],
    },
  ];

  return <Chart options={options} series={series} type="bar" height={220} />;
}
