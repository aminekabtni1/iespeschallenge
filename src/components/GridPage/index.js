import { Card, Stack, IconButton } from "@mui/material";
import { IoMenu } from "react-icons/io5";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import StatusBadge from "components/StatusBadge";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import { useVisionUIController, setMiniSidenav } from "context";
export function Panel({ title, children, sx = {} }) {
  return (
    <Card sx={{ height: "100%", minWidth: 0, ...sx }}>
      <VuiTypography variant="h6" color="white" mb={2}>
        {title}
      </VuiTypography>
      {children}
    </Card>
  );
}
export function Text({ children, ...props }) {
  return (
    <VuiTypography variant="body2" color="text" {...props}>
      {children}
    </VuiTypography>
  );
}
export default function GridPage({ title, subtitle, demo = false, children }) {
  const [controller, dispatch] = useVisionUIController();
  return (
    <DashboardLayout>
      <VuiBox component="header" mb={3}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={1}
          mb={2}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton
              aria-label="Toggle navigation"
              onClick={() => setMiniSidenav(dispatch, !controller.miniSidenav)}
              sx={{ color: "#ffffff", display: { xl: "none" } }}
            >
              <IoMenu />
            </IconButton>
            <Text fontSize="12px">SMART GRID / PHASE 1</Text>
          </Stack>
          <StatusBadge label={demo ? "Demo Monitoring Data" : "Phase 1 Research"} />
        </Stack>
        <VuiTypography
          variant="h3"
          color="white"
          sx={{ fontSize: { xs: "1.65rem", md: "2.1rem" }, overflowWrap: "anywhere" }}
          mb={1}
        >
          {title}
        </VuiTypography>
        <Text>{subtitle}</Text>
        {demo && (
          <Text mt={1} fontSize="12px">
            Simulated measurements and diagnosis for interface demonstration • Fixed scenario: 15
            Oct 2026 • UTC
          </Text>
        )}
      </VuiBox>
      <VuiBox component="main">{children}</VuiBox>
      <VuiBox component="footer" mt={4} pb={1}>
        <Text fontSize="12px">Smart Grid AI • Phase 1 frontend prototype • Human oversight</Text>
      </VuiBox>
    </DashboardLayout>
  );
}
