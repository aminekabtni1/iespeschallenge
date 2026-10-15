// Fictional demonstration events, separate from experimental model results.
export const latestEvent = {
  id: "EVT-2026-00124",
  timestamp: "2026-10-15 15:44 UTC (Demo timestamp)",
  node: "Residential Node 04",
  event: "Sensor Fault",
  subtype: "Calibration Bias",
  confidence: "94%",
  severity: "Medium",
  variable: "Voltage",
  action: "Inspect the affected sensor.",
  operationalAction: "No automatic grid control action required.",
};
const events = [
  ["Voltage anomaly", "Physical Event", "92%", "Medium", "Operator review", "Pending Review"],
  ["Calibration Bias", "Sensor Fault", "94%", "Medium", "Inspect Sensor", "Pending Review"],
  ["Replay Attack", "Cyber Attack", "91%", "High", "Security investigation", "Pending Review"],
  ["Measurement Dropout", "Sensor Fault", "97%", "Low", "Flag sensor", "Automatic"],
  ["Current imbalance", "Physical Event", "93%", "High", "Inspect feeder", "Approved"],
  ["Sensor drift", "Sensor Fault", "90%", "Medium", "Recalibrate sensor", "Approved"],
  ["Packet injection", "Cyber Attack", "89%", "High", "Review network traffic", "Rejected"],
  ["Reactive power deviation", "Physical Event", "95%", "Low", "Monitor power factor", "Automatic"],
  [
    "Stuck measurement",
    "Sensor Fault",
    "96%",
    "Medium",
    "Inspect metering device",
    "Pending Review",
  ],
  ["Connection loss", "Cyber Attack", "88%", "High", "Investigate connection", "Pending Review"],
];
export const demoEvents = events.map((event, i) => ({
  id: `DEMO-EVT-${String(i + 1).padStart(3, "0")}`,
  timestamp: `2026-10-15 ${String(19 - i).padStart(2, "0")}:${i % 2 ? "44" : "12"} UTC`,
  node: `Residential Node ${String((i % 6) + 1).padStart(2, "0")}`,
  event: event[0],
  category: event[1],
  confidence: event[2],
  severity: event[3],
  action: event[4],
  decision: event[5],
}));
