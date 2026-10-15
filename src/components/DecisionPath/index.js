import { Stack, Card } from "@mui/material";
import VuiTypography from "components/VuiTypography";
export default function DecisionPath({ steps }) {
  return (
    <Stack component="ol" spacing={0} sx={{ listStyle: "none", m: 0, p: 0 }}>
      {steps.map((step, i) => (
        <Stack component="li" key={step.title || step} alignItems="stretch">
          <Card
            sx={{
              p: 2,
              background: "linear-gradient(120deg, rgba(0,117,255,.20), rgba(15,21,53,.8))",
              border: "1px solid rgba(44,217,255,.35)",
              boxShadow: "none",
            }}
          >
            {step.label && (
              <VuiTypography color="info" variant="caption">
                {step.label}
              </VuiTypography>
            )}
            <VuiTypography color="white" variant="body2" fontWeight="medium">
              {step.title || step}
            </VuiTypography>
            {step.detail && (
              <VuiTypography color="text" variant="caption">
                {step.detail}
              </VuiTypography>
            )}
          </Card>
          {i < steps.length - 1 && (
            <VuiTypography textAlign="center" color="info" py={0.5} aria-hidden="true">
              ↓
            </VuiTypography>
          )}
        </Stack>
      ))}
    </Stack>
  );
}
