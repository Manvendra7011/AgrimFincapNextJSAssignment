import HeaderRow from "./HeaderRow";
import StatsCards from "./StatsCards";
import ChartsRow from "./ChartsRow";
import BottomCharts from "./BottomCharts";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <HeaderRow />
      <StatsCards />
      <ChartsRow />
      <BottomCharts />
    </div>
  );
}
