"use client";

import { TrendingUp, TrendingDown } from "lucide-react";

const stats = [
  {
    title: "Views",
    value: "7,265",
    delta: "+11.01%",
    bg: "bg-[#EEF0FF]",
    trend: "up",
  },
  {
    title: "Visits",
    value: "3,671",
    delta: "-0.03%",
    bg: "bg-[#EAF4FF]",
    trend: "down",
  },
  {
    title: "New Users",
    value: "156",
    delta: "+15.03%",
    bg: "bg-[#EEF0FF]",
    trend: "up",
  },
  {
    title: "Active Users",
    value: "2,318",
    delta: "+6.08%",
    bg: "bg-[#EAF4FF]",
    trend: "up",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map((s) => (
        <div
          key={s.title}
          className={`rounded-2xl p-5 ${s.bg}`}
        >
          <p className="text-[12px] text-black/60">
            {s.title}
          </p>

          <div className="flex items-center gap-2 mt-2">
            {/* Value */}
            <span className="text-[24px] font-semibold text-black">
              {s.value}
            </span>

            {/* Delta + Arrow */}
            <div className="flex items-center gap-1 text-[12px] text-black/60">
              {s.delta}
              {s.trend === "up" ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
