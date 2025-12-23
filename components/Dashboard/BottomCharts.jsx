import TrafficByDeviceChart from "./TrafficByDeviceChart";
import TrafficByLocationChart from "./TrafficByLocationChart";

export default function BottomCharts() {
  return (
    <div className="grid grid-cols-2 gap-4">
      

      <div className="bg-white rounded-2xl p-5">
        <h3 className="text-[13px] mb-4 text-black font-bold
               transition-transform duration-200 ease-out
               hover:translate-x-[4px]">
          Traffic by Device
        </h3>
        <TrafficByDeviceChart />
      </div>


<div className="bg-white rounded-2xl p-5 flex gap-6 items-center">
  

  <div>
  <h3
    className="text-[13px] mb-4 text-black font-bold
               transition-transform duration-200 ease-out
               hover:translate-x-[4px]"
  >
    Traffic by Location
  </h3>

  <TrafficByLocationChart />
</div>



  <div className="text-[12px] space-y-2 text-black">
    
    <div className="flex items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-black" />
        <span>United States</span>
      </div>
      <span>52.1%</span>
    </div>

    <div className="flex items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#7DB7FF]" />
        <span>Canada</span>
      </div>
      <span>22.8%</span>
    </div>

    <div className="flex items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#7BE089]" />
        <span>Mexico</span>
      </div>
      <span>13.9%</span>
    </div>

    <div className="flex items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#A7C0E8]" />
        <span>Other</span>
      </div>
      <span>11.2%</span>
    </div>

  </div>
</div>

    </div>
  );
}
