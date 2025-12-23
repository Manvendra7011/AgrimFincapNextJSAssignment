"use client";

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function TotalUsersChart() {
  const options = {
    chart: {
      toolbar: { show: false },
      width: "100%", // ✅ REQUIRED in grid layouts
    },

    stroke: {
      curve: "smooth",
      width: [2, 2],
      dashArray: [0, 6], // blue dotted
    },

    colors: ["#111111", "#8FB4FF"],

    grid: {
      strokeDashArray: 4,
    },

    states: {
      hover: { filter: { type: "none" } },
      active: { filter: { type: "none" } },
    },

    tooltip: {
      theme: "light",
      style: {
        fontSize: "12px",
        color: "#000000",
      },
    },

    xaxis: {
      categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul"],
      labels: {
        style: {
          colors: "#9CA3AF",
          fontSize: "11px",
        },
      },
    },

    yaxis: {
      min: 0,
      max: 30000,
      tickAmount: 3,
      labels: {
        formatter: (val) => (val === 0 ? "0" : `${val / 1000}k`),
        style: {
          colors: "#9CA3AF",
          fontSize: "11px",
        },
      },
    },

    legend: { show: false },
  };

  const series = [
    {
      name: "This year",
      data: [12000, 8000, 14000, 25000, 28000, 19000, 24000],
    },
    {
      name: "Last year",
      data: [5000, 13000, 20000, 7000, 15000, 12000, 30000],
    },
  ];

  return (
    <Chart
      options={options}
      series={series}
      type="line"
      height={260}
    />
  );
}
