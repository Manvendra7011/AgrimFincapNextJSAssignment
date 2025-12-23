import TotalUsersChart from "./TotalUserCharts";

function TotalUsersHeader() {
  return (
    <div className="flex items-center gap-4 mb-4 text-[12px]">
      <span className="text-black font-bold">Total Users</span>
      <span className="text-black/40">Total Projects</span>
      <span className="text-black/40">Operating Status</span>

      <div className="ml-auto flex items-center gap-4">
        <span className="flex items-center gap-1 text-black">
          ● This year
        </span>
        <span className="flex items-center gap-1 text-black">
          ● Last year
        </span>
      </div>
    </div>
  );
}

const websites = ["Google","YouTube","Instagram","Pinterest","Facebook","Twitter"];

function TrafficByWebsite() {
  const data = [
    { name: "Google", primary: "w-3", secondary: "w-2" },
    { name: "YouTube", primary: "w-4", secondary: "w-3" },
    { name: "Instagram", primary: "w-3", secondary: "w-2" },
    { name: "Pinterest", primary: "w-5", secondary: "w-4" },
    { name: "Facebook", primary: "w-2", secondary: "w-2" },
    { name: "Twitter", primary: "w-3", secondary: "w-3" },
  ];

  return (
    <>
      <h3 className="text-[13px] font-bold mb-4 text-black">
        Traffic by Website
      </h3>

      <div className="space-y-3">
        {data.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between"
          >
            {/* Website name */}
            <span className="text-[12px] text-black">
              {item.name}
            </span>

            {/* Two tiny bars */}
            <div className="flex items-center gap-1">
              <span
                className={`h-[2px] ${item.primary} bg-black rounded-full`}
              />
              <span
                className={`h-[2px] ${item.secondary} bg-gray-300 rounded-full`}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}


export default function ChartsRow() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2 bg-white rounded-2xl p-5">
        <TotalUsersHeader />
        <TotalUsersChart />
      </div>

      <div className="bg-white rounded-2xl p-5">
        <TrafficByWebsite />
      </div>
    </div>
  );
}
