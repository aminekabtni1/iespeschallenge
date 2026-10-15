import { useState } from "react";
import { Grid, Stack } from "@mui/material";
import GridPage, { Text } from "components/GridPage";
import GridKpiCard from "components/GridKpiCard";
import MonitoringChart from "components/MonitoringChart";
import VuiButton from "components/VuiButton";
import {
  getMonitoringWindow,
  monitoringVariables,
  demoMonitoringData,
} from "data/demoMonitoringData";
export default function LiveMonitoring() {
  const [hours, setHours] = useState(24);
  const data = getMonitoringWindow(hours);
  const snapshot = demoMonitoringData[demoMonitoringData.length - 1];
  return (
    <GridPage
      title="Live Monitoring"
      subtitle="Electrical measurements, forecast residuals and anomaly indicators"
      demo
    >
      <Grid container spacing={3} mb={3}>
        {monitoringVariables.slice(0, 4).map((variable) => (
          <Grid item xs={12} sm={6} xl={3} key={variable.key}>
            <GridKpiCard
              title={variable.title}
              value={`${snapshot[variable.key]} ${variable.unit}`}
            />
          </Grid>
        ))}
      </Grid>
      <Stack direction="row" gap={1} flexWrap="wrap" mb={1}>
        {[1, 6, 12, 24].map((range) => (
          <VuiButton
            key={range}
            aria-pressed={hours === range}
            variant={hours === range ? "gradient" : "outlined"}
            color="info"
            size="small"
            onClick={() => setHours(range)}
          >
            {range}H
          </VuiButton>
        ))}
      </Stack>
      <Text mb={3} role="status">
        Showing {hours}H • {data.length} samples • One-minute interval • Fixed demo endpoint: 16 Oct
        2026 00:00 UTC
      </Text>
      <Grid container spacing={3}>
        {monitoringVariables.map((variable) => (
          <Grid item xs={12} lg={6} key={variable.key}>
            <MonitoringChart
              variable={variable}
              data={data}
              height={290}
              markers={variable.key === "anomaly"}
            />
          </Grid>
        ))}
      </Grid>
    </GridPage>
  );
}
