// Fixed local simulation: no deployed grid or random render-time values.
export const demoStart = Date.UTC(2026, 9, 15);
export const monitoringEvents = [
  { minute: 852, label: "14:12 — Voltage deviation", score: 0.73 },
  { minute: 944, label: "15:44 — Sensor drift", score: 0.81 },
  { minute: 1101, label: "18:21 — Measurement dropout", score: 0.94 },
];
export const demoMonitoringData = Array.from({ length: 1441 }, (_, minute) => {
  const cycle = Math.sin(minute / 73);
  const load = 2.9 + 1.2 * Math.sin((minute - 420) / 230) + 0.18 * Math.cos(minute / 17);
  const pulse = monitoringEvents.reduce(
    (value, event) =>
      Math.max(value, event.score * Math.exp(-(((minute - event.minute) / 5) ** 2))),
    0
  );
  return {
    timestamp: demoStart + minute * 60000,
    voltage: +(230 + 1.1 * cycle + 0.35 * Math.cos(minute / 11) + pulse * 4).toFixed(2),
    current: +(load * 4.6 + 0.22 * cycle).toFixed(2),
    activePower: +load.toFixed(3),
    reactivePower: +(load * 0.24 + 0.035 * cycle).toFixed(3),
    residual: +(0.08 * Math.sin(minute / 13) + pulse * 1.4).toFixed(3),
    anomaly: +Math.max(0.03, 0.1 + 0.04 * Math.cos(minute / 29), pulse).toFixed(3),
  };
});
export const monitoringVariables = [
  { key: "voltage", title: "Voltage", unit: "V", color: "#0075ff" },
  { key: "current", title: "Current", unit: "A", color: "#2cd9ff" },
  { key: "activePower", title: "Active Power", unit: "kW", color: "#01b574" },
  { key: "reactivePower", title: "Reactive Power", unit: "kVAr", color: "#b392ff" },
  { key: "residual", title: "Forecast Residual", unit: "V", color: "#ffb547" },
  { key: "anomaly", title: "Anomaly Score", unit: "", color: "#f65b79" },
];
export function getMonitoringWindow(hours) {
  return demoMonitoringData.slice(-(hours * 60 + 1));
}
