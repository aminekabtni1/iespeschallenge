import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import { IoPulse } from "react-icons/io5";
export default function GridKpiCard({ title, value, detail = "", color = "success" }) {
  return (
    <MiniStatisticsCard
      bgColor="dark"
      title={{ text: title, fontWeight: "medium" }}
      count={value}
      percentage={{ color, text: detail }}
      icon={{ color: "info", component: <IoPulse size={20} /> }}
    />
  );
}
