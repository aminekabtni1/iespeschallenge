import { Grid, Stack } from "@mui/material";
import GridPage, { Panel, Text } from "components/GridPage";
import DecisionPath from "components/DecisionPath";
import StatusBadge from "components/StatusBadge";
import { latestEvent as event } from "data/demoEvents";
export default function EventAnalysis() {
  return (
    <GridPage
      title="Event Analysis"
      subtitle="Trace an illustrative sensor diagnosis from measurements to evidence"
      demo
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
          <Panel title="Event Summary">
            <Stack spacing={2}>
              {[
                ["Event ID", event.id],
                ["Timestamp", event.timestamp],
                ["Affected Node", event.node],
                ["Primary Variable", event.variable],
                ["Status", event.event],
                ["Confidence", event.confidence],
                ["Severity", event.severity],
              ].map(([label, value]) => (
                <Text key={label}>
                  <strong style={{ color: "white" }}>{label}: </strong>
                  {value}
                </Text>
              ))}
            </Stack>
            <Text mt={3} fontSize="12px">
              Illustrative reasoning only. Confidence calibration and explainability integration are
              planned.
            </Text>
          </Panel>
        </Grid>
        <Grid item xs={12} md={7}>
          <Panel title="AI Reasoning Chain">
            <DecisionPath
              steps={[
                { title: "Incoming Measurements" },
                {
                  label: "Model 1",
                  title: "Expected Behavior",
                  detail: "Actual Voltage differs from forecast",
                },
                { label: "Model 2", title: "ANOMALY DETECTED" },
                { label: "Physics Engine", title: "Physical network remains consistent" },
                { label: "Model 3", title: "DATA PROBLEM" },
                { label: "Model 5", title: "SENSOR" },
                { label: "Model 6", title: "CALIBRATION BIAS" },
                {
                  label: "Confidence Layer",
                  title: "94%",
                  detail: "Illustrative confidence — integration planned",
                },
              ]}
            />
          </Panel>
        </Grid>
        <Grid item xs={12} md={7}>
          <Panel title="Explanation">
            <Text>
              The reported voltage deviates from the expected value while neighboring measurements
              and the power-flow state remain consistent with normal physical operation. The event
              is therefore more compatible with a sensor calibration problem than with a genuine
              electrical disturbance.
            </Text>
          </Panel>
        </Grid>
        <Grid item xs={12} md={5}>
          <Panel title="Evidence">
            <Stack spacing={2}>
              {[
                ["Forecast residual", "High"],
                ["Physics inconsistency", "Low"],
                ["Neighbor inconsistency", "Low"],
                ["Sensor temporal bias", "High"],
              ].map(([label, value]) => (
                <Stack key={label} direction="row" justifyContent="space-between" gap={1}>
                  <Text>{label}</Text>
                  <StatusBadge label={value} />
                </Stack>
              ))}
            </Stack>
          </Panel>
        </Grid>
      </Grid>
    </GridPage>
  );
}
