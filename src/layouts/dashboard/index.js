/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import { Card, Grid, Stack } from "@mui/material";
import GridPage, { Text } from "components/GridPage";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import MonitoringChart from "components/MonitoringChart";
import StatusBadge from "components/StatusBadge";
import { getMonitoringWindow, monitoringVariables } from "data/demoMonitoringData";
import { latestEvent } from "data/demoEvents";

const data = getMonitoringWindow(6);
const snapshot = data[data.length - 1];
const kpis = [
  { title: "GRID STATE", value: "NORMAL", detail: "Current demo state", color: "#01b574" },
  { title: "ANOMALY SCORE", value: "0.14", detail: "Normalized score / 1.00", color: "#2cd9ff" },
  {
    title: "PHYSICS CONSISTENCY",
    value: "96",
    unit: "%",
    detail: "Demo physics agreement",
    color: "#2cd9ff",
  },
  {
    title: "SYSTEM CONFIDENCE",
    value: "92",
    unit: "%",
    detail: "Illustrative confidence",
    color: "#a99bff",
  },
];
const path = [
  "Anomaly Detected",
  "No Physical Disturbance",
  "Data Problem",
  "Sensor Fault",
  "Calibration Bias",
];

function SectionLabel({ children, ...props }) {
  return (
    <VuiTypography
      variant="caption"
      color="text"
      fontWeight="medium"
      letterSpacing="1px"
      {...props}
    >
      {children}
    </VuiTypography>
  );
}

export default function Overview() {
  return (
    <VuiBox
      sx={{
        "& header": { mb: 2 },
        "& header > .MuiStack-root": { mb: 1 },
        "& header h3": { fontSize: { xs: "1.5rem", md: "1.85rem" }, mb: 0.5 },
        "& footer": { mt: 2 },
      }}
    >
      <GridPage
        title="Grid Monitoring Overview"
        subtitle="Cyber-physical monitoring and AI-assisted event diagnosis"
        demo
      >
        <Grid container spacing={2} mb={2}>
          {kpis.map((kpi) => (
            <Grid item xs={6} lg={3} key={kpi.title}>
              <Card
                sx={{
                  height: "100%",
                  p: { xs: 1.75, md: 2.25 },
                  borderTop: `2px solid ${kpi.color}`,
                  boxShadow: "none",
                }}
              >
                <SectionLabel sx={{ fontSize: { xs: "9px", sm: "11px" }, lineHeight: 1.5 }}>
                  {kpi.title}
                </SectionLabel>
                <VuiTypography
                  color="white"
                  fontWeight="bold"
                  sx={{
                    fontSize: { xs: "1.65rem", md: "2.1rem" },
                    lineHeight: 1.3,
                    my: 0.75,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {kpi.value}
                  <VuiTypography component="span" color="text" sx={{ fontSize: "1rem", ml: 0.4 }}>
                    {kpi.unit || ""}
                  </VuiTypography>
                </VuiTypography>
                <Stack direction="row" alignItems="center" spacing={0.75}>
                  {kpi.value === "NORMAL" && (
                    <VuiBox
                      width={6}
                      height={6}
                      borderRadius="50%"
                      sx={{ backgroundColor: kpi.color, flexShrink: 0 }}
                    />
                  )}
                  <Text fontSize="11px">{kpi.detail}</Text>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={2} alignItems="stretch">
          <Grid item xs={12} xl={8}>
            <Card sx={{ height: "100%", p: { xs: 1.75, md: 2.5 } }}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                gap={0.5}
                mb={2}
              >
                <VuiBox>
                  <VuiTypography variant="h6" color="white">
                    Electrical Monitoring
                  </VuiTypography>
                  <Text fontSize="12px">Voltage, current and power • Last 6 hours</Text>
                </VuiBox>
                <SectionLabel sx={{ alignSelf: { sm: "center" }, fontSize: "10px" }}>
                  18:00–00:00 UTC • 1 MIN
                </SectionLabel>
              </Stack>
              <Grid
                container
                spacing={2}
                sx={{
                  "& .MuiCard-root": {
                    p: 0,
                    background: "transparent",
                    boxShadow: "none",
                    backdropFilter: "none",
                    borderRadius: 0,
                  },
                  "& .MuiCard-root > h6": { mb: 0.25, fontSize: "13px" },
                  "& .MuiCard-root > p": { fontSize: "10px", mb: 0 },
                }}
              >
                {monitoringVariables.slice(0, 4).map((variable) => (
                  <Grid item xs={12} md={6} key={variable.key}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="baseline"
                      mb={0.5}
                    >
                      <SectionLabel sx={{ fontSize: "10px" }}>CURRENT SNAPSHOT</SectionLabel>
                      <VuiTypography
                        variant="body2"
                        color="white"
                        fontWeight="bold"
                        sx={{ fontVariantNumeric: "tabular-nums" }}
                      >
                        {snapshot[variable.key]}{" "}
                        <VuiTypography component="span" variant="caption" color="text">
                          {variable.unit}
                        </VuiTypography>
                      </VuiTypography>
                    </Stack>
                    <MonitoringChart variable={variable} data={data} height={190} />
                  </Grid>
                ))}
              </Grid>
              <Text fontSize="10px" mt={1}>
                Demo Monitoring Data • Fixed local time series; no deployed grid connection.
              </Text>
            </Card>
          </Grid>
          <Grid item xs={12} xl={4}>
            <Stack spacing={2} height="100%">
              <Card sx={{ p: 2.25 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1.5}>
                  <SectionLabel>LATEST EVENT</SectionLabel>
                  <StatusBadge label={latestEvent.severity} />
                </Stack>
                <VuiTypography variant="h5" color="white" fontWeight="bold">
                  {latestEvent.event}
                </VuiTypography>
                <Text fontSize="13px" mb={1.5}>
                  {latestEvent.subtype}
                </Text>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  pb={1.5}
                  mb={1.5}
                  sx={{ borderBottom: "1px solid rgba(160,174,192,.16)" }}
                >
                  <VuiBox>
                    <SectionLabel fontSize="10px">AFFECTED VARIABLE</SectionLabel>
                    <Text color="white" fontSize="13px">
                      {latestEvent.variable}
                    </Text>
                  </VuiBox>
                  <VuiBox textAlign="right">
                    <SectionLabel fontSize="10px">CONFIDENCE</SectionLabel>
                    <VuiTypography color="white" fontWeight="bold" variant="h6">
                      {latestEvent.confidence}
                    </VuiTypography>
                  </VuiBox>
                </Stack>
                <SectionLabel fontSize="10px">RECOMMENDED ACTION</SectionLabel>
                <Text color="white" fontSize="13px" mb={1}>
                  {latestEvent.action}
                </Text>
                <Text fontSize="11px">{latestEvent.operationalAction}</Text>
              </Card>
              <Card sx={{ p: 2.25, flex: 1 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1.5}>
                  <SectionLabel>AI DECISION PATH</SectionLabel>
                  <Text fontSize="10px">DEMO TRACE</Text>
                </Stack>
                <Stack component="ol" sx={{ listStyle: "none", p: 0, m: 0 }}>
                  {path.map((step, index) => (
                    <VuiBox
                      component="li"
                      key={step}
                      display="flex"
                      alignItems="center"
                      sx={{
                        position: "relative",
                        minHeight: 35,
                        pl: 2,
                        borderLeft: "1px solid rgba(44,217,255,.3)",
                        ml: 0.5,
                      }}
                    >
                      <VuiBox
                        sx={{
                          position: "absolute",
                          left: -3.5,
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          backgroundColor: index >= 3 ? "#2cd9ff" : "#607393",
                        }}
                      />
                      <Text
                        color={index >= 3 ? "white" : "text"}
                        fontWeight={index >= 3 ? "medium" : "regular"}
                        fontSize="12px"
                      >
                        {step}
                      </Text>
                    </VuiBox>
                  ))}
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  mt={1.5}
                  pt={1.5}
                  sx={{ borderTop: "1px solid rgba(160,174,192,.16)" }}
                >
                  <Text fontSize="11px">Illustrative outcome confidence</Text>
                  <VuiTypography color="info" variant="body2" fontWeight="bold">
                    94%
                  </VuiTypography>
                </Stack>
              </Card>
            </Stack>
          </Grid>
        </Grid>
        <Text fontSize="10px" mt={1.5}>
          Diagnosis, confidence and physics values are illustrative. Experimental evaluation metrics
          are reported separately under Model Performance.
        </Text>
      </GridPage>
    </VuiBox>
  );
}
