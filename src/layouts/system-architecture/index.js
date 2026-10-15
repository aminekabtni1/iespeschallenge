import { Grid, Stack } from "@mui/material";
import GridPage, { Panel, Text } from "components/GridPage";
import DecisionPath from "components/DecisionPath";
import StatusBadge from "components/StatusBadge";
import VuiTypography from "components/VuiTypography";
export default function Architecture() {
  return (
    <GridPage
      title="System Architecture"
      subtitle="Hierarchical cyber-physical diagnosis • Phase 1 pipeline and planned integration"
    >
      <Panel title="Detection and diagnosis">
        <Centered>
          <DecisionPath
            steps={[
              "Raw Grid Data",
              "Model 1 — Forecasting",
              "Model 2 — Anomaly Detection",
              "Physics Engine",
              "Model 3 — Physical Event vs Data Problem",
            ]}
          />
        </Centered>
        <VuiTypography textAlign="center" color="info" py={2}>
          ↓ Branch by event category
        </VuiTypography>
        <Grid container spacing={3} alignItems="stretch">
          <Grid item xs={12} md={4}>
            <Panel title="Branch A">
              <DecisionPath steps={["Physical Event", "Model 4 — Physical Fault Type"]} />
            </Panel>
          </Grid>
          <Grid item xs={12} md={8}>
            <Panel title="Branch B">
              <DecisionPath steps={["Data Problem", "Model 5 — Sensor vs Cyber"]} />
              <VuiTypography textAlign="center" color="info" py={2}>
                ↓ Selective routing
              </VuiTypography>
              <Grid container spacing={2}>
                {[
                  ["Sensor", "Model 6 — Sensor Fault Type"],
                  ["Cyber", "Model 7 — Cyberattack Type"],
                  ["Uncertain", "Model 6 + Model 7"],
                ].map((steps) => (
                  <Grid item xs={12} sm={4} key={steps[0]}>
                    <DecisionPath steps={steps} />
                    {steps[0] !== "Sensor" && (
                      <Text mt={1} fontSize="12px">
                        Model 7 under validation
                      </Text>
                    )}
                  </Grid>
                ))}
              </Grid>
            </Panel>
          </Grid>
        </Grid>
        <VuiTypography textAlign="center" color="info" py={2}>
          ↓ All relevant diagnosis outputs merge
        </VuiTypography>
        <Centered>
          <DecisionPath
            steps={[
              { title: "Model 8 — Confidence Calibration / Fusion", detail: "Planned" },
              { title: "Explainability", detail: "Planned" },
              { title: "Human-AI Governance", detail: "Planned" },
              { title: "Audit Log", detail: "Prototype demo interface" },
            ]}
          />
        </Centered>
      </Panel>
      <Stack mt={3}>
        <Panel title="Shared Learning">
          <StatusBadge label="Future Phase" />
          <Text mt={2}>
            Future collaborative layer: federated learning across participating sites. No
            shared-learning service is connected in this prototype.
          </Text>
        </Panel>
      </Stack>
    </GridPage>
  );
}
function Centered({ children }) {
  return <div style={{ maxWidth: 650, margin: "0 auto", width: "100%" }}>{children}</div>;
}
