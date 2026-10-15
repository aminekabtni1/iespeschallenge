import LineChart from "examples/Charts/LineCharts/LineChart";
import { Panel, Text } from "components/GridPage";
import { monitoringEvents, demoStart } from "data/demoMonitoringData";
export default function MonitoringChart({ variable, data, height = 250, markers = false }) {
  const visibleEvents = monitoringEvents.filter(
    (e) => demoStart + e.minute * 60000 >= data[0].timestamp
  );
  const options = {
    chart: {
      background: "transparent",
      id: `grid-${variable.key}`,
      toolbar: { show: false },
      animations: { enabled: false },
      fontFamily: "Plus Jakarta Display, Arial, sans-serif",
      foreColor: "#a0aec0",
      zoom: { enabled: false },
    },
    colors: [variable.color],
    theme: { mode: "dark" },
    tooltip: { theme: "dark", x: { format: "HH:mm" } },
    dataLabels: { enabled: false },
    stroke: { curve: "smooth", width: 2 },
    fill: { type: "gradient", gradient: { opacityFrom: 0.35, opacityTo: 0.02, stops: [0, 100] } },
    grid: { borderColor: "#292d50", strokeDashArray: 5 },
    xaxis: {
      type: "datetime",
      labels: { datetimeUTC: true, format: "HH:mm", style: { colors: "#a0aec0" } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      min: variable.key === "anomaly" ? 0 : undefined,
      max: variable.key === "anomaly" ? 1 : undefined,
      labels: {
        formatter: (value) => Number(value).toFixed(variable.key === "anomaly" ? 2 : 1),
        style: { colors: "#a0aec0" },
      },
    },
    legend: { show: false },
    annotations: {
      xaxis: markers
        ? visibleEvents.map((e) => ({
            x: demoStart + e.minute * 60000,
            borderColor: "#ffb547",
            label: {
              text: e.label.slice(0, 5),
              style: { color: "#11152c", background: "#ffb547" },
            },
          }))
        : [],
    },
  };
  return (
    <Panel title={variable.title}>
      <Text fontSize="12px" mb={1}>
        {variable.unit || "Normalized score"} • Simulated • UTC
      </Text>
      <div style={{ height, minWidth: 0 }}>
        <LineChart
          lineChartOptions={options}
          lineChartData={[
            { name: variable.title, data: data.map((row) => [row.timestamp, row[variable.key]]) },
          ]}
        />
      </div>
      {markers && (
        <Text fontSize="12px" mt={1}>
          {visibleEvents.length
            ? visibleEvents.map((e) => e.label).join(" • ")
            : "No marked events in this time window."}
        </Text>
      )}
    </Panel>
  );
}
