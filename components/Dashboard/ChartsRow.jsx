import TotalUsersChart from "./TotalUserCharts";
function TotalUsersHeader() {
  return (
    <div className="flex items-center gap-4 mb-4 text-[12px]">
      <span className="text-black font-bold">Total Users</span>
      <span className="text-black/40 hover:text-black">Total Projects</span>
      <span className="text-black/40 hover:text-black">Operating Status</span>

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
    { name: "Google", bars: ["w-3", "w-2", "w-1"] },
    { name: "YouTube", bars: ["w-4", "w-3", "w-2"] },
    { name: "Instagram", bars: ["w-3", "w-2", "w-1"] },
    { name: "Pinterest", bars: ["w-5", "w-4", "w-2"] },
    { name: "Facebook", bars: ["w-2", "w-2", "w-1"] },
    { name: "Twitter", bars: ["w-3", "w-3", "w-2"] },
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
            <span className="text-[12px] text-black">
              {item.name}
            </span>

            {/* THREE micro bars */}
            <div className="flex items-center gap-1">
              <span className={`h-[2px] ${item.bars[0]} bg-black rounded-full`} />
              <span className={`h-[2px] ${item.bars[1]} bg-gray-400 rounded-full`} />
              <span className={`h-[2px] ${item.bars[2]} bg-gray-300 rounded-full`} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}



export default function ChartsRow() {
  return (
    <div className="grid grid-cols-4 gap-4">
      
      {/* Line chart – wider */}
      <div className="col-span-3 bg-white rounded-2xl p-5">
        <TotalUsersHeader />
        <TotalUsersChart />
      </div>

      {/* Traffic by Website – narrower */}
      <div className="bg-white rounded-2xl p-5">
        <TrafficByWebsite />
      </div>

    </div>
  );
}

